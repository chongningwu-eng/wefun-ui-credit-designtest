import { useState, useEffect } from "react";
import {
  User,
  Zap,
  Gift,
  ArrowDownLeft,
  Briefcase,
  History,
  Bell,
  Sparkles,
  Settings
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const SettingsModal = ({ isOpen, onClose, initialTab = 'credits' }: SettingsModalProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-screen h-screen p-0 bg-background border-none rounded-none overflow-hidden flex flex-row">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border py-8 px-4 flex flex-col h-full overflow-y-auto">
          <div className="space-y-6">
            {/* Section 1: Billing & Credits */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider">Billing & Credits</div>
              <div className="flex flex-col gap-1">
                <TabButton id="credits" icon={History} label="Credits & history" active={activeTab} onClick={setActiveTab} />
                <TabButton id="plans" icon={Briefcase} label="Plans & top-up" active={activeTab} onClick={setActiveTab} />
                <TabButton id="earn" icon={Gift} label="Earn Free Credits" active={activeTab} onClick={setActiveTab} />
              </div>
            </div>

            {/* Section 2: Account */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider">Account</div>
              <div className="flex flex-col gap-1">
                <TabButton id="profile" icon={User} label="Profile" active={activeTab} onClick={setActiveTab} />
                <TabButton id="preferences" icon={Settings} label="Preferences" active={activeTab} onClick={setActiveTab} />
              </div>
            </div>

            {/* Section 3: Notifications */}
            <div>
              <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider mt-2">Notifications</div>
              <div className="flex flex-col gap-1">
                <TabButton id="inbox" icon={Bell} label="Inbox" active={activeTab} onClick={setActiveTab} badge={1} />
                <TabButton id="whatsnew" icon={Sparkles} label="What's New" active={activeTab} onClick={setActiveTab} badge={1} />
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-background overflow-y-auto relative py-10 px-12">
          <button 
            onClick={onClose} 
            className="absolute top-8 right-12 px-4 py-2 text-muted-foreground hover:text-foreground bg-secondary border border-border hover:bg-accent rounded-lg transition-all z-10 shadow-sm flex items-center justify-center gap-2 group text-sm font-semibold"
          >
            <ArrowDownLeft size={16} className="rotate-90 group-hover:-translate-x-0.5 transition-transform" /> Go Back
          </button>

          <ScrollArea className="h-full max-w-4xl mx-auto w-full">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              {activeTab === 'credits' && <CreditsAndHistoryContent navigateTo={setActiveTab} />}
              {activeTab === 'plans' && <PlansAndTopupContent />}
              {activeTab === 'earn' && <EarnFreeCreditsContent />}
              {activeTab === 'profile' && <ProfileContent />}
              {activeTab === 'preferences' && <PreferencesContent />}
              {activeTab === 'inbox' && <InboxContent />}
              {activeTab === 'whatsnew' && <WhatsNewContent />}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TabButton = ({ id, icon: Icon, label, active, onClick, badge }: any) => {
  const isActive = active === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
        isActive ? "bg-secondary text-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon size={16} className={isActive ? "text-foreground" : "text-muted-foreground"} />
        {label}
      </div>
      {badge && (
        <Badge variant="default" className="w-5 h-5 p-0 flex items-center justify-center rounded-full text-[10px]">
          {badge}
        </Badge>
      )}
    </button>
  );
};

// --- Content Components ---

const CreditsAndHistoryContent = ({ navigateTo }: { navigateTo: (tabId: string) => void }) => {
  // Mock data preserved from original
  // transactions removed (previously unused in this view)

  return (
    <div className="space-y-8 pb-10">
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Credits & history</h3>
        <p className="text-muted-foreground text-sm">Monitor your current credit balances and review past transactions.</p>
      </div>

      <Card className="bg-secondary/30 border-border">
        <CardContent className="p-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 shadow-inner" />
              <div>
                <h4 className="text-base font-semibold text-foreground mb-0.5">You're on Free Plan</h4>
                <p className="text-sm text-muted-foreground">Upgrade anytime to unlock higher limits.</p>
              </div>
            </div>
            <button
              onClick={() => navigateTo('plans')}
              className="px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-bold rounded-lg transition-all shadow-lg"
            >
              Upgrade
            </button>
          </div>
          <div className="mt-6 pt-5 border-t border-border flex items-center gap-2">
            <Zap size={16} className="text-amber-500" fill="currentColor" />
            <p className="text-sm font-medium text-muted-foreground">
              You currently receive <span className="text-foreground font-bold">10 free credits</span> daily.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary/30 border-border">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Credit Details</CardTitle>
            <div className="flex gap-2">
               <button onClick={() => navigateTo('earn')} className="px-4 py-2 bg-secondary border border-border hover:bg-accent text-foreground text-sm font-semibold rounded-lg transition-colors">Earn</button>
               <button onClick={() => navigateTo('plans')} className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold rounded-lg transition-colors">Buy credits</button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-border rounded-lg bg-background p-4">
             <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground">Daily</span>
                <span className="text-xl font-bold">4 / 10</span>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-primary w-[40%] rounded-full" />
                </div>
             </div>
             <div className="flex flex-col gap-1 border-l border-border pl-4">
                <span className="text-xs text-muted-foreground">Monthly</span>
                <span className="text-xl font-bold">0 / 0</span>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-purple-500 w-0 rounded-full" />
                </div>
             </div>
             <div className="flex flex-col gap-1 border-l border-border pl-4">
                <span className="text-xs text-muted-foreground">Top-up</span>
                <span className="text-xl font-bold">1,401</span>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-emerald-500 w-full rounded-full" />
                </div>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import { EarnFreeCreditsContent } from "./earn-free-credits";
import { ProfileContent } from "./profile-content";
import { PreferencesContent } from "./preferences-content";
import { PlansAndTopupContent } from "./plans-content";
import { InboxContent } from "./inbox-content";
import { WhatsNewContent } from "./whats-new-content";
