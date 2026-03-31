import { useState } from 'react';
import { PackageOpen, Clock, Zap, Cpu, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';

import { Version, Asset } from '../../App';

export function VersionCard({ version, isActive, onClick, onSelectSuggestion, treeLabel }: { version: Version, isActive: boolean, onClick?: () => void, onSelectSuggestion?: (s: string) => void, treeLabel?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tab, setTab] = useState<'chat'|'asset'>('chat');

  const label = treeLabel || version.id;

  return (
    <div 
      onClick={!isActive ? onClick : undefined}
      className={`bg-[#18181b] border rounded-lg p-3 transition-all flex flex-col 
        ${isActive 
          ? 'border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
          : 'border-[#27272A] hover:border-[#3F3F46] opacity-60 hover:opacity-100 cursor-pointer'}`}
    >
      {/* Header - always visible */}
      <div className="flex items-center gap-2">
        {/* Expand/Collapse toggle */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          className="text-[#71717A] hover:text-white p-0.5 rounded transition-colors shrink-0"
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>

        <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded shrink-0
          ${isActive ? 'text-[#3B82F6] bg-[#3B82F6]/10' : 'text-[#A1A1AA] bg-[#27272A]'}`}
        >
          {label}
        </span>
        <span className={`text-xs font-semibold truncate flex-1 ${isActive ? 'text-white' : 'text-[#D4D4D8]'}`}>
          {version.name}
        </span>
      </div>

      {/* Prompt preview - always visible but truncated when collapsed */}
      {!isExpanded && (
        <p className="text-[11px] text-[#71717A] truncate mt-1.5 ml-6">{version.prompt}</p>
      )}

      {/* Expanded content */}
      {isExpanded && (
        <div className="mt-3 ml-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
          {/* Tab switcher */}
          {isActive && (
            <div className="flex gap-2 self-start bg-[#121214] p-0.5 rounded-lg border border-[#27272A]">
              <button 
                onClick={(e) => { e.stopPropagation(); setTab('chat'); }} 
                className={`text-[10px] px-2 py-1 rounded-md transition-all ${tab === 'chat' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-white'}`}
              >
                Chat
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setTab('asset'); }} 
                className={`text-[10px] px-2 py-1 rounded-md transition-all ${tab === 'asset' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-white'}`}
              >
                Asset
              </button>
            </div>
          )}

          {(tab === 'chat' || !isActive) && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-[#D4D4D8] leading-relaxed">{version.prompt}</p>
              
              {isActive && (
                <ul className="text-[11px] text-[#A1A1AA] space-y-1.5 bg-[#121214] p-2.5 rounded-md border border-[#27272A]">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Initialized generation environment</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Compiled React components</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Finalizing layout...</li>
                </ul>
              )}
            </div>
          )}

          {tab === 'asset' && isActive && (
            <div className="animate-in fade-in slide-in-from-top-1 duration-200">
              {version.assets && version.assets.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {version.assets.map((asset: Asset) => (
                    <div key={asset.id} className="aspect-square bg-[#27272A] rounded-md border border-[#3F3F46] flex flex-col items-center justify-center p-2 group relative overflow-hidden">
                       <div className="w-full h-full bg-[#27272A] rounded flex items-center justify-center mb-1 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                         {asset.url && asset.url !== 'staged' ? (
                           <img src={asset.url} alt={asset.name} className="absolute inset-0 w-full h-full object-cover" />
                         ) : (
                           <PackageOpen size={20} className="text-[#71717A] opacity-50" />
                         )}
                       </div>
                       <div className="flex items-center justify-between w-full px-1 gap-2 mt-1">
                         <span className="text-[10px] text-[#E4E4E7] truncate font-medium flex-1">{asset.name}</span>
                         {asset.size && <span className="text-[9px] text-[#71717A] shrink-0">{asset.size}</span>}
                       </div>
                       <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 transition-opacity backdrop-blur-sm">
                         <button className="text-[11px] font-medium bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1.5 rounded-md w-3/4 shadow-sm transition-colors">Use in layout</button>
                         <button className="text-[11px] font-medium bg-[#3F3F46] hover:bg-[#52525B] text-white px-3 py-1.5 rounded-md w-3/4 border border-[#52525B] shadow-sm transition-colors">Details</button>
                       </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 flex flex-col items-center justify-center text-[#71717A] bg-[#121214] rounded-md border border-dashed border-[#27272A]">
                   <PackageOpen size={24} className="mb-2 opacity-40" />
                   <span className="text-[11px]">No assets in this version</span>
                </div>
              )}
            </div>
          )}

          {/* Meta Bar */}
          <div className="flex items-center gap-3 pt-3 border-t border-[#27272A] text-[10px] text-[#71717A]">
            <div className="flex items-center gap-1"><Cpu size={12} className="text-[#A1A1AA]"/> {version.model || 'Claude 3.5 Sonnet'}</div>
            <div className="flex items-center gap-1"><Clock size={12} className="text-[#A1A1AA]"/> {version.time || 12}s</div>
            <div className="flex items-center gap-1"><Zap size={12} className="text-[#A1A1AA]"/> -{version.cost || 0} Credits</div>
          </div>

          {/* AI Suggestions Pills */}
          {isActive && version.suggestions && version.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {version.suggestions.map((suggestion: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => onSelectSuggestion && onSelectSuggestion(suggestion)}
                  className="flex items-center gap-1.5 text-[11px] font-medium bg-[#3B82F6]/10 text-[#3B82F6] hover:bg-[#3B82F6]/20 border border-[#3B82F6]/20 hover:border-[#3B82F6]/40 px-2.5 py-1.5 rounded-full transition-all text-left"
                >
                  <Sparkles size={12} className="shrink-0" />
                  <span className="truncate">{suggestion}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
