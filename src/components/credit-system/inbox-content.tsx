import { Search, MoreHorizontal, Inbox, Star, Archive, Trash2, Send } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

export const InboxContent = () => {
    const messages = [
        { id: 1, sender: "System", title: "Welcome to WeFun 2.0!", preview: "We're excited to have you here. Explore the new design and features...", date: "2h ago", unread: true, category: "Announcements" },
        { id: 2, sender: "Credits", title: "Credit Recharge Successful", preview: "Your purchase of 500 credits has been processed successfully.", date: "Today, 10:30", unread: false, category: "Billing" },
        { id: 3, sender: "Team", title: "New Collaboration Feature", preview: "You can now invite your team members to your canvas. Try it out!", date: "Yesterday", unread: false, category: "Update" }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2 mt-2 tracking-tight">Inbox</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Stay updated with the latest messages, notifications, and system alerts.</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative group">
                        <Search className="absolute left-3 top-2.5 text-muted-foreground group-hover:text-foreground transition-colors" size={16} />
                        <input 
                            type="text" 
                            placeholder="Search messages..." 
                            className="bg-secondary/50 border border-border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Sidebar Filters */}
                <div className="w-full md:w-48 space-y-1">
                    <InboxFilter icon={Inbox} label="All Inbox" active count={1} />
                    <InboxFilter icon={Star} label="Starred" />
                    <InboxFilter icon={Archive} label="Archived" />
                    <InboxFilter icon={Send} label="Sent" />
                    <InboxFilter icon={Trash2} label="Trash" />
                </div>

                {/* Right: Messages List */}
                <div className="flex-1 space-y-3">
                    {messages.map((msg) => (
                        <Card key={msg.id} className={cn(
                            "bg-card border-border hover:bg-secondary/30 transition-all cursor-pointer group relative overflow-hidden",
                            msg.unread && "border-primary/30 shadow-sm"
                        )}>
                            {msg.unread && (
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary" />
                            )}
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="flex items-center gap-2">
                                        <span className={cn("text-sm font-bold", msg.unread ? "text-foreground" : "text-muted-foreground")}>
                                            {msg.sender}
                                        </span>
                                        <Badge variant="secondary" className="text-[10px] py-0 px-1.5 h-4 font-bold uppercase tracking-tighter">
                                            {msg.category}
                                        </Badge>
                                    </div>
                                    <span className="text-xs text-muted-foreground font-medium">{msg.date}</span>
                                </div>
                                <h4 className={cn("text-sm font-bold mb-1", msg.unread ? "text-foreground" : "text-muted-foreground/80")}>
                                    {msg.title}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-1 leading-relaxed">
                                    {msg.preview}
                                </p>
                                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreHorizontal size={16} className="text-muted-foreground hover:text-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

const InboxFilter = ({ icon: Icon, label, active, count }: any) => (
    <button className={cn(
        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all",
        active ? "bg-secondary text-foreground font-bold shadow-sm" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
    )}>
        <div className="flex items-center gap-3">
            <Icon size={16} className={active ? "text-primary" : "text-muted-foreground"} />
            {label}
        </div>
        {count && (
            <span className="text-[10px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">{count}</span>
        )}
    </button>
);
