import { useState, useRef } from 'react';
import { AvatarDropdown, UnifiedSettingsModal, SystemToast, MiniUpgradeModal, NavCreditBalance, InboxDropdown } from './components/CreditSystemUI';
import { Monitor, Smartphone, RotateCcw, Plus, Box, Share, Sparkles, Bell, X, Mic, ArrowUp, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  // Global States
  const [balance, setBalance] = useState(18); // Control this to test "0" credit state

  // Modal & Popover States
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('account');
  const [isWarningVisible, setIsWarningVisible] = useState(true);
  const [isMiniUpgradeOpen, setIsMiniUpgradeOpen] = useState(false);
  const [isInboxDropdownOpen, setIsInboxDropdownOpen] = useState(false);

  // Generation Mode State (Canvas vs Agent)
  const [isAgentMode, setIsAgentMode] = useState(false);
  const costPerAction = isAgentMode ? 12 : 3;

  // Error/Refund Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasChatError, setHasChatError] = useState(false);
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Claude Sonnet 3.5 (Bedrock)");

  const avatarRef = useRef<HTMLButtonElement>(null);

  // Navigation Handlers
  const handleNavigateFromPopover = (tab: string) => {
    setSettingsTab(tab);
    setIsSettingsOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#E4E4E7] font-sans selection:bg-[#27272A] flex flex-col pt-14 relative overflow-hidden">
      <AnimatePresence>
        {toastMessage && <SystemToast message={toastMessage} type="success" onClose={() => setToastMessage(null)} />}
      </AnimatePresence>

      {/* 1. TOP NAV BAR */}
      <nav className="h-14 px-4 border-b border-[#1F1F22] flex items-center justify-between fixed top-0 w-full bg-[#0E0E10] z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-lg">
            W
          </div>
          <span className="font-medium text-sm text-[#E4E4E7] flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            Remix of 大鱼吃小鱼 <span className="text-[10px] ml-1 text-[#71717A]">▼</span>
          </span>

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

        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button
              onClick={() => setIsInboxDropdownOpen((prev) => !prev)}
              className="p-1.5 mr-1 text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-lg transition-colors relative"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-500 border border-[#0E0E10]"></span>
            </button>
            <InboxDropdown
              isOpen={isInboxDropdownOpen}
              onClose={() => setIsInboxDropdownOpen(false)}
              onNavigateToTab={(tab: string) => handleNavigateFromPopover(tab)}
            />
          </div>
          <NavCreditBalance
            balance={balance}
            onClick={() => handleNavigateFromPopover('plans')}
          />

          {/* MyHub / Avatar Dropdown Trigger */}
          <button
            ref={avatarRef}
            onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
            className="w-8 h-8 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white text-sm font-bold shadow-sm hover:ring-2 ring-indigo-500/50 transition-all border border-indigo-400/20"
          >
            W
          </button>

          {/* INJECTED V3 POPUP: Avatar Dropdown (Mini Dashboard) */}
          <AvatarDropdown
            isOpen={isAvatarDropdownOpen}
            onClose={() => setIsAvatarDropdownOpen(false)}
            onOpenSettings={(tab: string) => handleNavigateFromPopover(tab)}
            onNavigateToTab={(tab: string) => handleNavigateFromPopover(tab)}
          />
        </div>
      </nav>

      {/* MAIN WORKSPACE */}
      <main className="flex-1 flex p-4 gap-4 overflow-hidden h-[calc(100vh-56px)]">

        {/* LEFT PANEL - PREVIEW */}
        <div className="flex-1 bg-[#18181B] rounded-xl border border-[#27272A] flex flex-col overflow-hidden relative shadow-2xl">
          <div className="h-12 border-b border-[#27272A] flex items-center justify-between px-3 bg-[#121214]">
            <div className="flex items-center gap-2 bg-[#27272A] px-2.5 py-1.5 rounded-md text-xs font-semibold text-[#A1A1AA]">
              <Monitor size={14} /> Preview
            </div>
            <div className="flex gap-3 text-[#71717A] pr-2">
              <Monitor size={16} className="cursor-pointer hover:text-[#E4E4E7]" />
              <Smartphone size={16} className="cursor-pointer hover:text-[#E4E4E7]" />
              <RotateCcw size={16} className="cursor-pointer hover:text-[#E4E4E7]" />
            </div>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#4F75FF] via-[#7F61FF] to-[#A259FF] flexitems-center justify-center p-8 relative flex items-center">

            {/* CANVAS COST INDICATOR */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg z-20">
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs font-medium text-white/90">Image Gen: 3 Credits / execution</span>
            </div>

            <div className="w-80 h-[28rem] bg-[#FAFAFA] rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 m-auto relative z-10">
              <h1 className="text-3xl font-bold text-[#3B82F6] mb-12">大鱼吃小鱼</h1>
              <button className="w-full py-4 bg-[#7C3AED] text-white rounded-full font-medium mb-4 shadow-md transition-transform active:scale-95">开始游戏</button>
              <button className="w-full py-4 bg-[#FB7185] text-white rounded-full font-medium mb-8 shadow-md transition-transform active:scale-95">◎ 游戏设置</button>
              <div className="flex flex-col items-center gap-3 text-sm text-[#52525B]">
                <span className="flex items-center gap-2">🐟 吃掉比你小的鱼</span>
                <span className="flex items-center gap-2">💣 避开炸弹</span>
              </div>
            </div>

            {/* Simulation Buttons moved to Game View */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={() => { setBalance(0); setIsWarningVisible(true); }}
                className="px-3 py-1.5 text-[11px] font-bold bg-[#18181B]/80 backdrop-blur border border-[#27272A] text-amber-500 rounded-lg hover:bg-[#27272A]/80 shadow-sm transition-colors"
              >
                Test 0 Credit
              </button>
              <button
                onClick={() => {
                  setHasChatError(true);
                }}
                className="px-3 py-1.5 text-[11px] font-bold bg-[#18181B]/80 backdrop-blur border border-[#27272A] text-rose-500 rounded-lg hover:bg-[#27272A]/80 shadow-sm transition-colors"
              >
                Test Error
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - EDITOR/CHAT */}
        <div className="w-[380px] flex flex-col gap-4 relative">
          <div className="flex bg-[#18181B] p-1 rounded-lg border border-[#27272A]">
            <button className="flex-1 py-1.5 bg-[#27272A] text-white text-xs font-medium rounded-md shadow-sm">Create</button>
            <button className="flex-1 py-1.5 text-[#A1A1AA] hover:text-white text-xs font-medium rounded-md">Code</button>
          </div>

          {/* Chat History Area */}
          <div className="flex-1 bg-[#121214] border border-[#27272A] rounded-xl overflow-y-auto p-4 flex flex-col gap-4 relative">
            <div className="absolute right-4 top-4 text-[#71717A] text-xs flex items-center gap-1 cursor-pointer hover:text-white"><Share size={12} /> Tree</div>

            <div className="bg-[#18181b] border border-[#27272A] rounded-lg p-3 mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-[#A1A1AA]">v1</span>
              </div>
              <p className="text-xs text-[#D4D4D8]">remix from 大鱼吃小鱼</p>
            </div>

            {/* Error Retry Block */}
            {hasChatError && (
              <div className="flex flex-col gap-2 mt-2 ml-4 relative z-0">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={14} className="text-red-500 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-red-500">Generation Error</h4>
                      <p className="text-xs text-red-400/80 mt-1">There was an issue processing your request. Your {costPerAction} credits have been refunded.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setHasChatError(false); }}
                    className="mt-3 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs font-semibold rounded-md transition-colors shadow-sm"
                  >
                    Retry prompt
                  </button>
                </div>
              </div>
            )}
          </div> {/* CLOSING TAG FOR HISTORY AREA */}

          {/* CHAT INPUT AREA (Restored to original detached positioning with Claude selector) */}
          <div className="relative mt-auto flex flex-col">

            {/* FLOATING WARNING (0 Credits OR Error) */}
            <AnimatePresence>
              {((balance === 0 && isWarningVisible) || hasChatError) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`bg-[#1A1A1A] border ${hasChatError ? 'border-rose-500/30' : 'border-[#3F3F46]'} border-b-0 rounded-t-2xl px-4 py-3 flex justify-between items-center -mb-4 pb-6 z-0`}
                >
                  {hasChatError ? (
                    <>
                      <div className="flex items-center gap-2">
                        <AlertCircle size={14} className="text-rose-500" />
                        <span className="text-[13px] font-bold text-white tracking-tight">Generation failed, {costPerAction} credits refunded</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setHasChatError(false)} className="p-1 text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-md transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-[13px] font-bold text-white tracking-tight">0 credits remaining</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setIsMiniUpgradeOpen(true)} className="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-bold rounded-lg transition-colors shadow-sm">
                          Add credits
                        </button>
                        <button onClick={() => setIsWarningVisible(false)} className="p-1 text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-md transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className={`bg-[#18181b] border border-[#27272A] rounded-2xl p-3 flex flex-col gap-2 relative shadow-lg z-10 transition-all ${balance === 0 && isWarningVisible ? 'border-t-[#3F3F46]' : ''}`}>
              <div className="relative">
                <textarea
                  placeholder="Make it more fun..."
                  className="w-full bg-[#121214] border border-[#3F3F46] rounded-lg p-3 pr-10 text-sm text-[#E4E4E7] placeholder-[#71717A] resize-none h-24 focus:outline-none focus:border-[#52525B] transition-colors"
                  defaultValue=""
                  disabled={balance === 0}
                />
              </div>

              <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#27272A]">
                <div className="flex gap-2 relative">
                  <button className="w-8 h-8 rounded-full bg-[#27272A] hover:bg-[#3F3F46] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors">
                    <Plus size={14} />
                  </button>

                  {/* Model Selector Button */}
                  <button
                    onClick={() => setIsModelSelectorOpen(!isModelSelectorOpen)}
                    className="h-8 px-3 rounded-full bg-transparent hover:bg-[#27272A] flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <Box size={14} />
                    <span className="text-[12px] font-medium">{selectedModel}</span>
                    <ChevronDown size={12} className="text-[#71717A]" />
                  </button>

                  {/* Model Selector Popover */}
                  <AnimatePresence>
                    {isModelSelectorOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute bottom-10 left-10 w-64 bg-[#18181B] border border-[#3F3F46] rounded-xl shadow-2xl overflow-hidden z-50 p-1 flex flex-col"
                      >
                        <button
                          onClick={() => { setSelectedModel("Claude Sonnet 3.5 (Bedrock)"); setIsModelSelectorOpen(false); }}
                          className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-[#27272A] transition-colors"
                        >
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-[#E4E4E7]">Claude Sonnet 3.5</span>
                            <span className="text-[10px] text-[#A1A1AA]">Bedrock</span>
                          </div>
                          {selectedModel.includes("Sonnet 3.5") && <Check size={14} className="text-white" />}
                        </button>

                        <button
                          onClick={() => { setSelectedModel("Claude Opus 4.6 (Pro)"); setIsModelSelectorOpen(false); }}
                          className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-[#27272A] transition-colors mt-1"
                        >
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-[#E4E4E7]">Claude Opus 4.6</span>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white leading-none">PRO</span>
                            </div>
                            <span className="text-[10px] text-[#A1A1AA]">Highest reasoning power</span>
                          </div>
                          {selectedModel.includes("Opus 4.6") && <Check size={14} className="text-white" />}
                        </button>

                        <button
                          onClick={() => { setSelectedModel("Gemini 3.1"); setIsModelSelectorOpen(false); }}
                          className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-[#27272A] transition-colors mt-1 border-t border-[#27272A] pt-3"
                        >
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-[#E4E4E7]">Gemini 3.1</span>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-zinc-700 text-zinc-300 leading-none">FREE</span>
                            </div>
                            <span className="text-[10px] text-[#A1A1AA]">Google's latest efficient model</span>
                          </div>
                          {selectedModel.includes("Gemini 3.1") && <Check size={14} className="text-white" />}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-2 flex-grow justify-end items-center">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#A1A1AA] hover:text-white bg-transparent hover:bg-[#3F3F46] transition-colors">
                    <Mic size={16} />
                  </button>

                  <button
                    disabled={balance === 0}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-zinc-200 text-black shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
                  >
                    <ArrowUp strokeWidth={3} size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* GLOBAL MODALS */}
      <MiniUpgradeModal
        isOpen={isMiniUpgradeOpen}
        onClose={() => setIsMiniUpgradeOpen(false)}
        onNavigateToPlans={() => handleNavigateFromPopover('plans')}
      />

      {/* UNIFIED SETTINGS MENU (V3 - Comprehensive Overview) */}
      <UnifiedSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        initialTab={settingsTab}
      />

    </div>
  );
}

export default App;
