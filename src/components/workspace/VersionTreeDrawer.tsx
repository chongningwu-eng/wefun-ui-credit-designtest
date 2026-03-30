import { motion, AnimatePresence } from 'framer-motion';
import { X, GitBranch, Check } from 'lucide-react';

interface Version {
  id: string;
  name: string;
  prompt: string;
  time: number;
  parentId: string | null;
}

interface VersionTreeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  versions: Version[];
  activeVersionId: string;
  onSelectVersion: (id: string) => void;
}

export function VersionTreeDrawer({ isOpen, onClose, versions, activeVersionId, onSelectVersion }: VersionTreeDrawerProps) {
  // Build traditional tree structure
  const buildTree = (parentId: string | null): any[] => {
    return versions
      .filter(v => v.parentId === parentId)
      .map(v => ({
        ...v,
        children: buildTree(v.id)
      }));
  };

  const treeData = buildTree(null);

  // CSS for standard top-down org chart pseudo elements
  const orgTreeStyles = `
    .org-tree ul {
      padding-top: 32px; 
      position: relative;
      display: flex;
      justify-content: center;
      padding-left: 0;
    }
    .org-tree li {
      float: left; text-align: center;
      list-style-type: none;
      position: relative;
      padding: 32px 16px 0 16px;
    }
    .org-tree li::before, .org-tree li::after {
      content: ''; position: absolute; top: 0; right: 50%;
      border-top: 2px solid #3F3F46;
      width: 50%; height: 32px;
    }
    .org-tree li::after {
      right: auto; left: 50%; border-left: 2px solid #3F3F46;
    }
    .org-tree li:only-child::after, .org-tree li:only-child::before {
      display: none;
    }
    .org-tree li:only-child { padding-top: 0;}
    .org-tree li:first-child::before, .org-tree li:last-child::after {
      border: 0 none;
    }
    .org-tree li:last-child::before {
      border-right: 2px solid #3F3F46; border-radius: 0 8px 0 0;
    }
    .org-tree li:first-child::after {
      border-radius: 8px 0 0 0;
    }
    .org-tree ul::before {
      content: ''; position: absolute; top: 0; left: 50%;
      border-left: 2px solid #3F3F46;
      width: 0; height: 32px;
      transform: translateX(-50%);
    }
  `;

  // Recursive component to render li > node > ul > li
  const TreeNode = ({ node }: { node: any }) => {
    const isActive = node.id === activeVersionId;
    
    return (
      <li>
        <div 
          onClick={() => {
            onSelectVersion(node.id);
            onClose();
          }}
          className={`relative mx-auto w-[260px] cursor-pointer text-left transition-all duration-200 ${isActive ? 'z-10' : 'hover:z-10'}`}
        >
          <div className={`
              bg-[#18181B] rounded-xl p-4 shadow-lg border relative
              ${isActive ? 'border-[#3B82F6] ring-1 ring-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-[#27272A] hover:border-[#52525B] hover:bg-[#202022]'}
            `}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm ${isActive ? 'bg-[#3B82F6]/20 text-[#3B82F6]' : 'bg-[#27272A] text-[#A1A1AA]'}`}>
                  {node.id}
                </span>
                {node.name.includes('Manual') && (
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Manual</span>
                )}
              </div>
              <span className="text-xs text-[#71717A] tracking-tighter">{node.time}:00</span>
            </div>
            
            <h4 className="text-[14px] text-white font-semibold mb-1.5 pr-4 truncate">{node.name}</h4>
            <p className="text-[12px] text-[#A1A1AA] line-clamp-2 leading-relaxed">{node.prompt}</p>

            {isActive && (
              <div className="absolute top-4 right-4 text-[#3B82F6]">
                <Check size={16} strokeWidth={3} />
              </div>
            )}
            {isActive && (
              <div className="mt-3 text-[11px] font-medium text-[#3B82F6] flex items-center gap-1.5 opacity-90">
                (Current)
              </div>
            )}
          </div>
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Expanded Drawer Layout */}
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[1000px] max-w-[90vw] bg-[#09090B] border-l border-[#27272A] shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <style>{orgTreeStyles}</style>
            
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#27272A] shrink-0 bg-[#09090B]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                  <GitBranch size={16} />
                </div>
                <h2 className="text-base font-bold text-white tracking-wide">Iteration Stream</h2>
              </div>
              
              <button 
                onClick={onClose}
                className="p-2 text-[#71717A] hover:text-white hover:bg-[#27272A] rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tree Workspace */}
            <div className="flex-1 overflow-auto bg-[#09090B] p-12 org-tree flex justify-center items-start custom-scrollbar">
              {treeData.length > 0 ? (
                <ul>
                  {treeData.map((node) => (
                    <TreeNode key={node.id} node={node} />
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-[#71717A]">
                  <GitBranch size={32} className="mb-4 opacity-50" />
                  <p>No version history available.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
