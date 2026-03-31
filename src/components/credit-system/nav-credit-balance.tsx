import { Zap } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavCreditBalanceProps {
  balance: number | string;
  onClick?: () => void;
  className?: string;
}

export const NavCreditBalance = ({ balance, onClick, className }: NavCreditBalanceProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg shadow-sm mr-2 group cursor-pointer hover:bg-secondary transition-colors relative",
        className
      )}
    >
      <Zap size={14} className="text-amber-500" fill="currentColor" />
      <span className="text-sm font-bold text-foreground">{balance}</span>
      <span className="text-xs font-medium text-muted-foreground ml-0.5">Credits</span>
    </div>
  );
};
