import { useState, useEffect } from 'react';
import {
    User,
    Zap,
    Gift,
    X,
    ChevronRight,
    ArrowDownLeft,
    CheckCircle2,
    AlertCircle,
    Settings,
    Briefcase,
    History,
    MessageSquare,
    Bell,
    Sparkles,
    Calendar,
    Clock,
    Users,
    CreditCard,
    Palette
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// ==========================================
// 0. Nav Credit Balance (Top Bar)
// ==========================================
export const NavCreditBalance = ({ balance, onClick }: any) => {
    return (
        <div onClick={onClick} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-850 border border-gray-800 rounded-lg shadow-sm mr-2 group cursor-pointer hover:bg-gray-800 transition-colors relative">
            <Zap size={14} className="text-amber-500" fill="currentColor" />
            <span className="text-sm font-bold text-gray-200">{balance}</span>
            <span className="text-xs font-medium text-gray-500 ml-0.5">Credits</span>
        </div>
    );
};

// ==========================================
// 1. Avatar Dropdown (Lovable Mini-Dashboard)
// ==========================================
export const AvatarDropdown = ({ isOpen, onClose, onNavigateToTab }: any) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-[60]" onClick={onClose} />

            <Card className="absolute top-14 right-4 w-80 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans p-0">
                {/* User Profile Area (Top Block) */}
                <div className="p-4 flex items-center gap-3 bg-gray-850">
                    <Avatar className="w-12 h-12 rounded-xl">
                        <AvatarFallback className="bg-indigo-500 text-white font-bold text-xl rounded-xl">W</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-white tracking-tight">WeFun User</span>
                        <span className="text-xs font-medium text-gray-400">user@wefun.ai</span>
                    </div>
                </div>

                {/* Quick Actions (Settings & Invite) */}
                <div className="px-4 py-3 flex gap-2 border-b border-gray-800 bg-gray-850">
                    <Button
                        variant="ghost"
                        onClick={() => { onClose(); onNavigateToTab('profile'); }}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                        <Settings size={14} /> Settings
                    </Button>
                </div>

                <div className="p-4 flex flex-col gap-3 bg-gray-925">
                    {/* Pro Upsell Card */}
                    <Card className="bg-gray-850 border border-gray-800 rounded-xl p-3 flex flex-row items-center justify-between group">
                        <div className="flex items-center gap-2 text-white font-bold tracking-tight">
                            <Zap size={16} fill="white" /> Turn Pro
                        </div>
                        <Button
                            variant="ghost"
                            onClick={() => { onClose(); onNavigateToTab('plans'); }}
                            className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                        >
                            Upgrade
                        </Button>
                    </Card>

                    {/* Credit Summary Card */}
                    <Card className="bg-gray-850 border border-gray-800 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center cursor-pointer group" onClick={() => { onClose(); onNavigateToTab('plans'); }}>
                            <span className="text-sm font-bold text-white">Credits</span>
                            <span className="text-sm font-medium text-amber-500 flex items-center gap-1 group-hover:text-amber-400">
                                5 left <ChevronRight size={14} />
                            </span>
                        </div>

                        {/* Slim Blue Progress Bar */}
                        <Progress value={50} className="h-2 bg-gray-800 rounded-full" indicatorClassName="bg-cs-blue-600 rounded-full" />

                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                            <span className="text-xs text-gray-400">Daily credits reset at midnight UTC</span>
                        </div>
                    </Card>
                </div>

                {/* Extra Links (Fleshing out Dropdown) */}
                <div className="p-2 border-t border-gray-800 bg-gray-900 flex flex-col">
                    <Button variant="ghost" onClick={() => { onClose(); onNavigateToTab('profile'); }} className="justify-start text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors">Profile</Button>
                    <Button variant="ghost" onClick={() => { onClose(); onNavigateToTab('preferences'); }} className="justify-start text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors">Preferences</Button>
                    <Button variant="ghost" className="justify-start text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors mt-1">Log out</Button>
                </div>
            </Card>
        </>
    );
};

// ==========================================
// 1b. Inbox Dropdown (Real-time Notifications)
// ==========================================
export const InboxDropdown = ({ isOpen, onClose, onNavigateToTab }: any) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-[60]" onClick={onClose} />

            <Card className="absolute top-14 right-20 w-80 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans p-0">
                <div className="px-4 py-3 border-b border-gray-800 bg-gray-850 flex justify-between items-center">
                    <span className="text-sm font-bold text-white tracking-tight">Notifications</span>
                    <Badge className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2 New</Badge>
                </div>

                <ScrollArea className="max-h-[300px]">
                    <Button variant="ghost" onClick={() => { onClose(); onNavigateToTab('whatsnew'); }} className="w-full flex flex-col gap-1 p-3 border-b border-gray-800 hover:bg-gray-800 transition-colors relative text-left items-start rounded-none h-auto">
                        <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-bold text-white pl-4">Canvas mode is here!</span>
                        <span className="text-xs text-gray-400 pl-4 line-clamp-1">Try the new canvas mode for spatial editing...</span>
                        <span className="text-[10px] text-gray-500 pl-4 mt-1">2 hours ago</span>
                    </Button>
                    <Button variant="ghost" onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full flex flex-col gap-1 p-3 border-b border-gray-800 hover:bg-gray-800 transition-colors relative text-left items-start rounded-none h-auto">
                        <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-bold text-white pl-4">Your generation completed</span>
                        <span className="text-xs text-gray-400 pl-4 line-clamp-1">"A red bus driving in the city" is ready.</span>
                        <span className="text-[10px] text-gray-500 pl-4 mt-1">5 hours ago</span>
                    </Button>
                </ScrollArea>

                <Button variant="ghost" onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full px-4 py-3 text-xs font-semibold text-white bg-gray-850 hover:bg-gray-800 transition-colors text-center border-t border-gray-800 rounded-none">
                    View all notifications
                </Button>
            </Card>
        </>
    );
};


