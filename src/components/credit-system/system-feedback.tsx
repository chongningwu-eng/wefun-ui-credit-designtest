import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../../lib/utils";

interface InlineChatWarningProps {
  onUpgrade: () => void;
  onClose: () => void;
  text?: string;
  buttonText?: string;
}

export const InlineChatWarning = ({ onUpgrade, onClose, text, buttonText }: InlineChatWarningProps) => {
  return (
    <div className="px-4 py-3 flex items-center justify-between bg-secondary border-b border-border shadow-sm">
      <span className="text-sm text-foreground font-medium tracking-tight">
        {text || "0 free credits remaining"}
      </span>
      <div className="flex items-center gap-2">
        <button 
          onClick={onUpgrade} 
          className="px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-[13px] font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center"
        >
          {buttonText || "Add credits"}
        </button>
        <button onClick={onClose} className="p-1 text-muted-foreground hover:bg-background hover:text-foreground rounded-md transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

interface MiniUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPlans: () => void;
}

export const MiniUpgradeModal = ({ isOpen, onClose, onNavigateToPlans }: MiniUpgradeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-6 text-center flex flex-col items-center"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground rounded-md transition-colors">
              <X size={16} />
            </button>

            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4 border border-primary/30">
              <Zap size={24} fill="currentColor" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">Out of Credits</h3>
            <p className="text-sm text-muted-foreground mb-6">You've reached your daily limit for generations. Upgrade to a Pro plan for more credits and faster speeds.</p>

            <div className="flex w-full gap-3">
              <button onClick={onClose} className="flex-1 py-2 bg-secondary hover:bg-accent text-foreground text-sm font-semibold rounded-lg transition-colors shadow-sm">
                Dismiss
              </button>
              <button onClick={() => { onClose(); onNavigateToPlans(); }} className="flex-1 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-lg transition-colors shadow-sm">
                View Plans
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface SystemToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export const SystemToast = ({ message, type = "success", onClose }: SystemToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl z-[200] border bg-card",
        type === "success" ? "border-emerald-500/30" : "border-destructive/30"
      )}
    >
      {type === "success" ? <CheckCircle2 className="text-emerald-500" size={18} /> : <AlertCircle className="text-destructive" size={18} />}
      <span className="text-sm font-medium text-foreground">{message}</span>
      <button onClick={onClose} className="ml-4 text-muted-foreground hover:text-foreground"><X size={14} /></button>
    </motion.div>
  );
};
