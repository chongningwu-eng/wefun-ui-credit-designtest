import { 
  Calendar, 
  Clock, 
  Zap, 
  Users, 
  CreditCard, 
  Sparkles, 
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Badge } from "../ui/badge";

export const EarnFreeCreditsContent = () => {
    const [checkInDay, setCheckInDay] = useState(3);
    const [isCheckInClaimed, setIsCheckInClaimed] = useState(true);
    
    // Growth Task Stats
    const totalInvited = 12;
    const [unclaimedInvites, setUnclaimedInvites] = useState(3);
    
    // Conversion Task Stats
    const totalConverted = 5;
    const [unclaimedConversions, setUnclaimedConversions] = useState(1);
    
    // Exploration Task States
    const [communityState, setCommunityState] = useState<'join' | 'claim' | 'claimed'>('join');

    const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

    const handleCheckIn = () => {
        if (isCheckInClaimed && checkInDay < 7) {
            setCheckInDay(prev => prev + 1);
            setIsCheckInClaimed(false);
        } else if (!isCheckInClaimed) {
            setIsCheckInClaimed(true);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">Earn Free Credits</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">Complete tasks to earn extra generation credits permanently or daily.</p>
            </div>

            {/* 1. Daily Missions */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-8 h-8 rounded-lg bg-secondary/80 text-foreground flex items-center justify-center border border-border">
                        <Calendar size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-foreground tracking-tight">Daily Missions</h4>
                    <span className="ml-auto text-xs text-muted-foreground font-sans flex items-center gap-1.5">
                        <Clock size={14} /> Resets in 5h 22m
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Check-in Card (Daily) */}
                    <div className="bg-card border border-border rounded-xl p-6 transition-all group flex flex-col h-[240px] justify-between">
                        <div className="flex justify-between items-start shrink-0">
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-1">Daily Check-in</h4>
                                <p className="text-xs text-muted-foreground font-sans line-clamp-1">Claim your daily bonus and build your streak.</p>
                            </div>
                            <span className="text-sm font-bold text-primary shrink-0">+5</span>
                        </div>

                        <div className="flex-1 flex flex-col justify-center py-2">
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                    <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
                                        <div className={cn(
                                          "w-full h-1.5 rounded-full transition-colors",
                                          day < checkInDay || (day === checkInDay && isCheckInClaimed) ? "bg-primary" : "bg-secondary"
                                        )} />
                                        <span className={cn(
                                          "text-[10px] font-bold",
                                          day < checkInDay || (day === checkInDay && isCheckInClaimed) ? "text-primary" : "text-muted-foreground"
                                        )}>D{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 mt-2">
                            <button
                                onClick={handleCheckIn}
                                className={cn(
                                    "w-full py-2.5 text-xs font-bold rounded-lg transition-all shadow-sm active:scale-[0.98] border h-10 flex items-center justify-center",
                                    isCheckInClaimed
                                        ? "bg-secondary text-muted-foreground border-border cursor-default"
                                        : "bg-primary text-primary-foreground border-primary hover:opacity-90 shadow-primary/20"
                                )}
                            >
                                {isCheckInClaimed ? `Claimed (Day ${checkInDay})` : `Claim Day ${checkInDay}`}
                            </button>
                        </div>
                    </div>

                    {/* Community Card (Daily) */}
                    <div className="bg-card border border-border rounded-xl p-6 transition-all group flex flex-col h-[240px] justify-between">
                        <div className="flex justify-between items-start shrink-0">
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-1">Community First</h4>
                                <p className="text-xs text-muted-foreground font-sans line-clamp-1">Set your first project of the day to "Public".</p>
                            </div>
                            <span className="text-sm font-bold text-primary shrink-0">+10</span>
                        </div>

                        <div className="flex-1" />

                        <div className="shrink-0 mt-2">
                            <button className="px-5 py-2.5 w-full bg-secondary hover:bg-accent text-foreground text-xs font-bold rounded-lg transition-colors border border-border active:scale-[0.98] h-10 flex items-center justify-center">
                                Go to Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Growth Success */}
            <div>
                <div className="flex items-center gap-2 mb-6 mt-8">
                    <span className="w-8 h-8 rounded-lg bg-secondary/80 text-foreground flex items-center justify-center border border-border">
                        <Zap size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-foreground tracking-tight">Growth Success</h4>
                </div>

                <div className="space-y-4">
                    {/* Invite Registration */}
                    <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between group transition-colors relative overflow-hidden">
                        <div className="flex gap-5 items-center">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border text-muted-foreground group-hover:text-foreground transition-colors">
                                <Users size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-0.5">Invite Teammates <span className="text-muted-foreground text-sm font-normal ml-1">({Math.min(totalInvited, 10)}/10)</span></h4>
                                <p className="text-sm text-muted-foreground font-sans">Points for every friend who signs up.</p>
                                <div className="mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className="text-primary">{Math.min(totalInvited, 10)}</span> Total Invited</span>
                                    {unclaimedInvites > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-border" />
                                            <span className="text-amber-500 font-medium">{unclaimedInvites} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className="text-sm font-bold text-primary">+10<span className="text-[10px] opacity-60 ml-0.5">/each</span></span>
                            <div className="w-[100px] flex justify-end">
                                    <button 
                                    onClick={() => {
                                        if (unclaimedInvites > 0) {
                                            setUnclaimedInvites(0);
                                        }
                                    }}
                                    className={cn(
                                       "px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98]",
                                       unclaimedInvites > 0 
                                       ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10" 
                                       : totalInvited >= 10
                                       ? "bg-secondary text-muted-foreground border-border cursor-default"
                                       : "bg-secondary hover:bg-accent text-foreground border-border"
                                    )}>
                                    {unclaimedInvites > 0 ? 'Claim' : totalInvited >= 10 ? 'Claimed' : 'Copy Link'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Success Conversion */}
                    <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border text-muted-foreground group-hover:text-foreground transition-colors">
                                <CreditCard size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-0.5">Success Conversion</h4>
                                <p className="text-sm text-muted-foreground font-sans">Bonus when friends subscribe to Pro.</p>
                                <div className="mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className="text-primary">{totalConverted}</span> Total Converted</span>
                                    {unclaimedConversions > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-border" />
                                            <span className="text-amber-500">{unclaimedConversions} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className="text-sm font-bold text-primary">+500</span>
                            <div className="w-[100px] flex justify-end">
                                <button 
                                    onClick={() => {
                                        if (unclaimedConversions > 0) {
                                            setUnclaimedConversions(0);
                                        } else {
                                            setIsReferralModalOpen(true);
                                        }
                                    }}
                                    className={cn(
                                        "px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98]",
                                        unclaimedConversions > 0 
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10" 
                                        : "bg-secondary hover:bg-accent text-foreground border-border"
                                    )}
                                >
                                    {unclaimedConversions > 0 ? 'Claim' : 'View'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Exploration Tasks */}
            <div>
                <div className="flex items-center gap-2 mb-6 mt-8">
                    <span className="w-8 h-8 rounded-lg bg-secondary/80 text-foreground flex items-center justify-center border border-border">
                        <Sparkles size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-foreground tracking-tight">Exploration</h4>
                </div>

                <div className="space-y-4">
                    <div className="bg-card border border-border rounded-xl p-5 flex items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border text-muted-foreground group-hover:text-foreground transition-colors">
                                <MessageSquare size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-foreground mb-0.5">Join Community</h4>
                                <p className="text-sm text-muted-foreground font-sans">Chat with creators and get 50 credits.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className="text-sm font-bold text-primary">+50</span>
                            <div className="w-[100px] flex justify-end">
                                <button 
                                    onClick={() => {
                                        if (communityState === 'join') setCommunityState('claim');
                                        else if (communityState === 'claim') setCommunityState('claimed');
                                    }}
                                    className={cn(
                                        "px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98]",
                                        communityState === 'claim' 
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10" 
                                        : communityState === 'claimed'
                                        ? "bg-secondary text-muted-foreground border-border cursor-default"
                                        : "bg-secondary hover:bg-accent text-foreground border-border"
                                    )}>
                                    {communityState === 'join' ? 'Join' : communityState === 'claim' ? 'Claim' : 'Claimed'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReferralListModal isOpen={isReferralModalOpen} onClose={() => setIsReferralModalOpen(false)} />
        </div>
    );
};

const ReferralListModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const referrals = [
        { id: 1, name: 'Alex M.', email: 'alex.m@abc.com', status: 'converted', date: '2024-03-10' },
        { id: 2, name: 'Sarah J.', email: 's.jones@xyz.net', status: 'converted', date: '2024-03-08' },
        { id: 3, name: 'Michael T.', email: 'm.tech@startup.io', status: 'registered', date: '2024-03-05' },
        { id: 4, name: 'Emma W.', email: 'emma@design.co', status: 'registered', date: '2024-03-01' },
        { id: 5, name: 'David L.', email: 'david.l@hello.com', status: 'converted', date: '2024-02-28' },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-card border-border p-0">
                <div className="px-6 py-5 border-b border-border flex justify-between items-center shrink-0">
                    <div>
                        <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Users size={20} />
                            Your Referrals
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground mt-1">Track your invites and successful conversions.</p>
                    </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-6">
                    <div className="space-y-3">
                        {referrals.map((ref) => (
                            <div key={ref.id} className="flex items-center justify-between p-4 bg-background border border-border rounded-xl hover:border-muted-foreground transition-colors gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-sm shrink-0">
                                        {ref.name.charAt(0)}
                                    </div>
                                    <h4 className="text-sm font-bold text-foreground">{ref.name}</h4>
                                </div>
                                
                                <div className="flex items-center gap-6">
                                    <span className="text-xs text-muted-foreground">{ref.date}</span>
                                    {ref.status === 'converted' ? (
                                        <Badge variant="default" className="text-xs font-bold bg-primary/10 text-primary border-primary/20">
                                            Pro Subscriber
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary" className="text-xs font-bold">
                                            Registered
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
