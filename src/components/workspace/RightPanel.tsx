import { useState } from 'react';
import { GitBranch } from 'lucide-react';
import { CreateMode } from './CreateMode';

interface RightPanelProps {
  balance: number;
  hasChatError: boolean;
  setHasChatError: (err: boolean) => void;
  isWarningVisible: boolean;
  setIsWarningVisible: (val: boolean) => void;
  versions: any[];
  activeVersionId: string;
  setActiveVersionId: (id: string) => void;
  stagedFiles: any[];
  setStagedFiles: (files: any[]) => void;
  onSendPrompt: (prompt: string) => void;
  isTreeExpanded: boolean;
  setIsTreeExpanded: (val: boolean) => void;
}

export function RightPanel(props: RightPanelProps) {
  const [activeTab, setActiveTab] = useState<'create' | 'code'>('create');
  const { isTreeExpanded, setIsTreeExpanded } = props;

  // Panel width: 420 normal, 680 when tree expanded
  const panelWidth = isTreeExpanded ? 680 : 420;

  return (
    <div 
      className="h-full flex flex-col gap-4 shrink-0 transition-all duration-300 ease-in-out"
      style={{ width: panelWidth, minWidth: panelWidth }}
    >
      {/* Top Toggle + Tree Button */}
      <div className="flex items-center gap-2 shrink-0 z-20">
        <div className="flex bg-[#18181B] p-1 rounded-lg border border-[#27272A] shadow-sm">
          <button 
            onClick={() => setActiveTab('create')}
            className={`px-5 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'create' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]/50'}`}
          >
            Create
          </button>
          <button 
            onClick={() => { setActiveTab('code'); setIsTreeExpanded(false); }}
            className={`px-5 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'code' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]/50'}`}
          >
            Code
          </button>
        </div>

        {activeTab === 'create' && (
          <button
            onClick={() => setIsTreeExpanded(!isTreeExpanded)}
            className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border rounded-lg transition-all ${
              isTreeExpanded
                ? 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/30 hover:bg-[#3B82F6]/20'
                : 'text-[#A1A1AA] hover:text-white bg-[#18181B] hover:bg-[#27272A] border-[#27272A]'
            }`}
          >
            <GitBranch size={12} />
            {isTreeExpanded ? 'Collapse' : 'Tree'}
          </button>
        )}
      </div>

      {activeTab === 'create' ? (
         <CreateMode 
           {...props}
           isTreeExpanded={isTreeExpanded} 
           setIsTreeExpanded={setIsTreeExpanded}
         />
      ) : (
         <div className="flex-1 bg-[#121214] border border-[#27272A] rounded-xl flex items-center justify-center text-[#71717A] text-sm">
           <div className="flex items-center gap-2">
             <span className="font-mono bg-[#27272A] px-2 py-1 rounded">{"<"} Code Editor Placeholder {">"}</span>
           </div>
         </div>
      )}
    </div>
  );
}
