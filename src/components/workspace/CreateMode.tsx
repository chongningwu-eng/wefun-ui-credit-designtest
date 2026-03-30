import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, GitBranch } from 'lucide-react';
import { ChatInputArea } from './ChatInputArea';
import { VersionCard } from './VersionCard';

// Compute tree-path labels
function computeTreeLabels(versions: any[]): Record<string, string> {
  const labels: Record<string, string> = {};
  const getChildren = (parentId: string | null) =>
    versions.filter(v => v.parentId === parentId);
  const walk = (parentId: string | null, prefix: string) => {
    const children = getChildren(parentId);
    children.forEach((child, index) => {
      const label = prefix ? `${prefix}.${index + 1}` : `v${index + 1}`;
      labels[child.id] = label;
      walk(child.id, label);
    });
  };
  walk(null, '');
  return labels;
}

function buildTree(versions: any[], parentId: string | null): any[] {
  return versions
    .filter(v => v.parentId === parentId)
    .map(v => ({ ...v, children: buildTree(versions, v.id) }));
}

export function CreateMode({
  balance,
  hasChatError,
  setHasChatError,
  isWarningVisible,
  setIsWarningVisible,
  versions,
  activeVersionId,
  setActiveVersionId,
  stagedFiles,
  setStagedFiles,
  onSendPrompt,
  isTreeExpanded
}: any) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const treeLabels = computeTreeLabels(versions);

  useEffect(() => {
    if (scrollRef.current && !isTreeExpanded) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [versions.length, isTreeExpanded]);

  // Tree node component
  const TreeNode = ({ node }: { node: any }) => {
    const isActive = node.id === activeVersionId;
    const isLineage = activeLineage.some(v => v.id === node.id);
    const label = treeLabels[node.id] || node.id;
    return (
      <li>
        <div
          className={`relative mx-auto w-[280px] text-left transition-all duration-200 hover:scale-[1.01] rounded-lg
            ${isLineage && !isActive ? 'ring-2 ring-[#3B82F6]/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] bg-[#3B82F6]/[0.02]' : ''}
          `}
        >
          <VersionCard
            version={node}
            isActive={isActive}
            onClick={() => setActiveVersionId(node.id)}
            onSelectSuggestion={(prompt: string) => onSendPrompt(prompt)}
            treeLabel={label}
          />
        </div>
        {node.children && node.children.length > 0 && (
          <ul>
            {node.children.map((child: any) => (
              <TreeNode key={child.id} node={child} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  const orgTreeCSS = `
    .side-tree ul { padding-top: 24px; position: relative; display: flex; justify-content: center; padding-left: 0; }
    .side-tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 24px 8px 0 8px; }
    .side-tree li::before, .side-tree li::after { content: ''; position: absolute; top: 0; right: 50%; border-top: 2px solid #3F3F46; width: 50%; height: 24px; }
    .side-tree li::after { right: auto; left: 50%; border-left: 2px solid #3F3F46; }
    .side-tree li:only-child::after, .side-tree li:only-child::before { display: none; }
    .side-tree li:only-child { padding-top: 0; }
    .side-tree li:first-child::before, .side-tree li:last-child::after { border: 0 none; }
    .side-tree li:last-child::before { border-right: 2px solid #3F3F46; border-radius: 0 6px 0 0; }
    .side-tree li:first-child::after { border-radius: 6px 0 0 0; }
    .side-tree ul ul::before { content: ''; position: absolute; top: 0; left: 50%; border-left: 2px solid #3F3F46; width: 0; height: 24px; transform: translateX(-50%); }
  `;

  const treeData = buildTree(versions, null);

  // Maintain the furthest viewed descendant so rewinding doesn't truncate the list prematurely
  const [currentBranchLeafId, setCurrentBranchLeafId] = useState<string>(activeVersionId);

  useEffect(() => {
    let curr = versions.find((v: any) => v.id === currentBranchLeafId);
    let isAncestor = false;
    while (curr) {
      if (curr.id === activeVersionId) {
        isAncestor = true;
        break;
      }
      curr = versions.find((v: any) => v.id === curr.parentId);
    }
    // If the active version is NOT an ancestor of our current leaf (e.g. we switched branch or generated a new one)
    // we set the new active version as the leaf
    if (!isAncestor) {
      setCurrentBranchLeafId(activeVersionId);
    }
  }, [activeVersionId, versions, currentBranchLeafId]);

  // Calculate the active branch containing the path from root to the currentBranchLeafId
  const activeLineage: any[] = [];
  let currLineage = versions.find((v: any) => v.id === currentBranchLeafId);
  while (currLineage) {
    activeLineage.unshift(currLineage);
    currLineage = versions.find((v: any) => v.id === currLineage.parentId);
  }

  return (
    <>
      {/* Version area — switches between list and tree */}
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 bg-[#121214] border border-[#27272A] rounded-xl overflow-auto p-4 flex flex-col [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <AnimatePresence mode="wait">
          {!isTreeExpanded ? (
            <motion.div 
              key="linear"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col gap-3 py-2 w-full px-4"
            >
              {activeLineage.map((v: any) => (
                <div key={v.id} className="w-full">
                  <VersionCard
                    version={v}
                    isActive={activeVersionId === v.id}
                    onClick={() => setActiveVersionId(v.id)}
                    onSelectSuggestion={(prompt: string) => onSendPrompt(prompt)}
                    treeLabel={treeLabels[v.id]}
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="tree"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full overflow-auto pb-8 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="side-tree min-w-max mx-auto px-8 pt-4">
                <style>{orgTreeCSS}</style>
                {treeData.length > 0 ? (
                  <ul>
                    {treeData.map((node) => (
                      <TreeNode key={node.id} node={node} />
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-[#71717A]">
                    <GitBranch size={32} className="mb-4 opacity-50" />
                    <p className="text-sm">No history yet.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {hasChatError && (
          <div className="mt-2">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <AlertCircle size={14} className="text-red-500 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-red-500">Generation Error</h4>
                  <p className="text-xs text-red-400/80 mt-1">Credits refunded.</p>
                </div>
              </div>
              <button onClick={() => setHasChatError(false)} className="mt-3 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs font-semibold rounded-md transition-colors">
                Retry
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chat input — expands to fill container width */}
      <div className="w-full shrink-0 transition-all duration-300">
        <ChatInputArea
          balance={balance}
          hasChatError={hasChatError}
          setHasChatError={setHasChatError}
          isWarningVisible={isWarningVisible}
          setIsWarningVisible={setIsWarningVisible}
          stagedFiles={stagedFiles}
          setStagedFiles={setStagedFiles}
          onSendPrompt={onSendPrompt}
        />
      </div>
    </>
  );
}