// ==========================================
// 2. V3 Unified Settings Modal (Comprehensive Taxonomy)
// ==========================================
export const UnifiedSettingsModal = ({ isOpen, onClose, initialTab = 'credits' }: any) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (isOpen) setActiveTab(initialTab);
    }, [isOpen, initialTab]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full h-full bg-gray-925 flex overflow-hidden flex-row">
                {/* V3 Sidebar Taxonomy */}
                <ScrollArea className="w-64 bg-gray-900 border-r border-gray-800 py-8 px-4 flex flex-col h-full">
                    <div className="flex flex-col gap-6">
                        {/* Section 1: Billing & Credits */}
                        <div>
                            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 uppercase tracking-wider">Billing & Credits</div>
                            <div className="flex flex-col gap-1">
                                <TabButton id="credits" icon={History} label="Credits & history" active={activeTab} onClick={setActiveTab} />
                                <TabButton id="plans" icon={Briefcase} label="Plans & top-up" active={activeTab} onClick={setActiveTab} />
                                <TabButton id="earn" icon={Gift} label="Earn Free Credits" active={activeTab} onClick={setActiveTab} />
                            </div>
                        </div>

                        {/* Section 2: Account */}
                        <div>
                            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 uppercase tracking-wider">Account</div>
                            <div className="flex flex-col gap-1">
                                <TabButton id="profile" icon={User} label="Profile" active={activeTab} onClick={setActiveTab} />
                                <TabButton id="preferences" icon={Settings} label="Preferences" active={activeTab} onClick={setActiveTab} />
                            </div>
                        </div>

                        {/* Section 3: Notifications */}
                        <div>
                            <div className="text-xs font-semibold text-gray-500 mb-2 px-2 uppercase tracking-wider mt-2">Notifications</div>
                            <div className="flex flex-col gap-1">
                                <TabButton id="inbox" icon={Bell} label="Inbox" active={activeTab} onClick={setActiveTab} badge={1} />
                                <TabButton id="whatsnew" icon={Sparkles} label="What's New" active={activeTab} onClick={setActiveTab} badge={1} />
                            </div>
                        </div>
                    </div>
                </ScrollArea>

                {/* Content Area */}
                <ScrollArea className="flex-1 bg-gray-950 relative py-10 px-12">
                    <Button onClick={onClose} variant="ghost" className="absolute top-8 right-12 px-4 py-2 text-gray-400 hover:text-white bg-gray-850 border border-gray-800 hover:bg-gray-800 hover:border-gray-700 rounded-lg transition-all z-10 shadow-sm flex items-center justify-center gap-2 group text-sm font-semibold">
                        <ArrowDownLeft size={16} className="rotate-90 group-hover:-translate-x-0.5 transition-transform" /> Go Back
                    </Button>

                    <div className="max-w-4xl mx-auto flex flex-col justify-start w-full">
                        {activeTab === 'credits' && <CreditsAndHistoryContent navigateTo={setActiveTab} />}
                        {activeTab === 'plans' && <PlansAndTopupContent />}
                        {activeTab === 'earn' && <EarnFreeCreditsContent />}
                        {activeTab === 'profile' && <ProfileContent />}
                        {activeTab === 'preferences' && <PreferencesContent />}
                        {activeTab === 'inbox' && <InboxContent />}
                        {activeTab === 'whatsnew' && <WhatsNewContent />}
                        {(activeTab === 'account' || activeTab === 'people') && (
                            <div className="text-white">Placeholder for {activeTab} content...</div>
                        )}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

