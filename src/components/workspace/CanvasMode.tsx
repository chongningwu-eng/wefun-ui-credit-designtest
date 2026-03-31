import { useState } from 'react';
import { Image as ImageIcon, MessageSquare, PackagePlus, Crop, Scissors, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CanvasModeProps {
  onPushToChat: (file: string) => void;
  onSaveToAsset: (file: string) => void;
}

export function CanvasMode({ onPushToChat, onSaveToAsset }: CanvasModeProps) {
  const [isSelected, setIsSelected] = useState(false);

  // Close selection when clicking outside
  const handleCanvasClick = () => {
    setIsSelected(false);
  };

  return (
    <div 
      className="flex-1 h-full bg-[#121214] rounded-xl border border-[#27272A] flex flex-col overflow-hidden relative shadow-2xl cursor-default"
      onClick={handleCanvasClick}
    >
       {/* Background Grid for Canvas */}
       <div 
         className="absolute inset-0 opacity-20 pointer-events-none" 
         style={{ backgroundImage: 'radial-gradient(circle, #3F3F46 1px, transparent 1px)', backgroundSize: '24px 24px' }}
       />
       
       <div className="flex-1 flex items-center justify-center p-8 relative">
          
          {/* Mock Canvas Image Element */}
          <div 
            className={`relative cursor-pointer transition-all duration-300 w-[640px] h-[360px] ${isSelected ? 'ring-2 ring-[#3B82F6]' : 'hover:ring-1 hover:ring-[#3F3F46]'}`}
            onClick={(e) => { e.stopPropagation(); setIsSelected(true); }}
          >
             <div className="w-full h-full bg-[#18181B] border-2 border-dashed border-[#3F3F46] flex flex-col items-center justify-center text-[#71717A] overflow-hidden relative z-10 shadow-2xl transition-colors hover:border-[#52525B]">
               <ImageIcon size={64} className="mb-6 opacity-30 text-white" />
               <p className="text-base font-semibold text-[#A1A1AA]">Ocean_Coral_Asset.png</p>
               <p className="text-xs mt-2 text-[#71717A] font-mono">1280 × 720 px • RAW</p>
             </div>

             {/* Selection Handlers (Visual only, outside overflow-hidden) */}
             {isSelected && (
               <>
                 <div className="absolute top-0 left-0 w-2 h-2 bg-white border border-[#3B82F6] -translate-x-1/2 -translate-y-1/2 z-30" />
                 <div className="absolute top-0 right-0 w-2 h-2 bg-white border border-[#3B82F6] translate-x-1/2 -translate-y-1/2 z-30" />
                 <div className="absolute bottom-0 left-0 w-2 h-2 bg-white border border-[#3B82F6] -translate-x-1/2 translate-y-1/2 z-30" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 bg-white border border-[#3B82F6] translate-x-1/2 translate-y-1/2 z-30" />
               </>
             )}

             {/* Floating Toolbar (Left side) */}
             <AnimatePresence>
               {isSelected && (
                 <motion.div 
                   initial={{ opacity: 0, x: 10, scale: 0.95 }}
                   animate={{ opacity: 1, x: 0, scale: 1 }}
                   exit={{ opacity: 0, x: 5, scale: 0.95 }}
                   transition={{ duration: 0.15 }}
                   className="absolute top-4 -left-4 -translate-x-full bg-[#18181B]/90 backdrop-blur-md border border-[#3F3F46] rounded-xl shadow-2xl p-1.5 flex flex-col gap-1.5 z-20"
                 >
                    <ActionButton icon={<Crop size={16} />} title="Crop Image" />
                    <ActionButton icon={<Scissors size={16} />} title="Remove BG" highlight />
                    <ActionButton icon={<Sparkles size={16} />} title="Image Remix" />
                    
                    <div className="w-full h-px bg-[#3F3F46] my-0.5" />
                    
                    <ActionButton 
                      onClick={(e: React.MouseEvent) => { e.stopPropagation(); onPushToChat('ocean_coral_remix.png'); setIsSelected(false); }}
                      icon={<MessageSquare size={16} />} 
                      title="Push to Chat" 
                      colorClass="hover:text-[#3B82F6]"
                    />
                    <ActionButton 
                      onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSaveToAsset('ocean_coral_remix.png'); setIsSelected(false); }}
                      icon={<PackagePlus size={16} />} 
                      title="Save to Asset" 
                      colorClass="hover:text-emerald-400"
                    />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

       </div>
    </div>
  );
}

function ActionButton({ icon, title, onClick, highlight = false, colorClass = "hover:text-white" }: { icon: React.ReactNode, title: string, onClick?: (e: React.MouseEvent) => void, highlight?: boolean, colorClass?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`relative group flex items-center justify-center w-9 h-9 rounded-lg transition-colors
        ${highlight ? 'bg-[#3B82F6]/10 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white border border-[#3B82F6]/20' : `bg-transparent text-[#A1A1AA] hover:bg-[#27272A] ${colorClass}`}`}
    >
      {icon}
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-2 py-1 bg-[#27272A] border border-[#3F3F46] text-white text-[10px] font-medium rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg">
        {title}
      </span>
    </button>
  );
}
