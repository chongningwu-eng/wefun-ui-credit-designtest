import { motion, AnimatePresence } from "framer-motion";

interface InboxDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const InboxDropdown = ({ isOpen, onClose, onNavigateToTab }: InboxDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-14 right-20 w-80 bg-card border border-border rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans"
          >
            <div className="px-4 py-3 border-b border-border bg-secondary/50 flex justify-between items-center">
              <span className="text-sm font-bold text-foreground tracking-tight">Notifications</span>
              <span className="text-[10px] font-bold text-primary-foreground bg-primary px-1.5 py-0.5 rounded-full">2 New</span>
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              <button onClick={() => { onClose(); onNavigateToTab('whatsnew'); }} className="w-full text-left flex flex-col gap-1 p-3 border-b border-border hover:bg-secondary transition-colors relative">
                <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-foreground pl-4">Canvas mode is here!</span>
                <span className="text-xs text-muted-foreground pl-4 line-clamp-1">Try the new canvas mode for spatial editing...</span>
                <span className="text-[10px] text-muted-foreground/60 pl-4 mt-1">2 hours ago</span>
              </button>
              <button onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full text-left flex flex-col gap-1 p-3 border-b border-border hover:bg-secondary transition-colors relative">
                <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-foreground pl-4">Your generation completed</span>
                <span className="text-xs text-muted-foreground pl-4 line-clamp-1">"A red bus driving in the city" is ready.</span>
                <span className="text-[10px] text-muted-foreground/60 pl-4 mt-1">5 hours ago</span>
              </button>
            </div>

            <button onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full px-4 py-3 text-xs font-semibold text-foreground bg-secondary/50 hover:bg-secondary transition-colors text-center border-t border-border">
              View all notifications
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