const TabButton = ({ id, icon: Icon, label, active, onClick, badge }: any) => {
    const isActive = active === id;
    return (
        <Button
            variant={isActive ? 'secondary' : 'ghost'}
            onClick={() => onClick(id)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full h-auto ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-850 hover:text-gray-200'
                }`}
        >
            <div className="flex items-center gap-3">
                <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500'} />
                {label}
            </div>
            {badge && (
                <Badge className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold p-0">{badge}</Badge>
            )}
        </Button>
    );
};


// --- V3 Credits & History Content (Round 24) ---
const CreditsAndHistoryContent = ({ navigateTo }: { navigateTo: (tabId: string) => void }) => {
    const [filter, setFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const transactions = [
        { id: 1, type: 'AI Generation (Canvas)', amount: -3, date: 'Today, 14:02', income: false },
        { id: 2, type: 'Daily Reset', amount: '+10', date: 'Today, 00:00', income: true, expires: 'In 10 hours' },
        { id: 3, type: 'Code Export Action', amount: -25, date: 'Mar 1st', income: false },
        { id: 4, type: 'Top-up Purchase', amount: '+500', date: 'Feb 28th', income: true, expires: 'Never' },
        { id: 5, type: 'Design Generation', amount: -12, date: 'Feb 25th', income: false },
        { id: 6, type: 'Community Reward', amount: '+50', date: 'Feb 20th', income: true, expires: 'Never' },
        { id: 7, type: 'AI Generation (Chat)', amount: -2, date: 'Feb 19th', income: false },
    ];

    const filteredTransactions = transactions.filter(t => {
        if (filter === 'income') return t.income;
        if (filter === 'expense') return !t.income;
        return true;
    });

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const currentTransactions = filteredTransactions.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            {/* Header / Page Title */}
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                    Credits & history
                </h3>
                <p className="text-gray-400 text-sm">Monitor your current credit balances and review past transactions.</p>
            </div>

            {/* Plan Status Card (Full width) */}
            <Card className="bg-gray-850 border border-gray-800 rounded-xl p-6 flex flex-col justify-center transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex-shrink-0 shadow-inner" />
                        <div>
                            <h4 className="text-base font-semibold text-white mb-0.5">You're on Free Plan</h4>
                            <p className="text-sm text-gray-400">Upgrade anytime to unlock higher limits.</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={() => navigateTo('plans')}
                        className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-400 hover:from-indigo-600 hover:to-indigo-500-dark text-white text-sm font-bold rounded-lg transition-all shadow-[0_4px_20px_-4px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_25px_-4px_rgba(79,70,229,0.5)] active:scale-95 whitespace-nowrap w-full md:w-auto mt-2 md:mt-0">
                        Upgrade
                    </Button>
                </div>
                <Separator className="bg-gray-800 mt-6" />
                <div className="pt-5 flex items-center gap-2">
                    <Zap size={16} className="text-amber-500" fill="currentColor" />
                    <p className="text-sm font-medium text-gray-400">
                        You currently receive <span className="text-white font-bold">10 free credits</span> daily.
                    </p>
                </div>
            </Card>

            {/* Credit Details Layout */}
            <Card className="bg-gray-850 border border-gray-800 rounded-xl p-6 flex flex-col transition-colors shadow-sm">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <h4 className="text-lg font-bold text-white tracking-tight">Credit Details</h4>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                            <Zap size={16} className="text-indigo-500" fill="currentColor" />
                            <span className="text-sm font-bold text-gray-200">Total: <span className="text-white text-base">1,405</span></span>
                        </div>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <Button
                            variant="ghost"
                            onClick={() => navigateTo('earn')}
                            className="flex-1 sm:flex-none px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-lg transition-colors border border-gray-700 shadow-sm active:scale-[0.98]">
                            Earn
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                navigateTo('plans');
                                setTimeout(() => {
                                    document.getElementById('top-up-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 50);
                            }}
                            className="flex-1 sm:flex-none px-4 py-2 bg-gray-200 hover:bg-white text-black hover:text-black text-sm font-semibold rounded-lg transition-colors shadow-sm active:scale-[0.98]">
                            Buy credits
                        </Button>
                    </div>
                </div>

                {/* Sub-cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-gray-800 border border-gray-800 rounded-lg bg-gray-900">
                    
                    {/* 1. Daily Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white">Daily</span>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="w-3.5 h-3.5 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center text-[9px] hover:bg-gray-800 hover:text-white transition-colors cursor-help">
                                                ?
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="w-48 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
                                            <ul className="flex flex-col gap-1.5 text-xs text-gray-400 text-left">
                                                <li className="flex items-start gap-1.5"><span className="text-white">&bull;</span> consumed first</li>
                                                <li className="flex items-start gap-1.5"><span className="text-white">&bull;</span> Reset daily (UTC 0)</li>
                                            </ul>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <span className="text-sm font-medium text-white">4 <span className="text-gray-400">/ 10</span></span>
                        </div>
                        <span className="text-xs text-gray-500 mb-4">Resets daily at UTC 0.</span>
                        <Progress value={40} className="h-4 bg-gray-800 rounded-full mt-auto shadow-inner" indicatorClassName="bg-blue-500 rounded-full" />
                    </div>

                    {/* 2. Monthly Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white">Monthly</span>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="w-3.5 h-3.5 rounded-full border border-gray-700 text-gray-400 flex items-center justify-center text-[9px] hover:bg-gray-800 hover:text-white transition-colors cursor-help">
                                                ?
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="w-48 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-xl">
                                            <ul className="flex flex-col gap-1.5 text-xs text-gray-400 text-left">
                                                <li className="flex items-start gap-1.5"><span className="text-white">&bull;</span> consumed second</li>
                                                <li className="flex items-start gap-1.5"><span className="text-white">&bull;</span> Pro credits rollover</li>
                                            </ul>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <span className="text-sm font-medium text-white">0 <span className="text-gray-400">/ 0</span></span>
                        </div>
                        <span className="text-xs text-gray-500 mb-4">Rollover enabled.</span>
                        <Progress value={0} className="h-4 bg-gray-800 rounded-full mt-auto shadow-inner" indicatorClassName="bg-purple-500 rounded-full" />
                    </div>

                    {/* 3. Top-up Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-white">Top-up</span>
                            <span className="text-sm font-medium text-white">1,401</span>
                        </div>
                        <span className="text-xs text-gray-500 mb-4">Non-expiring standalone.</span>
                        <Progress value={100} className="h-4 bg-gray-800 rounded-full mt-auto shadow-inner" indicatorClassName="bg-emerald-500 rounded-full" />
                    </div>

                </div>
            </Card>

            {/* Transaction History Section (Paginated) */}
            <div className="pt-4">
                <div className="flex flex-col gap-4 mb-4">
                    <h4 className="text-base font-semibold text-white">Transaction log</h4>

                    {/* Segmented Control via Tabs */}
                    <Tabs value={filter} onValueChange={(v) => { setFilter(v); setCurrentPage(1); }} className="w-full">
                        <TabsList variant="default" className="w-full bg-gray-850 border border-gray-800 rounded-lg p-1 h-auto">
                            {(['all', 'income', 'expense'] as const).map(type => (
                                <TabsTrigger
                                    key={type}
                                    value={type}
                                    className={`flex-1 py-2 text-sm capitalize font-medium rounded-md transition-colors border border-solid ${filter === type
                                        ? 'bg-gray-800 text-white shadow-sm border-gray-700'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-transparent'
                                        }`}
                                >
                                    {type}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                <Card className="bg-gray-850 border border-gray-800 rounded-xl overflow-hidden p-0">
                    <div className="grid grid-cols-4 px-5 py-3 border-b border-gray-800 text-xs font-medium text-gray-500 bg-gray-900">
                        <div className="col-span-2">Transaction</div>
                        <div>Date</div>
                        <div className="text-right">Amount</div>
                    </div>
                    {/* Fixed height container to prevent scrollbar jumping */}
                    <div className="divide-y divide-gray-800 min-h-[310px]">
                        {currentTransactions.map((tr) => (
                            <div key={tr.id} className={`grid grid-cols-4 px-5 py-3.5 items-center text-sm hover:bg-gray-800/30 transition-colors`}>
                                <div className="col-span-2 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${tr.income ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-gray-800 border-gray-700 text-gray-400'}`}>
                                        {tr.income ? <ArrowDownLeft size={14} strokeWidth={2.5} /> : <Zap size={14} fill="currentColor" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-200 font-medium text-sm">{tr.type}</span>
                                        {tr.expires && <span className="text-[11px] text-gray-500">{tr.expires}</span>}
                                    </div>
                                </div>
                                <div className="text-gray-400 text-xs font-medium">{tr.date}</div>
                                <div className={`text-right font-medium text-sm ${tr.income ? 'text-emerald-400' : 'text-white'}`}>{tr.amount}</div>
                            </div>
                        ))}
                        {currentTransactions.length === 0 && (
                            <div className="px-5 py-8 text-center text-sm text-gray-500">
                                No transactions found.
                            </div>
                        )}
                    </div>

                    {/* Pagination Footer */}
                    {filteredTransactions.length > 0 && (
                        <div className="px-5 py-3 border-t border-gray-800 flex justify-between items-center bg-gray-900">
                            <span className="text-xs text-gray-500">
                                Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-gray-850 border border-gray-800 hover:border-gray-700 rounded-md disabled:opacity-50 disabled:pointer-events-none transition-colors">
                                    Previous
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-gray-850 border border-gray-800 hover:border-gray-700 rounded-md disabled:opacity-50 disabled:pointer-events-none transition-colors">
                                    Next
                                </Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

// --- V3 Plans & Topup Content ---
const PlansAndTopupContent = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Plans & top-up</h3>
            <p className="text-gray-400 text-sm">Upgrade your tier or purchase extra standalone credits.</p>
        </div>

        <Card className="bg-gray-850 border border-gray-800 rounded-xl p-6 flex flex-row justify-between items-center">
            <div>
                <h4 className="text-xl font-bold text-white tracking-tight mb-1">You're on Free Plan</h4>
                <p className="text-sm text-gray-400">Limited to 10 daily credits with sequential generation speeds.</p>
            </div>
        </Card>

        {/* Bottom Row: Pricing Cards */}
        <div id="pricing-cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <PricingCard
                tier="Free"
                desc="A generous starting plan to explore core features."
                price="0"
                cta="Current Plan"
                featuresHeader="Included in Free:"
                features={[
                    "10 daily credits",
                    "Basic Generation models",
                    "Community support"
                ]}
            />
            <PricingCard
                tier="Pro"
                desc="Designed for fast-moving creators building together."
                price="25"
                cta="Upgrade"
                featuresHeader="All features in Free, plus:"
                features={[
                    "1500 monthly credits",
                    "50 daily credits",
                    "Usage-based Cloud + AI",
                    "Code Export capability"
                ]}
                primary
            />
        </div>

        {/* Top-Up Section */}
        <div id="top-up-section" className="pb-4 scroll-mt-6">
            <Separator className="bg-gray-800 mb-6" />
            <h4 className="text-base font-bold text-white mb-2">Buy extra credits (Top-up)</h4>
            <p className="text-sm text-gray-400 mb-6">Extra credits never expire. Used only when Daily and Monthly allowances are depleted. (100 credits = $1)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                <Card className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">500 Credits</span>
                            <span className="text-xs text-transparent font-medium select-none" aria-hidden="true">+0% Bonus</span>
                        </div>
                        <span className="font-bold text-gray-400">$5</span>
                    </div>
                    <Button variant="ghost" className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold rounded-lg transition-colors mt-auto">Purchase</Button>
                </Card>

                <Card className="bg-gray-900 border border-indigo-500/30 rounded-xl p-5 relative flex flex-col transition-colors overflow-visible">
                    <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-lg">Popular</div>
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">1,100 Credits</span>
                            <span className="text-xs text-emerald-400 font-medium">+10% Bonus</span>
                        </div>
                        <span className="font-bold text-white">$10</span>
                    </div>
                    <Button variant="ghost" className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm mt-auto">Purchase</Button>
                </Card>

                <Card className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">2,400 Credits</span>
                            <span className="text-xs text-emerald-400 font-medium">+20% Bonus</span>
                        </div>
                        <span className="font-bold text-gray-400">$20</span>
                    </div>
                    <Button variant="ghost" className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold rounded-lg transition-colors mt-auto">Purchase</Button>
                </Card>
            </div>

            {/* Custom Amount */}
            <Card className="mt-4 bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">Custom Amount</span>
                    <span className="text-xs text-gray-400">Need a specific amount? (100 credits = $1.00)</span>
                </div>
                <div className="flex gap-2 w-full md:w-auto items-stretch">
                    <Input
                        type="number"
                        placeholder="e.g. 5000"
                        className="flex-1 md:w-40 h-auto py-2 bg-gray-850 border border-gray-700 focus:border-indigo-500 text-white text-sm rounded-lg pl-3 pr-4"
                        min={100}
                        step={100}
                    />
                    <Button variant="ghost" className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                        Purchase
                    </Button>
                </div>
            </Card>
        </div>
    </div>
);

const PricingCard = ({ tier, desc, price, cta, featuresHeader, features, primary = false }: any) => (
    <Card className={`relative bg-gray-850 p-8 rounded-xl flex flex-col h-[540px] justify-between transition-all overflow-visible ${
        primary 
            ? 'border-2 border-cs-green-500 shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)] z-10'
            : 'border-2 border-gray-800'
    }`}>
        {primary && (
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cs-yellow-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-md shadow-md whitespace-nowrap uppercase tracking-widest border border-cs-yellow-500">
                 Most Popular
             </div>
        )}
        <div className="shrink-0">
            <h3 className={`text-xl font-bold text-white mb-2`}>{tier}</h3>
            <p className="text-sm text-gray-400 mb-8 h-12 leading-relaxed line-clamp-2">{desc}</p>
            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-heading font-extrabold tracking-tight text-white mb-1">${price}</span>
                <span className="text-sm text-gray-500 font-medium block">per month</span>
            </div>
        </div>

        <div className="shrink-0 mb-6">
            <Button variant="ghost" className={`w-full h-12 font-bold text-sm transition-all shadow-sm flex items-center justify-center ${
                primary 
                    ? 'bg-cs-green-500 hover:bg-cs-green-600 text-gray-900 hover:text-gray-900 rounded-lg active:scale-[0.98]' 
                    : cta === 'Current Plan'
                    ? 'bg-gray-800 text-gray-400 rounded-lg pointer-events-none'
                    : 'bg-gray-800 hover:bg-gray-700 text-white hover:text-white rounded-lg active:scale-[0.98]'
                }`}>
                {cta}
            </Button>
        </div>

        <div className={`flex-1 min-h-0 overflow-hidden ${primary ? 'bg-cs-green-500/5 border border-cs-green-500/20 rounded-xl p-5' : ''}`}>
            <h5 className="text-sm font-bold text-white mb-4">{featuresHeader}</h5>
            <ul className="flex flex-col gap-4">
                {features.map((f: any, i: any) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className={`${primary ? 'text-cs-green-500' : 'text-gray-200'} shrink-0 mt-0.5`} /> 
                        <span className={primary && i < 2 ? 'text-white font-medium' : ''}>{f}</span>
                    </li>
                ))}
            </ul>
        </div>
    </Card>
);


