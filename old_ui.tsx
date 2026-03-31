import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// ==========================================
// 0. Nav Credit Balance (Top Bar)
// ==========================================
export const NavCreditBalance = ({ balance, onClick }: any) => {
    return (
        <div onClick={onClick} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#18181B] border border-[#27272A] rounded-lg shadow-sm mr-2 group cursor-pointer hover:bg-[#27272A] transition-colors relative">
            <Zap size={14} className="text-amber-500" fill="currentColor" />
            <span className="text-sm font-bold text-[#E4E4E7]">{balance}</span>
            <span className="text-xs font-medium text-[#71717A] ml-0.5">Credits</span>
        </div>
    );
};

// ==========================================
// 1. Avatar Dropdown (Lovable Mini-Dashboard)
// ==========================================
export const AvatarDropdown = ({ isOpen, onClose, onNavigateToTab }: any) => {
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
                        className="absolute top-14 right-4 w-80 bg-[#121214] border border-[#27272A] rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans"
                    >
                        {/* User Profile Area (Top Block) */}
                        <div className="p-4 flex items-center gap-3 bg-[#18181b]">
                            <div className="w-12 h-12 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white font-bold text-xl shadow-inner">
                                W
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-white tracking-tight">WeFun User</span>
                                <span className="text-xs font-medium text-[#A1A1AA]">user@wefun.ai</span>
                            </div>
                        </div>

                        {/* Quick Actions (Settings & Invite) */}
                        <div className="px-4 py-3 flex gap-2 border-b border-[#27272A] bg-[#18181b]">
                            <button
                                onClick={() => { onClose(); onNavigateToTab('profile'); }}
                                className="w-full flex items-center justify-center gap-2 py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-semibold rounded-lg transition-colors"
                            >
                                <Settings size={14} /> Settings
                            </button>
                        </div>

                        <div className="p-4 space-y-3 bg-[#0E0E10]">
                            {/* Pro Upsell Card */}
                            <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-3 flex items-center justify-between group">
                                <div className="flex items-center gap-2 text-white font-bold tracking-tight">
                                    <Zap size={16} fill="white" /> Turn Pro
                                </div>
                                <button
                                    onClick={() => { onClose(); onNavigateToTab('plans'); }}
                                    className="px-4 py-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                                >
                                    Upgrade
                                </button>
                            </div>

                            {/* Credit Summary Card */}
                            <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-4 flex flex-col gap-3">
                                <div className="flex justify-between items-center cursor-pointer group" onClick={() => { onClose(); onNavigateToTab('plans'); }}>
                                    <span className="text-sm font-bold text-white">Credits</span>
                                    <span className="text-sm font-medium text-amber-500 flex items-center gap-1 group-hover:text-amber-400">
                                        5 left <ChevronRight size={14} />
                                    </span>
                                </div>

                                {/* Slim Blue Progress Bar */}
                                <div className="h-2 w-full bg-[#27272A] rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} className="h-full bg-[#2563EB] rounded-full" />
                                </div>

                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#71717A]"></div>
                                    <span className="text-xs text-[#A1A1AA]">Daily credits reset at midnight UTC</span>
                                </div>
                            </div>
                        </div>

                        {/* Extra Links (Fleshing out Dropdown) */}
                        <div className="p-2 border-t border-[#27272A] bg-[#121214] flex flex-col">
                            <button onClick={() => { onClose(); onNavigateToTab('profile'); }} className="text-left px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-md transition-colors">Profile</button>
                            <button onClick={() => { onClose(); onNavigateToTab('preferences'); }} className="text-left px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-md transition-colors">Preferences</button>
                            <button className="text-left px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#27272A] rounded-md transition-colors mt-1">Log out</button>
                        </div>


                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// ==========================================
// 1b. Inbox Dropdown (Real-time Notifications)
// ==========================================
export const InboxDropdown = ({ isOpen, onClose, onNavigateToTab }: any) => {
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
                        className="absolute top-14 right-20 w-80 bg-[#121214] border border-[#27272A] rounded-2xl shadow-2xl z-[70] overflow-hidden flex flex-col font-sans"
                    >
                        <div className="px-4 py-3 border-b border-[#27272A] bg-[#18181b] flex justify-between items-center">
                            <span className="text-sm font-bold text-white tracking-tight">Notifications</span>
                            <span className="text-[10px] font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded-full">2 New</span>
                        </div>

                        <div className="max-h-[300px] overflow-y-auto">
                            <button onClick={() => { onClose(); onNavigateToTab('whatsnew'); }} className="w-fulltext-left flex flex-col gap-1 p-3 border-b border-[#27272A] hover:bg-[#27272A] transition-colors relative text-left">
                                <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-xs font-bold text-white pl-4">Canvas mode is here!</span>
                                <span className="text-xs text-[#A1A1AA] pl-4 line-clamp-1">Try the new canvas mode for spatial editing...</span>
                                <span className="text-[10px] text-[#71717A] pl-4 mt-1">2 hours ago</span>
                            </button>
                            <button onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full flex-col gap-1 p-3 border-b border-[#27272A] hover:bg-[#27272A] transition-colors relative text-left">
                                <span className="absolute left-3 top-4 w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-xs font-bold text-white pl-4">Your generation completed</span>
                                <span className="text-xs text-[#A1A1AA] pl-4 line-clamp-1">"A red bus driving in the city" is ready.</span>
                                <span className="text-[10px] text-[#71717A] pl-4 mt-1">5 hours ago</span>
                            </button>
                        </div>

                        <button onClick={() => { onClose(); onNavigateToTab('inbox'); }} className="w-full px-4 py-3 text-xs font-semibold text-white bg-[#18181B] hover:bg-[#27272A] transition-colors text-center border-t border-[#27272A]">
                            View all notifications
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
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

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.98, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.98, opacity: 0, y: 10 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full h-full bg-[#0E0E10] flex overflow-hidden flex-row"
                    >
                        {/* V3 Sidebar Taxonomy */}
                        <div className="w-64 bg-[#121214] border-r border-[#27272A] py-8 px-4 flex flex-col h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                            <div className="space-y-6">
                                {/* Section 1: Billing & Credits */}
                                <div>
                                    <div className="text-xs font-semibold text-[#71717A] mb-2 px-2 uppercase tracking-wider">Billing & Credits</div>
                                    <div className="flex flex-col gap-1">
                                        <TabButton id="credits" icon={History} label="Credits & history" active={activeTab} onClick={setActiveTab} />
                                        <TabButton id="plans" icon={Briefcase} label="Plans & top-up" active={activeTab} onClick={setActiveTab} />
                                        <TabButton id="earn" icon={Gift} label="Earn Free Credits" active={activeTab} onClick={setActiveTab} />
                                    </div>
                                </div>

                                {/* Section 2: Account */}
                                <div>
                                    <div className="text-xs font-semibold text-[#71717A] mb-2 px-2 uppercase tracking-wider">Account</div>
                                    <div className="flex flex-col gap-1">
                                        <TabButton id="profile" icon={User} label="Profile" active={activeTab} onClick={setActiveTab} />
                                        <TabButton id="preferences" icon={Settings} label="Preferences" active={activeTab} onClick={setActiveTab} />
                                    </div>
                                </div>

                                {/* Section 3: Notifications */}
                                <div>
                                    <div className="text-xs font-semibold text-[#71717A] mb-2 px-2 uppercase tracking-wider mt-2">Notifications</div>
                                    <div className="flex flex-col gap-1">
                                        <TabButton id="inbox" icon={Bell} label="Inbox" active={activeTab} onClick={setActiveTab} badge={1} />
                                        <TabButton id="whatsnew" icon={Sparkles} label="What's New" active={activeTab} onClick={setActiveTab} badge={1} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 bg-[#0A0A0B] overflow-y-auto relative py-10 px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            <button onClick={onClose} className="absolute top-8 right-12 px-4 py-2 text-[#A1A1AA] hover:text-white bg-[#18181B] border border-[#27272A] hover:bg-[#27272A] hover:border-[#3F3F46] rounded-lg transition-all z-10 shadow-sm flex items-center justify-center gap-2 group text-sm font-semibold">
                                <ArrowDownLeft size={16} className="rotate-90 group-hover:-translate-x-0.5 transition-transform" /> Go Back
                            </button>

                            <div className="max-w-4xl mx-auto flex flex-col justify-start w-full">
                                {activeTab === 'credits' && <CreditsAndHistoryContent navigateTo={setActiveTab} />}
                                {activeTab === 'plans' && <PlansAndTopupContent />}
                                {activeTab === 'earn' && <EarnFreeCreditsContent />}
                                {activeTab === 'profile' && <ProfileContent />}
                                {activeTab === 'preferences' && <PreferencesContent />}
                                {activeTab === 'inbox' && <InboxContent />}
                                {activeTab === 'whatsnew' && <WhatsNewContent />}
                                {/* Placeholders for others */}
                                {(activeTab === 'account' || activeTab === 'people') && (
                                    <div className="text-white">Placeholder for {activeTab} content...</div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const TabButton = ({ id, icon: Icon, label, active, onClick, badge }: any) => {
    const isActive = active === id;
    return (
        <button
            onClick={() => onClick(id)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-[#27272A] text-white' : 'text-[#A1A1AA] hover:bg-[#18181b] hover:text-[#E4E4E7]'
                }`}
        >
            <div className="flex items-center gap-3">
                <Icon size={16} className={isActive ? 'text-white' : 'text-[#71717A]'} />
                {label}
            </div>
            {badge && (
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">{badge}</div>
            )}
        </button>
    );
};


// --- V3 Credits & History Content (Round 24) ---
const CreditsAndHistoryContent = ({ navigateTo }: { navigateTo: (tabId: string) => void }) => {
    const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            {/* Header / Page Title */}
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                    Credits & history
                </h3>
                <p className="text-[#A1A1AA] text-sm">Monitor your current credit balances and review past transactions.</p>
            </div>

            {/* Plan Status Card (Full width) */}
            <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-6 flex flex-col justify-center transition-colors shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex-shrink-0 shadow-inner" />
                        <div>
                            <h4 className="text-base font-semibold text-white mb-0.5">You're on Free Plan</h4>
                            <p className="text-sm text-[#A1A1AA]">Upgrade anytime to unlock higher limits.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigateTo('plans')}
                        className="px-6 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white text-sm font-bold rounded-lg transition-all shadow-[0_4px_20px_-4px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_25px_-4px_rgba(79,70,229,0.5)] active:scale-95 whitespace-nowrap w-full md:w-auto mt-2 md:mt-0">
                        Upgrade
                    </button>
                </div>
                <div className="mt-6 pt-5 border-t border-[#27272A] flex items-center gap-2">
                    <Zap size={16} className="text-amber-500" fill="currentColor" />
                    <p className="text-sm font-medium text-[#A1A1AA]">
                        You currently receive <span className="text-white font-bold">10 free credits</span> daily.
                    </p>
                </div>
            </div>

            {/* Credit Details Layout */}
            <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-6 flex flex-col transition-colors shadow-sm">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <h4 className="text-lg font-bold text-white tracking-tight">Credit Details</h4>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-lg">
                            <Zap size={16} className="text-[#4F46E5]" fill="currentColor" />
                            <span className="text-sm font-bold text-[#E4E4E7]">Total: <span className="text-white text-base">1,405</span></span>
                        </div>
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                        <button
                            onClick={() => navigateTo('earn')}
                            className="flex-1 sm:flex-none px-4 py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-sm font-semibold rounded-lg transition-colors border border-[#3F3F46] shadow-sm active:scale-[0.98]">
                            Earn
                        </button>
                        <button
                            onClick={() => {
                                navigateTo('plans');
                                setTimeout(() => {
                                    document.getElementById('top-up-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 50);
                            }}
                            className="flex-1 sm:flex-none px-4 py-2 bg-[#E4E4E7] hover:bg-white text-black text-sm font-semibold rounded-lg transition-colors shadow-sm active:scale-[0.98]">
                            Buy credits
                        </button>
                    </div>
                </div>

                {/* Sub-cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-y lg:divide-y-0 divide-[#27272A] border border-[#27272A] rounded-lg bg-[#121214]">
                    
                    {/* 1. Daily Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white">Daily</span>
                                <div className="group relative cursor-help">
                                    <div className="w-3.5 h-3.5 rounded-full border border-[#3F3F46] text-[#A1A1AA] flex items-center justify-center text-[9px] hover:bg-[#27272A] hover:text-white transition-colors">
                                        ?
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#27272A] border border-[#3F3F46] rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 shadow-xl pointer-events-none">
                                        <ul className="space-y-1.5 text-xs text-[#A1A1AA] text-left">
                                            <li className="flex items-start gap-1.5"><span className="text-white">鈥?/span> consumed first</li>
                                            <li className="flex items-start gap-1.5"><span className="text-white">鈥?/span> Reset daily (UTC 0)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-white">4 <span className="text-[#A1A1AA]">/ 10</span></span>
                        </div>
                        <span className="text-xs text-[#71717A] mb-4">Resets daily at UTC 0.</span>
                        <div className="h-4 w-full bg-[#27272A] rounded-full overflow-hidden mt-auto shadow-inner">
                            <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} className="h-full bg-blue-500 rounded-full" />
                        </div>
                    </div>

                    {/* 2. Monthly Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-white">Monthly</span>
                                <div className="group relative cursor-help">
                                    <div className="w-3.5 h-3.5 rounded-full border border-[#3F3F46] text-[#A1A1AA] flex items-center justify-center text-[9px] hover:bg-[#27272A] hover:text-white transition-colors">
                                        ?
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#27272A] border border-[#3F3F46] rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 shadow-xl pointer-events-none">
                                        <ul className="space-y-1.5 text-xs text-[#A1A1AA] text-left">
                                            <li className="flex items-start gap-1.5"><span className="text-white">鈥?/span> consumed second</li>
                                            <li className="flex items-start gap-1.5"><span className="text-white">鈥?/span> Pro credits rollover</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-white">0 <span className="text-[#A1A1AA]">/ 0</span></span>
                        </div>
                        <span className="text-xs text-[#71717A] mb-4">Rollover enabled.</span>
                        <div className="h-4 w-full bg-[#27272A] rounded-full overflow-hidden mt-auto shadow-inner">
                            <motion.div initial={{ width: 0 }} animate={{ width: "0%" }} className="h-full bg-purple-500 rounded-full" />
                        </div>
                    </div>

                    {/* 3. Top-up Credits */}
                    <div className="p-5 flex flex-col justify-between h-36 border-t border-transparent transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-white">Top-up</span>
                            <span className="text-sm font-medium text-white">1,401</span>
                        </div>
                        <span className="text-xs text-[#71717A] mb-4">Non-expiring standalone.</span>
                        <div className="h-4 w-full bg-[#27272A] rounded-full overflow-hidden mt-auto shadow-inner">
                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-emerald-500 rounded-full" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Transaction History Section (Paginated) */}
            <div className="pt-4">
                <div className="flex flex-col gap-4 mb-4">
                    <h4 className="text-base font-semibold text-white">Transaction log</h4>

                    {/* Full-width Sleek Segmented Control */}
                    <div className="flex bg-[#18181b] border border-[#27272A] rounded-lg p-1 w-full">
                        {(['all', 'income', 'expense'] as const).map(type => (
                            <button
                                key={type}
                                onClick={() => {
                                    setFilter(type);
                                    setCurrentPage(1); // Reset to first page on filter change
                                }}
                                className={`flex-1 py-2 text-sm capitalize font-medium rounded-md transition-colors border border-solid ${filter === type
                                    ? 'bg-[#27272A] text-white shadow-sm border-[#3F3F46]'
                                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]/50 border-transparent'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-[#18181b] border border-[#27272A] rounded-xl overflow-hidden">
                    <div className="grid grid-cols-4 px-5 py-3 border-b border-[#27272A] text-xs font-medium text-[#71717A] bg-[#121214]">
                        <div className="col-span-2">Description</div>
                        <div>Date</div>
                        <div className="text-right">Amount</div>
                    </div>
                    {/* Fixed height container to prevent scrollbar jumping */}
                    <div className="divide-y divide-[#27272A] min-h-[310px]">
                        {currentTransactions.map((tr) => (
                            <div key={tr.id} className={`grid grid-cols-4 px-5 py-3.5 items-center text-sm hover:bg-[#27272A]/30 transition-colors`}>
                                <div className="col-span-2 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${tr.income ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-[#27272A] border-[#3F3F46] text-[#A1A1AA]'}`}>
                                        {tr.income ? <ArrowDownLeft size={14} strokeWidth={2.5} /> : <Zap size={14} fill="currentColor" />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[#E4E4E7] font-medium text-sm">{tr.type}</span>
                                        {tr.expires && <span className="text-[11px] text-[#71717A]">{tr.expires}</span>}
                                    </div>
                                </div>
                                <div className="text-[#A1A1AA] text-xs font-medium">{tr.date}</div>
                                <div className={`text-right font-medium text-sm ${tr.income ? 'text-emerald-400' : 'text-white'}`}>{tr.amount}</div>
                            </div>
                        ))}
                        {currentTransactions.length === 0 && (
                            <div className="px-5 py-8 text-center text-sm text-[#71717A]">
                                No transactions found.
                            </div>
                        )}
                    </div>

                    {/* Pagination Footer */}
                    {filteredTransactions.length > 0 && (
                        <div className="px-5 py-3 border-t border-[#27272A] flex justify-between items-center bg-[#121214]">
                            <span className="text-xs text-[#71717A]">
                                Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredTransactions.length)} of {filteredTransactions.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1.5 text-xs text-[#A1A1AA] hover:text-white bg-[#18181b] border border-[#27272A] hover:border-[#3F3F46] rounded-md disabled:opacity-50 disabled:pointer-events-none transition-colors">
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1.5 text-xs text-[#A1A1AA] hover:text-white bg-[#18181b] border border-[#27272A] hover:border-[#3F3F46] rounded-md disabled:opacity-50 disabled:pointer-events-none transition-colors">
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- V3 Plans & Topup Content ---
const PlansAndTopupContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Plans & top-up</h3>
            <p className="text-[#A1A1AA] text-sm">Upgrade your tier or purchase extra standalone credits.</p>
        </div>

        <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-6 flex justify-between items-center">
            <div>
                <h4 className="text-xl font-bold text-white tracking-tight mb-1">You're on Free Plan</h4>
                <p className="text-sm text-[#A1A1AA]">Limited to 10 daily credits with sequential generation speeds.</p>
            </div>
        </div>

        {/* Bottom Row: Pricing Cards */}
        <div id="pricing-cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            {/* FREE Card */}
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

            {/* PRO Card */}
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

        {/* Top-Up Section (Non-Subscription Credit Packs) */}
        <div id="top-up-section" className="border-t border-[#27272A] pt-8 pb-4 scroll-mt-6">
            <h4 className="text-base font-bold text-white mb-2">Buy extra credits (Top-up)</h4>
            <p className="text-sm text-[#A1A1AA] mb-6">Extra credits never expire. Used only when Daily and Monthly allowances are depleted. (100 credits = $1)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">500 Credits</span>
                            {/* Empty spacer to align with other cards that have bonus text */}
                            <span className="text-xs text-transparent font-medium select-none" aria-hidden="true">+0% Bonus</span>
                        </div>
                        <span className="font-bold text-[#A1A1AA]">$5</span>
                    </div>
                    <button className="w-full py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-semibold rounded-lg transition-colors mt-auto">Purchase</button>
                </div>

                <div className="bg-[#121214] border border-[#4F46E5]/30 rounded-xl p-5 relative flex flex-col transition-colors">
                    <div className="absolute -top-2.5 right-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-lg">Popular</div>
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">1,100 Credits</span>
                            <span className="text-xs text-emerald-400 font-medium">+10% Bonus</span>
                        </div>
                        <span className="font-bold text-white">$10</span>
                    </div>
                    <button className="w-full py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm mt-auto">Purchase</button>
                </div>

                <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-white text-lg">2,400 Credits</span>
                            <span className="text-xs text-emerald-400 font-medium">+20% Bonus</span>
                        </div>
                        <span className="font-bold text-[#A1A1AA]">$20</span>
                    </div>
                    <button className="w-full py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-semibold rounded-lg transition-colors mt-auto">Purchase</button>
                </div>
            </div>

            {/* Custom Amount */}
            <div className="mt-4 bg-[#121214] border border-[#27272A] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="font-bold text-white text-sm">Custom Amount</span>
                    <span className="text-xs text-[#A1A1AA]">Need a specific amount? (100 credits = $1.00)</span>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-40">
                        <input
                            type="number"
                            placeholder="e.g. 5000"
                            className="w-full bg-[#18181b] border border-[#3F3F46] focus:border-[#4F46E5] outline-none text-white text-sm rounded-lg pl-3 pr-4 py-2 transition-colors"
                            min="100"
                            step="100"
                        />
                    </div>
                    <button className="px-5 py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                        Purchase
                    </button>
                </div>
            </div>

        </div>
    </div>
);

const PricingCard = ({ tier, desc, price, cta, featuresHeader, features, primary = false }: any) => (
    <div className={`relative bg-[#18181b] p-8 rounded-xl flex flex-col h-full transition-all ${
        primary 
            ? 'border-2 border-[#10B981] shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.3)] z-10'
            : 'border border-[#27272A] ring-1 ring-inset ring-white/5'
    }`}>
        {primary && (
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FCD34D] text-[#121214] text-[10px] font-bold px-3 py-1 rounded-md shadow-md whitespace-nowrap uppercase tracking-widest border border-[#F59E0B]">
                 Most Popular
             </div>
        )}
        <h3 className={`text-xl font-bold text-white mb-2`}>{tier}</h3>
        <p className="text-sm text-[#A1A1AA] mb-8 h-12 leading-relaxed">{desc}</p>

        <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-heading font-extrabold tracking-tight text-white mb-1">
                ${price} 
            </span>
            <span className="text-sm text-[#71717A] font-medium block">per month</span>
        </div>

        <button className={`w-full py-3 font-bold text-sm transition-all mb-6 shadow-sm ${
            primary 
                ? 'bg-[#10B981] hover:bg-[#059669] text-[#121214] rounded-lg active:scale-[0.98]' // Retro green blocky button
                : 'bg-[#27272A] hover:bg-[#3F3F46] text-white rounded-lg active:scale-[0.98]'
            }`}>
            {cta}
        </button>

        <div className={`flex-1 ${primary ? 'bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5 -mx-3' : ''}`}>
            <h5 className="text-sm font-bold text-white mb-4">{featuresHeader}</h5>
            <ul className="space-y-4">
                {features.map((f: any, i: any) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                        <CheckCircle2 size={16} className={`${primary ? 'text-[#10B981]' : 'text-[#E4E4E7]'} shrink-0 mt-0.5`} /> 
                        <span className={primary && i < 2 ? 'text-white font-medium' : ''}>{f}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);




// ==========================================
// Referral List Modal Component
// ==========================================
const ReferralListModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    // Mock data for referrals
    const referrals = [
        { id: 1, name: 'Alex M.', email: 'alex.m@abc.com', status: 'converted', date: '2024-03-10' },
        { id: 2, name: 'Sarah J.', email: 's.jones@xyz.net', status: 'converted', date: '2024-03-08' },
        { id: 3, name: 'Michael T.', email: 'm.tech@startup.io', status: 'registered', date: '2024-03-05' },
        { id: 4, name: 'Emma W.', email: 'emma@design.co', status: 'registered', date: '2024-03-01' },
        { id: 5, name: 'David L.', email: 'david.l@hello.com', status: 'converted', date: '2024-02-28' },
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0b] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="px-6 py-5 border-b border-[#27272A] flex justify-between items-center bg-[#121214] shrink-0">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Users className="text-[#A1A1AA]" size={20} />
                                    Your Referrals
                                </h3>
                                <p className="text-sm text-[#A1A1AA] mt-1">Track your invites and successful conversions.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-[#A1A1AA] hover:text-white transition-colors p-2 rounded-lg hover:bg-[#27272A]"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-[#27272A] scrollbar-track-transparent">
                            <div className="space-y-3">
                                {referrals.map((ref) => (
                                    <div key={ref.id} className="flex flex-wrap items-center justify-between p-4 bg-[#18181b] border border-[#27272A] rounded-xl hover:border-[#3F3F46] transition-colors gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#27272A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                                                {ref.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white">{ref.name}</h4>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-6 ml-auto">
                                            <span className="text-xs text-[#71717A] whitespace-nowrap">{ref.date}</span>
                                            
                                            <div className="w-[130px] flex justify-end">
                                                {ref.status === 'converted' ? (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#5FA08E] bg-[#5FA08E]/10 rounded-md border border-[#5FA08E]/20">
                                                        <CreditCard size={12} strokeWidth={2.5} />
                                                        Pro Subscriber
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#A1A1AA] bg-[#27272A] rounded-md border border-[#3F3F46]">
                                                        <User size={12} strokeWidth={2.5} />
                                                        Registered
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const EarnFreeCreditsContent = () => {
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

    // Muted color palette (Desaturated)
    const colors = {
        emerald: 'text-[#5FA08E]', // Muted Emerald
        emeraldBg: 'bg-[#5FA08E]',
        emeraldBorder: 'border-[#5FA08E]/20',
        emeraldGlow: 'shadow-[#5FA08E]/10',

        indigo: 'text-[#6D77B2]', // Muted Indigo
        indigoBg: 'bg-[#6D77B2]',

        purple: 'text-[#8C76A5]', // Muted Purple
        purpleBg: 'bg-[#8C76A5]',

        orange: 'text-[#B28A6D]', // Muted Orange
        orangeBg: 'bg-[#B28A6D]'
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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div>
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Earn Free Credits</h3>
                <p className="text-[#A1A1AA] text-sm font-sans leading-relaxed">Complete tasks to earn extra generation credits permanently or daily.</p>
            </div>

            {/* 1. Daily Missions */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <span className={`w-8 h-8 rounded-lg ${colors.indigoBg}/10 ${colors.indigo} flex items-center justify-center`}>
                        <Calendar size={18} />
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Daily Missions</h4>
                    <span className="ml-auto text-xs text-[#A1A1AA] font-sans flex items-center gap-1.5">
                        <Clock size={14} /> Resets in 5h 22m
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Check-in Card (Daily) */}
                    <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-5 transition-all group flex flex-col justify-between h-44">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-base font-bold text-white mb-1">Daily Check-in</h4>
                                <p className="text-xs text-[#A1A1AA] font-sans">Claim your daily bonus and build your streak.</p>
                            </div>
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+5</span>
                        </div>

                        <div className="flex gap-2.5 my-4">
                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                                <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
                                    <div className={`w-full h-1.5 rounded-full ${day < checkInDay || (day === checkInDay && isCheckInClaimed) ? colors.emeraldBg : 'bg-[#27272A]'}`} />
                                    <span className={`text-[10px] font-bold font-heading ${day < checkInDay || (day === checkInDay && isCheckInClaimed) ? colors.emerald : 'text-[#71717A]'}`}>D{day}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleCheckIn}
                            className={`w-full py-2 text-xs font-bold rounded-lg transition-all shadow-lg active:scale-[0.98] ${isCheckInClaimed
                                ? 'bg-[#27272A] text-[#71717A] cursor-default border border-[#3F3F46]'
                                : `${colors.emeraldBg} text-white ${colors.emeraldGlow}`
                                }`}
                        >
                            {isCheckInClaimed ? `Claimed (Day ${checkInDay})` : `Claim Day ${checkInDay}`}
                        </button>
                    </div>

                    {/* Public Post Card (Daily) */}
                    <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-5 transition-all group flex flex-col h-44">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h4 className="text-base font-bold text-white mb-1">Community First</h4>
                                <p className="text-xs text-[#A1A1AA] font-sans">Set your first project of the day to "Public".</p>
                            </div>
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+10</span>
                        </div>

                        <div className="mt-auto">
                            <button className="px-5 py-2 w-full bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-bold rounded-lg transition-colors border border-[#3F3F46] active:scale-[0.98]">
                                Go to Project
                            </button>
                        </div>
                    </div>
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

                <div className="space-y-4">

                    {/* Invite Registration */}
                    <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-5 flex items-center justify-between group transition-colors relative overflow-hidden">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-[#A1A1AA] group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <Users size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Invite Teammates <span className="text-[#71717A] text-sm font-normal ml-1">({Math.min(totalInvited, 10)}/10)</span></h4>
                                <p className="text-sm text-[#A1A1AA] font-sans">Points for every friend who signs up.</p>
                                <div className="mt-2 text-[10px] font-bold text-[#71717A] font-heading uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className={colors.purple}>{Math.min(totalInvited, 10)}</span> Total Invited</span>
                                    {unclaimedInvites > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-[#3F3F46]" />
                                            <span className="text-amber-500/70">{unclaimedInvites} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+10<span className="text-[10px] opacity-60 ml-0.5">/each</span></span>
                            <div className="w-[100px] flex justify-end">
                                    <button 
                                    onClick={() => {
                                        if (unclaimedInvites > 0) {
                                            setUnclaimedInvites(0);
                                        }
                                    }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        unclaimedInvites > 0 
                                        ? 'bg-[#5FA08E] hover:bg-[#4d8675] text-white border-[#5FA08E]/20 shadow-lg shadow-[#5FA08E]/10' 
                                        : totalInvited >= 10
                                        ? 'bg-[#27272A] text-[#71717A] border-[#3F3F46] cursor-default'
                                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                                    }`}>
                                    {unclaimedInvites > 0 ? 'Claim' : totalInvited >= 10 ? 'Claimed' : 'Copy Link'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Invite Subscription */}
                    <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-5 flex items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-[#A1A1AA] group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <CreditCard size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Success Conversion</h4>
                                <p className="text-sm text-[#A1A1AA] font-sans">Bonus when friends subscribe to Pro.</p>
                                <div className="mt-2 text-[10px] font-bold text-[#71717A] font-heading uppercase tracking-tighter flex items-center gap-2">
                                    <span><span className={colors.orange}>{totalConverted}</span> Total Converted</span>
                                    {unclaimedConversions > 0 && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-[#3F3F46]" />
                                            <span className="text-amber-500/70">{unclaimedConversions} Unclaimed</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+500</span>
                            <div className="w-[100px] flex justify-end">
                                <button 
                                    onClick={() => {
                                        if (unclaimedConversions > 0) {
                                            setUnclaimedConversions(0);
                                        } else {
                                            setIsReferralModalOpen(true);
                                        }
                                    }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        unclaimedConversions > 0 
                                        ? 'bg-[#5FA08E] hover:bg-[#4d8675] text-white border-[#5FA08E]/20 shadow-lg shadow-[#5FA08E]/10' 
                                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                                    }`}
                                >
                                    {unclaimedConversions > 0 ? 'Claim' : 'View'}
                                </button>
                            </div>
                        </div>
                    </div>
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

                <div className="space-y-4">
                    {/* Join Community Task */}
                    <div className="bg-[#18181b] border border-[#27272A] rounded-xl p-5 flex items-center justify-between group transition-colors">
                        <div className="flex gap-5 items-center">
                            <div className={`w-12 h-12 rounded-xl bg-transparent flex items-center justify-center shrink-0 border border-white/10 text-[#A1A1AA] group-hover:text-white group-hover:border-white/20 transition-colors`}>
                                <MessageSquare size={22} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-base font-bold text-white mb-0.5">Join Community</h4>
                                <p className="text-sm text-[#A1A1AA] font-sans">Chat with creators and get 50 credits.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className={`text-sm font-heading font-bold ${colors.emerald}`}>+50</span>
                            <div className="w-[100px] flex justify-end">
                                <button 
                                    onClick={() => {
                                        if (communityState === 'join') setCommunityState('claim');
                                        else if (communityState === 'claim') setCommunityState('claimed');
                                    }}
                                    className={`px-0 py-2 w-full text-sm font-bold rounded-lg transition-all border active:scale-[0.98] ${
                                        communityState === 'claim' 
                                        ? 'bg-[#5FA08E] hover:bg-[#4d8675] text-white border-[#5FA08E]/20 shadow-lg shadow-[#5FA08E]/10' 
                                        : communityState === 'claimed'
                                        ? 'bg-[#27272A] text-[#71717A] border-[#3F3F46]'
                                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                                    }`}>
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



const ProfileContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Profile</h3>
            <p className="text-[#A1A1AA] text-sm">Manage your personal information and identity.</p>
        </div>
        <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-4xl font-bold shadow-xl border-4 border-[#121214] ring-1 ring-[#27272A]">W</div>
            <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-sm font-semibold rounded-lg transition-colors">Upload Avatar</button>
                <button className="px-4 py-2 text-[#rose-500] hover:bg-rose-500/10 text-rose-500 text-sm font-semibold rounded-lg transition-colors">Remove</button>
            </div>
        </div>
        <div className="grid gap-4 max-w-md">
            <div>
                <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2 block">Display Name</label>
                <input type="text" defaultValue="WeFun User" className="w-full bg-[#121214] border border-[#27272A] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#4F46E5]" />
            </div>
            <div>
                <label className="text-xs font-bold text-[#A1A1AA] uppercase tracking-wider mb-2 block">Email Address</label>
                <input type="email" defaultValue="user@wefun.ai" disabled className="w-full bg-[#121214] border border-[#27272A] rounded-lg p-3 text-sm text-[#71717A] cursor-not-allowed opacity-50" />
            </div>
        </div>
        <button className="px-6 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-bold rounded-lg transition-colors shadow-sm">Save Changes</button>
    </div>
);

const PreferencesContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Preferences</h3>
            <p className="text-[#A1A1AA] text-sm">Customize your application experience.</p>
        </div>

        <div className="max-w-xl space-y-6">
            <div className="flex items-center justify-between bg-[#18181b] border border-[#27272A] p-5 rounded-xl">
                <div>
                    <h4 className="text-base font-bold text-white mb-1">Theme</h4>
                    <p className="text-sm text-[#A1A1AA]">Select your preferred color scheme.</p>
                </div>
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-lg bg-[#27272A] border-2 border-[#4F46E5] flex items-center justify-center text-white"><Palette size={16} /></button>
                </div>
            </div>

            <div className="flex items-center justify-between bg-[#18181b] border border-[#27272A] p-5 rounded-xl">
                <div>
                    <h4 className="text-base font-bold text-white mb-1">Email Notifications</h4>
                    <p className="text-sm text-[#A1A1AA]">Receive updates on new features and credit usage.</p>
                </div>
                <div className="w-10 h-6 bg-[#4F46E5] rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                </div>
            </div>
        </div>
    </div>
);

// ==========================================
// 3. Inbox and Whats New Content Components
// ==========================================
const InboxContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Inbox</h3>
            <p className="text-[#A1A1AA] text-sm">Your personal notifications and alerts.</p>
        </div>
        <div className="bg-[#18181b] border border-[#27272A] rounded-xl divide-y divide-[#27272A]">
            <div className="p-5 flex gap-4 hover:bg-[#27272A] transition-colors relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Your generation completed <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-wider">New</span></h4>
                    <p className="text-sm text-[#A1A1AA] mb-2">"A red bus driving in the city" has successfully finished generating. Check your gallery.</p>
                    <span className="text-xs text-[#71717A]">5 hours ago</span>
                </div>
            </div>
            <div className="p-5 flex gap-4 hover:bg-[#27272A] transition-colors relative">
                <div className="w-10 h-10 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center shrink-0">
                    <Zap size={18} fill="currentColor" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Credits Refilled</h4>
                    <p className="text-sm text-[#A1A1AA] mb-2">Your daily allowance of 10 free credits has been renewed.</p>
                    <span className="text-xs text-[#71717A]">1 day ago</span>
                </div>
            </div>
        </div>
    </div>
);

const WhatsNewContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
        <div>
            <h3 className="text-2xl font-semibold text-white mb-2">What's New</h3>
            <p className="text-[#A1A1AA] text-sm">Platform updates, features, and announcements.</p>
        </div>
        <div className="bg-[#18181b] border border-[#27272A] rounded-xl divide-y divide-[#27272A]">
            <div className="p-5 flex gap-4 hover:bg-[#27272A] transition-colors relative cursor-pointer">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                    <Sparkles size={24} className="text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Canvas mode is here! <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-wider">New</span></h4>
                    <p className="text-sm text-[#A1A1AA] mb-3">Try the new canvas mode for spatial editing. Drag, drop, and link AI generations seamlessly onto an infinite workspace.</p>
                    <button className="text-sm font-bold text-[#4F46E5] hover:text-[#4338CA]">Read full release notes &rarr;</button>
                </div>
            </div>
        </div>
    </div>
);


// ==========================================
// 4. Inline Chat Warning (Movable to Top/Bottom in App.tsx)
// ==========================================
export const InlineChatWarning = ({ onUpgrade, onClose, text, buttonText }: any) => {
    return (
        <div className="px-4 py-3 flex items-center justify-between bg-[#1A1A1A] border-b border-[#3F3F46]">
            <span className="text-sm text-white font-medium tracking-tight">
                {text || "0 free credits remaining"}
            </span>
            <div className="flex items-center gap-2">
                <button onClick={onUpgrade} className="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold rounded-lg transition-colors shadow-sm flex items-center justify-center">
                    {buttonText || "Add credits"}
                </button>
                <button onClick={onClose} className="p-1 text-[#A1A1AA] hover:bg-[#27272A] hover:text-white rounded-md transition-colors"><X size={16} /></button>
            </div>
        </div>
    );
};

// ==========================================
// 4. Mini Upgrade Modal (Triggered by Chat Warning)
// ==========================================
export const MiniUpgradeModal = ({ isOpen, onClose, onNavigateToPlans }: any) => {
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
                        className="relative w-full max-w-sm bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden p-6 text-center flex flex-col items-center"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 text-[#71717A] hover:bg-[#27272A] hover:text-white rounded-md transition-colors">
                            <X size={16} />
                        </button>

                        <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mb-4 border border-indigo-500/30">
                            <Zap size={24} fill="currentColor" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">Out of Credits</h3>
                        <p className="text-sm text-[#A1A1AA] mb-6">You've reached your daily limit for generations. Upgrade to a Pro plan for more credits and faster speeds.</p>

                        <div className="flex w-full gap-3">
                            <button onClick={onClose} className="flex-1 py-2 bg-[#27272A] hover:bg-[#3F3F46] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                                Dismiss
                            </button>
                            <button onClick={() => { onClose(); onNavigateToPlans(); }} className="flex-1 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
                                View Plans
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


export const SystemToast = ({ message, type = "success", onClose }: any) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl z-[200] border ${type === "success" ? "bg-[#0E0E10] border-emerald-500/30" : "bg-[#0E0E10] border-rose-500/30"
                }`}
        >
            {type === "success" ? <CheckCircle2 className="text-emerald-500" size={18} /> : <AlertCircle className="text-rose-500" size={18} />}
            <span className="text-sm font-medium text-white">{message}</span>
            <button onClick={onClose} className="ml-4 text-[#71717A] hover:text-white"><X size={14} /></button>
        </motion.div>
    );
};
