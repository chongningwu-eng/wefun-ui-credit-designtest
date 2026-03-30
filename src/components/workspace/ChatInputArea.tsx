import { useState } from 'react';
import { Plus, Box, Mic, ArrowUp, ChevronDown, Check, X, AlertCircle, Image as ImageIcon, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function ChatInputArea({
  balance,
  hasChatError,
  setHasChatError,
  isWarningVisible,
  setIsWarningVisible,
  stagedFiles,
  setStagedFiles,
  onSendPrompt
}: any) {
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Claude Sonnet 3.5");
  const [prompt, setPrompt] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isAutoEditEnabled, setIsAutoEditEnabled] = useState(false);

  const handleUploadClick = () => {
    setIsUploading(true);
    const newFile = { 
      id: Math.random().toString(), 
      name: `image_${Math.floor(Math.random()*100)}.png`, 
      status: 'uploading',
      url: 'https://images.unsplash.com/photo-1620641788421-7a1c34a6cb5c?auto=format&fit=crop&w=200&q=80'
    };
    setStagedFiles([...stagedFiles, newFile]);
    
    setTimeout(() => {
      setStagedFiles((prev: any) => prev.map((f: any) => f.id === newFile.id ? { ...f, status: 'ready' } : f));
      setIsUploading(false);
    }, 1500); 
  };

  const handleRemoveStagedFile = (id: string) => {
    setStagedFiles(stagedFiles.filter((f: any) => f.id !== id));
  };

  return (
    <div className="relative mt-auto flex flex-col shrink-0">
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
                    <span className="text-[13px] font-bold text-white tracking-tight">Generation failed, credits refunded</span>
                  </div>
                  <button onClick={() => setHasChatError(false)} className="p-1 text-[#A1A1AA] hover:text-white rounded-md transition-colors"><X size={14} /></button>
                </>
             ) : (
                <>
                  <span className="text-[13px] font-bold text-white tracking-tight">0 credits remaining</span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[12px] font-bold rounded-lg transition-colors shadow-sm">
                      Add credits
                    </button>
                    <button onClick={() => setIsWarningVisible(false)} className="p-1 text-[#A1A1AA] hover:text-white rounded-md transition-colors"><X size={14} /></button>
                  </div>
                </>
             )}
           </motion.div>
        )}
      </AnimatePresence>

      <div className={`bg-[#18181b] border border-[#27272A] rounded-2xl p-3 flex flex-col gap-2 relative shadow-lg z-10 transition-all ${balance === 0 && isWarningVisible ? 'border-t-[#3F3F46]' : ''}`}>
        
        {/* Upload Staging Area - Horizontally scrollable row of assets */}
        <AnimatePresence>
        {stagedFiles.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="flex items-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin"
          >
            {stagedFiles.map((file: any) => (
              <div key={file.id} className="relative group shrink-0 w-16 h-16 rounded-md bg-[#27272A] border border-[#3F3F46] flex items-center justify-center overflow-hidden">
                {file.url && file.url !== 'staged' ? (
                  <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon size={16} className="text-[#A1A1AA]" />
                )}
                
                {file.status === 'uploading' && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
                     <Loader2 size={14} className="text-white animate-spin" />
                  </div>
                )}

                {file.status === 'ready' && (
                  <button 
                    onClick={() => handleRemoveStagedFile(file.id)}
                    className="absolute top-1 right-1 bg-[#27272A] border border-[#3F3F46] rounded-full p-0.5 opacity-0 group-hover:opacity-100 hover:bg-rose-500 hover:text-white transition-all shadow-xl z-20"
                  >
                    <X size={10} />
                  </button>
                )}
                <span className="absolute bottom-1 w-full text-center text-[7px] text-[#A1A1AA] truncate px-1">{file.name}</span>
              </div>
            ))}
          </motion.div>
        )}
        </AnimatePresence>

        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Make it more fun..."
            className="w-full bg-[#121214] border border-[#3F3F46] rounded-lg p-3 pr-10 text-sm text-[#E4E4E7] placeholder-[#71717A] resize-none h-16 focus:outline-none focus:border-[#52525B] transition-colors"
            disabled={balance === 0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (!(balance === 0 || isUploading || (!prompt.trim() && stagedFiles.length === 0))) {
                  onSendPrompt(prompt);
                  setPrompt("");
                }
              }
            }}
          />
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-2 relative">
            <button 
              onClick={handleUploadClick}
              title="Upload attachment"
              className="w-8 h-8 rounded-full bg-[#27272A] hover:bg-[#3F3F46] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
            >
              <Plus size={14} />
            </button>

            <button
               onClick={() => setIsModelSelectorOpen(!isModelSelectorOpen)}
               className="h-8 px-3 rounded-full bg-transparent hover:bg-[#27272A] flex items-center gap-1.5 text-[#A1A1AA] hover:text-white transition-colors"
             >
               <Box size={14} />
               <span className="text-[11px] font-medium">{selectedModel}</span>
               <ChevronDown size={12} className="text-[#71717A]" />
             </button>

             <AnimatePresence>
                {isModelSelectorOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute bottom-10 left-10 w-64 bg-[#18181B] border border-[#3F3F46] rounded-xl shadow-2xl overflow-hidden z-50 p-1 flex flex-col"
                  >
                    {['Claude Sonnet 3.5', 'Claude Opus 4.6', 'Gemini 3.1'].map(model => (
                      <button
                        key={model}
                        onClick={() => { setSelectedModel(model); setIsModelSelectorOpen(false); }}
                        className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-[#27272A] transition-colors"
                      >
                        <span className="text-sm font-medium text-[#E4E4E7]">{model}</span>
                        {selectedModel === model && <Check size={14} className="text-white" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
          </div>

          <div className="flex gap-2 justify-end items-center">
            {/* Auto Edit Toggle */}
            <div className="flex items-center gap-1.5 mr-1 px-2 py-1 rounded-md cursor-pointer group" onClick={() => setIsAutoEditEnabled(!isAutoEditEnabled)}>
               <span className="text-[10px] font-medium text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">Auto Edit</span>
               <div className={`w-6 h-3.5 rounded-full relative transition-colors ${isAutoEditEnabled ? 'bg-[#3B82F6]' : 'bg-[#27272A] border border-[#3F3F46]'}`}>
                  <div className={`absolute top-[1px] w-[10px] h-[10px] rounded-full transition-transform ${isAutoEditEnabled ? 'bg-white right-[1px]' : 'bg-[#71717A] left-[1px]'}`}></div>
               </div>
            </div>

            <button className="w-8 h-8 rounded-full bg-transparent hover:bg-[#3F3F46] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors">
              <Mic size={16} />
            </button>
            <button
              disabled={balance === 0 || isUploading || (!prompt.trim() && stagedFiles.length === 0)}
              onClick={() => {
                onSendPrompt(prompt);
                setPrompt("");
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-zinc-200 text-black shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
            >
              <ArrowUp strokeWidth={3} size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
