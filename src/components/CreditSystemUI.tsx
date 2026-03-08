import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Zap,
    Gift,
    X,
    ChevronRight,
    Clock,
    ArrowDownLeft,
    CheckCircle2,
    AlertCircle,
    Settings,
    Briefcase,
    History,
    Twitter,
    MessageSquare,
    Link,
    Palette,
    Bell,
    Sparkles,
    Plus
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
                        className="relative w-full max-w-[1200px] h-[85vh] bg-[#0E0E10] border border-[#27272A] rounded-2xl shadow-2xl flex overflow-hidden flex-row"
                    >
                        {/* V3 Sidebar Taxonomy */}
                        <div className="w-64 bg-[#121214] border-r border-[#27272A] py-8 px-4 flex flex-col h-full overflow-y-auto">

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
                        <div className="flex-1 bg-[#0A0A0B] overflow-y-auto relative py-10 px-12">
                            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-[#71717A] bg-[#18181B] border border-[#27272A] hover:bg-[#27272A] hover:text-white hover:border-[#3F3F46] rounded-full transition-all z-10 shadow-md flex items-center justify-center group">
                                <X size={18} className="transition-transform group-hover:rotate-90" />
                            </button>

                            <div className="max-w-4xl">
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


// --- V3 Credits & History Content (Round 22) ---
const CreditsAndHistoryContent = ({ navigateTo }: { navigateTo: (tabId: string) => void }) => {
    const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

    const transactions = [
        { type: 'AI Generation (Canvas)', amount: -3, date: 'Today, 14:02', income: false },
        { type: 'Daily Reset', amount: '+10', date: 'Today, 00:00', income: true, expires: 'In 10 hours' },
        { type: 'Code Export Action', amount: -25, date: 'Mar 1st', income: false },
        { type: 'Top-up Purchase', amount: '+500', date: 'Feb 28th', income: true, expires: 'Never' },
    ];

    const filteredTransactions = transactions.filter(t => {
        if (filter === 'income') return t.income;
        if (filter === 'expense') return !t.income;
        return true;
    });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            {/* Header with separated Plan Status Logic */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-[28px] font-bold text-white mb-2 tracking-tight flex items-center gap-3">
                        Credits & history
                        <span className="bg-white/10 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/5 tracking-wide">
                            Free Plan
                        </span>
                    </h3>
                    <p className="text-[#A1A1AA] text-sm">Monitor your current credit balances and review past transactions.</p>
                </div>
                <button
                    onClick={() => navigateTo('plans')}
                    className="px-5 py-2 min-w-[100px] bg-[#27272A] hover:bg-[#3F3F46] text-white text-xs font-bold rounded-lg transition-colors ring-1 ring-white/10 whitespace-nowrap active:scale-[0.98]">
                    Upgrade Plan
                </button>
            </div>

            {/* Mega Progress Bar & Total Balance */}
            <div className="relative">
                <div className="flex justify-between items-end mb-4">
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-white mb-0.5 tracking-tight">Credits remaining</span>
                        <div className="flex items-baseline gap-1.5 flex-col lg:flex-row lg:items-center">
                            <span className="text-5xl font-extrabold text-white tracking-tight">1,409</span>
                            <span className="text-sm font-medium text-[#71717A] hidden lg:inline-block">available</span>
                        </div>
                    </div>

                    <button
                        onClick={() => navigateTo('plans')}
                        className="px-6 py-2.5 bg-white hover:bg-[#F4F4F5] text-black text-sm font-bold rounded-xl transition-all shadow-sm active:scale-[0.98] whitespace-nowrap flex items-center gap-2 mb-1">
                        <Plus size={16} strokeWidth={2.5} /> Buy Credit
                    </button>
                </div>

                {/* Thick Modern Progress Bar integrating all pools purely visually */}
                <div className="h-6 w-full bg-[#18181b] rounded-md overflow-hidden flex ring-1 ring-inset ring-black/50 border border-white/5">
                    {/* Simulated visual split: Daily (Blue 40%) | Monthly (Purple 0%) | Topup (Green 60%) */}
                    <motion.div initial={{ width: 0 }} animate={{ width: "35%" }} className="h-full bg-blue-500 rounded-l-md border-r-2 border-[#121214]" />
                    {/* Monthly is empty so width is 0 */}
                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} className="h-full bg-emerald-500 rounded-r-md" />
                </div>
                <div className="flex justify-between mt-2 text-[11px] font-medium text-[#71717A] px-1">
                    <span>Usage overview</span>
                    <span className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Daily</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Top-up</span>
                    </span>
                </div>
            </div>

            {/* Allocation Breakdown (Borderless/Glassmorphic structure) */}
            <div>
                <h4 className="text-sm font-bold text-white tracking-tight mb-4 px-1">Allocation Details</h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* 1. Daily Credits */}
                    <div className="bg-white/[0.02] ring-1 ring-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-36 group hover:bg-white/[0.04] hover:ring-white/10 transition-all">
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Daily Limit</span>
                                <span className="text-xs font-bold text-white">4 / <span className="text-[#a1a1aa]">10</span></span>
                            </div>
                            <span className="text-[11px] text-[#71717A]">Resets in 8 hrs (UTC)</span>
                        </div>
                    </div>

                    {/* 2. Monthly Credits */}
                    <div className="bg-white/[0.02] ring-1 ring-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-36 opacity-70 grayscale group hover:grayscale-0 hover:opacity-100 transition-all">
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Monthly Limit</span>
                                <span className="text-xs font-bold text-[#A1A1AA]">0 / 0</span>
                            </div>
                            <span className="text-[11px] text-[#71717A]">Requires Pro plan</span>
                        </div>
                    </div>

                    {/* 3. Top-Up Credits */}
                    <div className="bg-white/[0.02] ring-1 ring-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-36 group hover:bg-white/[0.04] hover:ring-white/10 transition-all">
                        <div>
                            <div className="flex justify-between items-start mb-1.5">
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Top-up</span>
                                <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider">Never expire</div>
                            </div>
                            <span className="text-[11px] text-[#71717A]">Standalone reserve</span>
                        </div>

                        <div className="mt-auto flex items-baseline gap-1.5 relative -bottom-1">
                            <span className="text-[28px] font-bold text-white tracking-tight leading-none">1,405</span>
                            <span className="text-[11px] font-medium text-[#71717A]">remaining</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction History Section (Borderless) */}
            <div className="pt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 px-1">
                    <h4 className="text-base font-bold text-white tracking-tight">Transaction log</h4>

                    {/* Integrated Sleek Segmented Control */}
                    <div className="flex bg-[#18181b] rounded-lg p-1 ring-1 ring-white/5">
                        {(['all', 'income', 'expense'] as const).map(type => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-4 py-1.5 text-[11px] uppercase tracking-wider font-bold rounded-md transition-all ${filter === type
                                    ? 'bg-[#27272A] text-white shadow-sm ring-1 ring-white/10'
                                    : 'text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#27272A]/50'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden bg-white/[0.02] ring-1 ring-white/5">
                    <div className="grid grid-cols-5 px-6 py-4 border-b border-white/5 text-[10px] font-bold text-[#71717A] tracking-widest uppercase mb-1">
                        <div className="col-span-2">Transaction</div>
                        <div>Date</div>
                        <div>Expires</div>
                        <div className="text-right">Amount</div>
                    </div>
                    <div>
                        {filteredTransactions.map((tr, i) => (
                            <div key={i} className="grid grid-cols-5 px-6 py-4 items-center text-sm hover:bg-white/[0.04] transition-colors group cursor-default">
                                <div className="col-span-2 flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${tr.income ? 'bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20' : 'bg-[#27272A] text-[#A1A1AA] group-hover:bg-[#3F3F46]'}`}>
                                        {tr.income ? <ArrowDownLeft size={14} /> : <Zap size={14} fill="currentColor" />}
                                    </div>
                                    <span className="text-[#E4E4E7] font-medium text-sm">{tr.type}</span>
                                </div>
                                <div className="text-[#71717A] text-xs flex items-center gap-1.5 font-medium"><Clock size={12} className="opacity-70" />{tr.date}</div>
                                <div className="text-[#71717A] text-xs font-medium">{tr.expires || <span className="text-[#3F3F46] font-normal">-</span>}</div>
                                <div className={`text-right font-bold text-sm ${tr.income ? 'text-emerald-400' : 'text-white'}`}>{tr.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Documentation Link Relocated */}
                <div className="mt-8 flex justify-center">
                    <button className="text-[11px] font-semibold uppercase tracking-wider text-[#71717A] hover:text-[#A1A1AA] transition-colors flex items-center gap-1.5 cursor-pointer">
                        <AlertCircle size={14} /> How do credits work?
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- V3 Plans & Topup Content ---
const PlansAndTopupContent = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="mb-6">
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">Plans & top-up</h3>
            <p className="text-[#A1A1AA] text-sm">Upgrade your tier or purchase extra standalone credits.</p>
        </div>

        <div className="bg-[#18181b] border border-[#27272A] rounded-2xl p-6 mb-6 flex justify-between items-center">
            <div>
                <h4 className="text-xl font-bold text-white tracking-tight mb-1">You're on Free Plan</h4>
                <p className="text-sm text-[#A1A1AA]">Limited to 10 daily credits with sequential generation speeds.</p>
            </div>
            <button
                onClick={() => document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold rounded-lg transition-colors shadow-sm whitespace-nowrap">
                Upgrade
            </button>
        </div>

        {/* Bottom Row: Pricing Cards */}
        <div id="pricing-cards" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-4">
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
        <div className="border-t border-[#27272A] pt-8 pb-4">
            <h4 className="text-base font-bold text-white mb-2">Buy extra credits (Top-up)</h4>
            <p className="text-sm text-[#A1A1AA] mb-6">Extra credits never expire. Used only when Daily and Monthly allowances are depleted. (100 credits = $1)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-lg">500 Credits</span>
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
                            <span className="font-bold text-white text-lg">1,100 Credits</span>
                            <span className="text-xs text-emerald-400 font-medium">+10% Bonus</span>
                        </div>
                        <span className="font-bold text-white">$10</span>
                    </div>
                    <button className="w-full py-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm mt-auto">Purchase</button>
                </div>

                <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5 flex flex-col transition-colors">
                    <div className="flex justify-between mb-2 flex-1">
                        <div className="flex flex-col">
                            <span className="font-bold text-white text-lg">2,400 Credits</span>
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
    <div className="bg-[#121214] border border-[#27272A] p-8 rounded-2xl flex flex-col h-full ring-1 ring-inset ring-white/5">
        <h3 className="text-xl font-bold text-white mb-2">{tier}</h3>
        <p className="text-sm text-[#A1A1AA] mb-8 h-12 leading-relaxed">{desc}</p>

        <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-extrabold text-white tracking-tight">${price}</span>
            <span className="text-sm text-[#71717A] font-medium">per month</span>
        </div>

        <button className={`w-full py-3 rounded-lg font-bold text-sm transition-colors mb-6 shadow-sm ${primary ? 'bg-[#4F46E5] hover:bg-[#4338CA] text-white' : 'bg-[#27272A] hover:bg-[#3F3F46] text-white'
            }`}>
            {cta}
        </button>

        <div className="w-full bg-[#18181b] border border-[#27272A] rounded-lg px-4 py-3 flex justify-between items-center text-sm text-white mb-8 cursor-pointer hover:bg-[#27272A] transition-colors">
            <span className="font-medium">Credit allocation details</span>
            <ChevronRight size={16} className="text-[#71717A]" />
        </div>

        <div className="flex-1">
            <h5 className="text-sm font-bold text-white mb-4">{featuresHeader}</h5>
            <ul className="space-y-4">
                {features.map((f: any, i: any) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                        <CheckCircle2 size={16} className="text-[#E4E4E7] shrink-0 mt-0.5" /> {f}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);






const EarnFreeCreditsContent = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">Earn Free Credits</h3>
            <p className="text-[#A1A1AA] text-sm">Complete tasks to earn extra generation credits permanently or daily.</p>
        </div>

        <div className="grid gap-4 mt-6">
            <TaskCard
                icon={Twitter}
                title="Follow us on Twitter"
                desc="Follow our official handle to receive a one-time 50 credit bonus."
                reward="+50 Credits"
                action="Follow"
                status="pending"
            />
            <TaskCard
                icon={MessageSquare}
                title="Join our Discord community"
                desc="Chat with other creators and get 50 free credits right away."
                reward="+50 Credits"
                action="Join"
                status="pending"
            />
            <TaskCard
                icon={Link}
                title="Invite a teammate (0/5)"
                desc="Invite your friends. Once they sign up, you both get +10 permanent daily limit."
                reward="+10 Daily Limit"
                action="Copy Link"
                status="progress"
                progress={0}
            />
        </div>
    </div>
);

const TaskCard = ({ icon: Icon, title, desc, reward, action }: any) => (
    <div className="bg-[#18181b] border border-[#27272A] rounded-2xl p-5 flex items-center justify-between group hover:border-[#3F3F46] transition-colors">
        <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-[#27272A] text-[#A1A1AA] flex items-center justify-center shrink-0">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-base font-bold text-white mb-0.5">{title}</h4>
                <p className="text-sm text-[#A1A1AA] max-w-sm">{desc}</p>
            </div>
        </div>
        <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">{reward}</span>
            <button className="px-5 py-2 min-w-[100px] bg-[#27272A] hover:bg-[#3F3F46] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">{action}</button>
        </div>
    </div>
);

const ProfileContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">Profile</h3>
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
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">Preferences</h3>
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
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">Inbox</h3>
            <p className="text-[#A1A1AA] text-sm">Your personal notifications and alerts.</p>
        </div>
        <div className="bg-[#18181b] border border-[#27272A] rounded-2xl divide-y divide-[#27272A]">
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
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div>
            <h3 className="text-[28px] font-bold text-white mb-1 tracking-tight">What's New</h3>
            <p className="text-[#A1A1AA] text-sm">Platform updates, features, and announcements.</p>
        </div>
        <div className="bg-[#18181b] border border-[#27272A] rounded-2xl divide-y divide-[#27272A]">
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