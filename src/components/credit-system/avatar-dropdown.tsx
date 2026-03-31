import { motion, AnimatePresence } from "framer-motion";
import { Settings, Zap, ChevronRight } from "lucide-react";

interface AvatarDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tabId: string) => void;
  onOpenSettings?: (tabId: string) => void;
}

export const AvatarDropdown = ({ isOpen, onClose, onNavigateToTab }: AvatarDropdownProps) => {
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
            className="absolute top-14 right-4 w-80 bg-card border border-border rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans"
          >
            {/* User Profile Area (Top Block) */}
            <div className="p-4 flex items-center gap-3 bg-secondary/50">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-inner">
                W
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-foreground tracking-tight">WeFun User</span>
                <span className="text-xs font-medium text-muted-foreground">user@wefun.ai</span>
              </div>
            </div>

            {/* Quick Actions (Settings & Invite) */}
            <div className="px-4 py-3 flex gap-2 border-b border-border bg-secondary/50">
              <button
                onClick={() => { onClose(); onNavigateToTab('profile'); }}
                className="w-full flex items-center justify-center gap-2 py-2 bg-secondary hover:bg-accent text-foreground text-xs font-semibold rounded-lg transition-colors"
              >
                <Settings size={14} /> Settings
              </button>
            </div>

            <div className="p-4 space-y-3 bg-background">
              {/* Pro Upsell Card */}
              <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-between group">
                <div className="flex items-center gap-2 text-foreground font-bold tracking-tight">
                  <Zap size={16} fill="currentColor" className="text-amber-500" /> Turn Pro
                </div>
                <button
                  onClick={() => { onClose(); onNavigateToTab('plans'); }}
                  className="px-4 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold rounded-lg transition-colors shadow-sm"
                >
                  Upgrade
                </button>
              </div>

              {/* Credit Summary Card */}
              <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center cursor-pointer group" onClick={() => { onClose(); onNavigateToTab('plans'); }}>
                  <span className="text-sm font-bold text-foreground">Credits</span>
                  <span className="text-sm font-medium text-amber-500 flex items-center gap-1 group-hover:text-amber-400">
                    5 left <ChevronRight size={14} />
                  </span>
                </div>

                {/* Slim Progress Bar */}
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} className="h-full bg-primary rounded-full" />
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
                  <span className="text-xs text-muted-foreground">Daily credits reset at midnight UTC</span>
                </div>
              </div>
            </div>

            {/* Extra Links */}
            <div className="p-2 border-t border-border bg-background flex flex-col">
              <button onClick={() => { onClose(); onNavigateToTab('profile'); }} className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">Profile</button>
              <button onClick={() => { onClose(); onNavigateToTab('preferences'); }} className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors">Preferences</button>
              <button className="text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors mt-1">Log out</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
