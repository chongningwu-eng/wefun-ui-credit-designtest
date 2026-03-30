import { useState, useRef } from 'react';
import { Sparkles, Bell, FolderOpen } from 'lucide-react';
import { AvatarDropdown, NavCreditBalance, InboxDropdown } from '../CreditSystemUI';

interface TopNavProps {
  isAgentMode: boolean;
  setIsAgentMode: (mode: boolean) => void;
  balance: number;
  onNavigateToTab: (tab: string) => void;
  onOpenFeedback: () => void;
  onOpenProjectAssets: () => void;
}

export function TopNav({
  isAgentMode,
  setIsAgentMode,
  balance,
  onNavigateToTab,
  onOpenFeedback,
  onOpenProjectAssets,
}: TopNavProps) {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isInboxDropdownOpen, setIsInboxDropdownOpen] = useState(false);
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [projectTitle, setProjectTitle] = useState("Remix of 大鱼吃小鱼");

  return (
    <nav className="h-14 px-4 border-b border-[#1F1F22] flex items-center justify-between fixed top-0 w-full bg-[#0E0E10] z-40">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-lg">
          W
        </div>
        <div className="flex items-center gap-1 group">
          {isEditingTitle ? (
            <input 
              autoFocus
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
              className="bg-[#18181B] border border-[#3B82F6] text-sm font-semibold text-white focus:outline-none w-48 px-2 py-0.5 rounded-md"
            />
          ) : (
            <span 
              onClick={() => setIsEditingTitle(true)}
              className="font-medium text-sm text-[#E4E4E7] flex items-center gap-1 cursor-pointer hover:bg-[#27272A] px-2 py-0.5 rounded-md transition-colors"
            >
              {projectTitle} <span className="text-[10px] ml-1 text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">✎</span>
            </span>
          )}
        </div>

        <div className="w-px h-4 bg-[#27272A] mx-1"></div>

        {/* Mode Toggle (Canvas / Agent) */}
        <div className="flex p-0.5 bg-[#18181B] border border-[#27272A] rounded-md">
          <button
            onClick={() => setIsAgentMode(false)}
            className={`px-2.5 py-0.5 flex items-center justify-center text-[11px] tracking-wide font-semibold rounded-md transition-colors ${!isAgentMode ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-[#A1A1AA]'}`}
          >
            Canvas
          </button>
          <button
            onClick={() => setIsAgentMode(true)}
            className={`px-2.5 py-0.5 flex items-center justify-center text-[11px] tracking-wide font-semibold rounded-md transition-colors ${isAgentMode ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-[#A1A1AA]'}`}
          >
            Agent <Sparkles size={10} className="ml-1 text-indigo-400" />
          </button>
        </div>
        <div className="w-px h-4 bg-[#27272A] mx-1"></div>

        <button className="px-4 py-1.5 bg-white text-black font-semibold text-sm rounded-md hover:bg-zinc-200 transition-colors h-8 flex items-center justify-center">
          Publish
        </button>
      </div>

      <div className="flex items-center gap-3 relative">
        <button
          onClick={onOpenProjectAssets}
          className="px-3 py-1.5 text-xs font-semibold bg-[#27272A]/50 text-[#D4D4D8] hover:text-white border border-[#3F3F46] hover:bg-[#3F3F46]/80 rounded-md transition-colors h-8 flex items-center justify-center gap-1.5 mr-1"
        >
          <FolderOpen size={14} className="text-[#3B82F6]" />
          Project Assets
        </button>

        <button
          onClick={onOpenFeedback}
          className="px-3 py-1.5 text-xs font-semibold bg-transparent text-[#A1A1AA] hover:text-white border border-[#27272A] hover:bg-[#27272A] rounded-md transition-colors h-8 flex items-center justify-center"
        >
          Feedback
        </button>

        <div className="relative flex items-center h-8">
          <button
            onClick={() => setIsInboxDropdownOpen((prev) => !prev)}
            className="p-1.5 text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-lg transition-colors relative flex items-center justify-center h-full"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 border border-[#0E0E10]"></span>
          </button>
          <InboxDropdown
            isOpen={isInboxDropdownOpen}
            onClose={() => setIsInboxDropdownOpen(false)}
            onNavigateToTab={onNavigateToTab}
          />
        </div>
        <NavCreditBalance
          balance={balance}
          onClick={() => onNavigateToTab('plans')}
        />

        {/* MyHub / Avatar Dropdown Trigger */}
        <button
          ref={avatarRef}
          onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
          className="w-8 h-8 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white text-sm font-bold shadow-sm hover:ring-2 ring-indigo-500/50 transition-all border border-indigo-400/20"
        >
          W
        </button>

        <AvatarDropdown
          isOpen={isAvatarDropdownOpen}
          onClose={() => setIsAvatarDropdownOpen(false)}
          onOpenSettings={onNavigateToTab}
          onNavigateToTab={onNavigateToTab}
        />
      </div>
    </nav>
  );
}