// ==========================================
// Referral List Modal Component
// ==========================================
const ReferralListModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const referrals = [
        { id: 1, name: 'Alex M.', email: 'alex.m@abc.com', status: 'converted', date: '2024-03-10' },
        { id: 2, name: 'Sarah J.', email: 's.jones@xyz.net', status: 'converted', date: '2024-03-08' },
        { id: 3, name: 'Michael T.', email: 'm.tech@startup.io', status: 'registered', date: '2024-03-05' },
        { id: 4, name: 'Emma W.', email: 'emma@design.co', status: 'registered', date: '2024-03-01' },
        { id: 5, name: 'David L.', email: 'david.l@hello.com', status: 'converted', date: '2024-02-28' },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <Card className="relative w-full max-w-2xl bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] p-0">
                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-800 flex justify-between items-center bg-gray-900 shrink-0">
                    <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Users className="text-gray-400" size={20} />
                            Your Referrals
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">Track your invites and successful conversions.</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                    >
                        <X size={20} />
                    </Button>
                </div>

                {/* List */}
                <ScrollArea className="flex-1 p-6">
                    <div className="flex flex-col gap-3">
                        {referrals.map((ref) => (
                            <Card key={ref.id} className="flex flex-row flex-wrap items-center justify-between p-4 bg-gray-850 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-10 h-10">
                                        <AvatarFallback className="bg-gray-800 text-white font-bold text-sm">{ref.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-sm font-bold text-white">{ref.name}</h4>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-6 ml-auto">
                                    <span className="text-xs text-gray-500 whitespace-nowrap">{ref.date}</span>
                                    
                                    <div className="w-[130px] flex justify-end">
                                        {ref.status === 'converted' ? (
                                            <Badge className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-cs-green-muted bg-cs-green-muted/10 rounded-md border border-cs-green-muted/20 h-auto">
                                                <CreditCard size={12} strokeWidth={2.5} />
                                                Pro Subscriber
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-gray-400 bg-gray-800 rounded-md border border-gray-700 h-auto">
                                                <User size={12} strokeWidth={2.5} />
                                                Registered
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </Card>
        </div>
    );
};

const EarnFreeCreditsContent = () => {
    const [checkInDay, setCheckInDay] = useState(3);
    const [isCheckInClaimed, setIsCheckInClaimed] = useState(true);
    
    const totalInvited = 12;
    const [unclaimedInvites, setUnclaimedInvites] = useState(3);
    
    const totalConverted = 5;
    const [unclaimedConversions, setUnclaimedConversions] = useState(1);
    
    const [communityState, setCommunityState] = useState<'join' | 'claim' | 'claimed'>('join');

    const [isReferralModalOpen, setIsReferralModalOpen] = useState(false);

    const colors = {
        emerald: 'text-cs-green-muted',
        emeraldBg: 'bg-cs-green-muted',
        emeraldBorder: 'border-cs-green-muted/20',
        emeraldGlow: 'shadow-cs-green-muted/10',
        indigo: 'text-indigo-muted',
        indigoBg: 'bg-indigo-muted',
        purple: 'text-purple-muted',
        purpleBg: 'bg-purple-muted',
        orange: 'text-orange-muted',
        orangeBg: 'bg-orange-muted'
    };

    const handleCheckIn = () => {
        if (isCheckInClaimed && checkInDay < 7) {
            setCheckInDay(prev => prev + 1);
            setIsCheckInClaimed(false);
        } else if (!isCheckInClaimed) {
            setIsCheckInClaimed(true);
        }
    };

    return (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Earn Free Credits</h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed">Complete tasks to earn extra generation credits permanently or daily.</p>
            </div>

            {/* 1. Daily Missions */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <span className={`w-8 h-8 rounded-lg ${colors.indigoBg}/10 ${colors.indigo} flex items-center justify-center`}>
                        <Calendar size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Daily Missions</h4>
                    <span className="ml-auto text-xs text-gray-400 font-sans flex items-center gap-1.5">
                        <Clock size={14} /> Resets in 5h 22m
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Check-in Card (Daily) */}
                    <Card className="bg-gray-850 border-2 border-gray-800 rounded-xl p-3.5 transition-all group flex flex-col justify-between h-[215px]">
                        <div className="shrink-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1.5">Daily Check-in</h4>
                                    <p className="text-xs text-gray-400 font-sans leading-relaxed">Claim your daily bonus and build your streak.</p>
                                </div>
                                <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+5</span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                    <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
                                        <div className={`w-full h-3 rounded-full transition-all duration-500 ${day < checkInDay || (day === checkInDay && isCheckInClaimed) ? colors.emeraldBg : 'bg-gray-800'}`} />
                                        <span className={`text-[11px] font-bold font-heading tracking-tight ${day < checkInDay || (day === checkInDay && isCheckInClaimed) ? colors.emerald : 'text-gray-500'}`}>D{day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 mt-1">
                            <Button
                                variant="ghost"
                                onClick={handleCheckIn}
                                className={`w-full h-9 text-xs font-bold rounded-lg transition-all shadow-lg active:scale-[0.98] flex items-center justify-center ${isCheckInClaimed
                                    ? 'bg-gray-800 text-gray-500 cursor-default border border-gray-700 pointer-events-none'
                                    : `${colors.emeraldBg} text-white hover:text-white ${colors.emeraldGlow}`
                                    }`}
                            >
                                {isCheckInClaimed ? `Claimed (Day ${checkInDay})` : `Claim Day ${checkInDay}`}
                            </Button>
                        </div>
                    </Card>

                    {/* Public Post Card (Daily) */}
                    <Card className="bg-gray-850 border-2 border-gray-800 rounded-xl p-3.5 transition-all group flex flex-col justify-between h-[215px]">
                        <div className="shrink-0">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1.5">Community First</h4>
                                    <p className="text-xs text-gray-400 font-sans leading-relaxed">Set your first project of the day to "Public".</p>
                                </div>
                                <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+10</span>
                            </div>
                        </div>

                        <div className="flex-1" />

                        <div className="shrink-0 mt-1">
                            <Button variant="ghost" className="px-5 h-9 w-full bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-lg transition-colors border border-gray-700 active:scale-[0.98] flex items-center justify-center">
                                Go to Project
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* 2. Growth Success */}
            <div>
                <div className="flex items-center gap-2 mb-6 mt-8">
                    <span className={`w-8 h-8 rounded-lg ${colors.purpleBg}/10 ${colors.purple} flex items-center justify-center`}>
                        <Zap size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Growth Success</h4>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Invite Registration */}
                    <Card className="bg-gray-850 border border-gray-800 rounded-xl p-5 flex flex-row items-center justify-between group transition-colors relative overflow-hidden">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <Users size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Invite Teammates <span className="text-gray-500 text-sm font-normal ml-1">({Math.min(totalInvited, 10)}/10)</span></h4>
                                <p className="text-sm text-gray-400 font-sans">Points for every friend who signs up.</p>
                                <div className="mt-2 text-[10px] font-bold text-gray-500 font-heading uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className={colors.purple}>{Math.min(totalInvited, 10)}</span> Total Invited</span>
                                    {unclaimedInvites > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                                            <span className="text-amber-500/70">{unclaimedInvites} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+10<span className="text-[10px] opacity-60 ml-0.5">/each</span></span>
                            <div className="w-[100px] flex justify-end">
                                <Button 
                                    variant="ghost"
                                    onClick={() => { if (unclaimedInvites > 0) { setUnclaimedInvites(0); } }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        unclaimedInvites > 0 
                                        ? 'bg-cs-green-muted hover:bg-cs-green-muted-dark text-white hover:text-white border-cs-green-muted/20 shadow-lg shadow-cs-green-muted/10' 
                                        : totalInvited >= 10
                                        ? 'bg-gray-800 text-gray-500 border-gray-700 cursor-default pointer-events-none'
                                        : 'bg-white/5 hover:bg-white/10 text-white hover:text-white border-white/10'
                                    }`}>
                                    {unclaimedInvites > 0 ? 'Claim' : totalInvited >= 10 ? 'Claimed' : 'Copy Link'}
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Invite Subscription */}
                    <Card className="bg-gray-850 border border-gray-800 rounded-xl p-5 flex flex-row items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <CreditCard size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Success Conversion</h4>
                                <p className="text-sm text-gray-400 font-sans">Bonus when friends subscribe to Pro.</p>
                                <div className="mt-2 text-[10px] font-bold text-gray-500 font-heading uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className={colors.orange}>{totalConverted}</span> Total Converted</span>
                                    {unclaimedConversions > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                                            <span className="text-amber-500/70">{unclaimedConversions} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+500</span>
                            <div className="w-[100px] flex justify-end">
                                <Button 
                                    variant="ghost"
                                    onClick={() => {
                                        if (unclaimedConversions > 0) { setUnclaimedConversions(0); }
                                        else { setIsReferralModalOpen(true); }
                                    }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        unclaimedConversions > 0 
                                        ? 'bg-cs-green-muted hover:bg-cs-green-muted-dark text-white hover:text-white border-cs-green-muted/20 shadow-lg shadow-cs-green-muted/10' 
                                        : 'bg-white/5 hover:bg-white/10 text-white hover:text-white border-white/10'
                                    }`}
                                >
                                    {unclaimedConversions > 0 ? 'Claim' : 'View'}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* 3. One-time / Exploration Tasks */}
            <div>
                <div className="flex items-center gap-2 mb-6 mt-8">
                    <span className={`w-8 h-8 rounded-lg ${colors.orangeBg}/10 ${colors.orange} flex items-center justify-center`}>
                        <Sparkles size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Exploration</h4>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Join Community Task */}
                    <Card className="bg-gray-850 border border-gray-800 rounded-xl p-5 flex flex-row items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <MessageSquare size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Join Community</h4>
                                <p className="text-sm text-gray-400 font-sans">Chat with creators and get 50 credits.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+50</span>
                            <div className="w-[100px] flex justify-end">
                                <Button 
                                    variant="ghost"
                                    onClick={() => {
                                        if (communityState === 'join') setCommunityState('claim');
                                        else if (communityState === 'claim') setCommunityState('claimed');
                                    }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        communityState === 'claim' 
                                        ? 'bg-cs-green-muted hover:bg-cs-green-muted-dark text-white hover:text-white border-cs-green-muted/20 shadow-lg shadow-cs-green-muted/10' 
                                        : communityState === 'claimed'
                                        ? 'bg-gray-800 text-gray-500 border-gray-700 pointer-events-none'
                                        : 'bg-white/5 hover:bg-white/10 text-white hover:text-white border-white/10'
                                    }`}>
                                    {communityState === 'join' ? 'Join' : communityState === 'claim' ? 'Claim' : 'Claimed'}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <ReferralListModal isOpen={isReferralModalOpen} onClose={() => setIsReferralModalOpen(false)} />
        </div>
    );
};


const ProfileContent = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Profile</h3>
            <p className="text-gray-400 text-sm">Manage your personal information and identity.</p>
        </div>
        <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 rounded-full border-4 border-gray-900 ring-1 ring-gray-800">
                <AvatarFallback className="bg-indigo-500 text-white text-4xl font-bold">W</AvatarFallback>
            </Avatar>
            <div className="flex gap-3">
                <Button variant="ghost" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-lg transition-colors">Upload Avatar</Button>
                <Button variant="ghost" className="px-4 py-2 text-rose-500 hover:bg-rose-500/10 text-sm font-semibold rounded-lg transition-colors">Remove</Button>
            </div>
        </div>
        <div className="grid gap-4 max-w-md">
            <div>
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Display Name</Label>
                <Input type="text" defaultValue="WeFun User" className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm text-white" />
            </div>
            <div>
                <Label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</Label>
                <Input type="email" defaultValue="user@wefun.ai" disabled className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-sm text-gray-500 cursor-not-allowed opacity-50" />
            </div>
        </div>
        <Button variant="ghost" className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm">Save Changes</Button>
    </div>
);

const PreferencesContent = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Preferences</h3>
            <p className="text-gray-400 text-sm">Customize your application experience.</p>
        </div>

        <div className="max-w-xl flex flex-col gap-6">
            <Card className="flex flex-row items-center justify-between bg-gray-850 border border-gray-800 p-5 rounded-xl">
                <div>
                    <h4 className="text-base font-bold text-white mb-1">Theme</h4>
                    <p className="text-sm text-gray-400">Select your preferred color scheme.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-lg bg-gray-800 border-2 border-indigo-500 flex items-center justify-center text-white"><Palette size={16} /></Button>
                </div>
            </Card>

            <Card className="flex flex-row items-center justify-between bg-gray-850 border border-gray-800 p-5 rounded-xl">
                <div>
                    <h4 className="text-base font-bold text-white mb-1">Email Notifications</h4>
                    <p className="text-sm text-gray-400">Receive updates on new features and credit usage.</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-indigo-500" />
            </Card>
        </div>
    </div>
);

// ==========================================
// 3. Inbox and Whats New Content Components
// ==========================================
const InboxContent = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Inbox</h3>
            <p className="text-gray-400 text-sm">Your personal notifications and alerts.</p>
        </div>
        <Card className="bg-gray-850 border border-gray-800 rounded-xl divide-y divide-gray-800 p-0">
            <div className="p-5 flex gap-4 hover:bg-gray-800 transition-colors relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Your generation completed <Badge variant="secondary" className="ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-wider h-auto">New</Badge></h4>
                    <p className="text-sm text-gray-400 mb-2">"A red bus driving in the city" has successfully finished generating. Check your gallery.</p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                </div>
            </div>
            <div className="p-5 flex gap-4 hover:bg-gray-800 transition-colors relative">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <Zap size={18} fill="currentColor" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Credits Refilled</h4>
                    <p className="text-sm text-gray-400 mb-2">Your daily allowance of 10 free credits has been renewed.</p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                </div>
            </div>
        </Card>
    </div>
);

const WhatsNewContent = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">What's New</h3>
            <p className="text-gray-400 text-sm">Platform updates, features, and announcements.</p>
        </div>
        <Card className="bg-gray-850 border border-gray-800 rounded-xl divide-y divide-gray-800 p-0">
            <div className="p-5 flex gap-4 hover:bg-gray-800 transition-colors relative cursor-pointer">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Canvas mode is here! <Badge variant="secondary" className="ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-wider h-auto">New</Badge></h4>
                    <p className="text-sm text-gray-400 mb-3">Try the new canvas mode for spatial editing. Drag, drop, and link AI generations seamlessly onto an infinite workspace.</p>
                    <Button variant="link" className="text-sm font-bold text-indigo-500 hover:text-indigo-600 p-0 h-auto">Read full release notes &rarr;</Button>
                </div>
            </div>
        </Card>
    </div>
);


// ==========================================
// 4. Inline Chat Warning (Movable to Top/Bottom in App.tsx)
// ==========================================
export const InlineChatWarning = ({ onUpgrade, onClose, text, buttonText }: any) => {
    return (
        <div className="px-4 py-3 flex items-center justify-between bg-gray-825 border-b border-gray-700">
            <span className="text-sm text-white font-medium tracking-tight">
                {text || "0 free credits remaining"}
            </span>
            <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={onUpgrade} className="px-3 py-1.5 bg-cs-blue-600 hover:bg-cs-blue-700 text-white text-[13px] font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center">
                    {buttonText || "Add credits"}
                </Button>
                <Button variant="ghost" size="icon-xs" onClick={onClose} className="p-1 text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors"><X size={16} /></Button>
            </div>
        </div>
    );
};

// ==========================================
// 4. Mini Upgrade Modal (Triggered by Chat Warning)
// ==========================================
export const MiniUpgradeModal = ({ isOpen, onClose, onNavigateToPlans }: any) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <Card className="relative w-full max-w-sm bg-gray-850 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden p-6 text-center flex flex-col items-center">
                <Button variant="ghost" size="icon-xs" onClick={onClose} className="absolute top-4 right-4 p-1.5 text-gray-500 hover:bg-gray-800 hover:text-white rounded-md transition-colors">
                    <X size={16} />
                </Button>

                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-4 border border-indigo-500/30">
                    <Zap size={24} fill="currentColor" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Out of Credits</h3>
                <p className="text-sm text-gray-400 mb-6">You've reached your daily limit for generations. Upgrade to a Pro plan for more credits and faster speeds.</p>

                <div className="flex w-full gap-3">
                    <Button variant="ghost" onClick={onClose} className="flex-1 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                        Dismiss
                    </Button>
                    <Button variant="ghost" onClick={() => { onClose(); onNavigateToPlans(); }} className="flex-1 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                        View Plans
                    </Button>
                </div>
            </Card>
        </div>
    );
};


export const SystemToast = ({ message, type = "success", onClose }: any) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl z-[200] border ${type === "success" ? "bg-gray-925 border-emerald-500/30" : "bg-gray-925 border-rose-500/30"}`}>
            {type === "success" ? <CheckCircle2 className="text-emerald-500" size={18} /> : <AlertCircle className="text-rose-500" size={18} />}
            <span className="text-sm font-medium text-white">{message}</span>
            <Button variant="ghost" size="icon-xs" onClick={onClose} className="ml-4 text-gray-500 hover:text-white"><X size={14} /></Button>
        </div>
    );
};
