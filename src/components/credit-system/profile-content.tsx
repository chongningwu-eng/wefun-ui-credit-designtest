import { Camera, Shield, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export const ProfileContent = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">Profile</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Manage your personal information, avatar and account security.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Avatar Section */}
                <Card className="bg-card border-border overflow-hidden shrink-0">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="relative group cursor-pointer">
                            <Avatar className="w-32 h-32 border-4 border-background ring-1 ring-border shadow-xl">
                                <AvatarImage src="" />
                                <AvatarFallback className="bg-primary text-primary-foreground text-4xl font-bold">W</AvatarFallback>
                            </Avatar>
                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white" size={24} />
                            </div>
                        </div>
                        <h4 className="mt-4 font-bold text-lg">WeFun User</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">Free Plan</p>
                        <Badge variant="secondary" className="mt-3 text-[10px] font-bold uppercase tracking-tighter">Verified Member</Badge>
                    </CardContent>
                </Card>

                {/* Right: Form Section */}
                <div className="flex-1 space-y-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Display Name</label>
                            <input 
                                type="text" 
                                defaultValue="WeFun User" 
                                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    defaultValue="user@wefun.ai" 
                                    readOnly
                                    className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-2.5 text-sm text-muted-foreground cursor-not-allowed pr-10"
                                />
                                <Shield className="absolute right-3 top-2.5 text-emerald-500/50" size={16} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Role</label>
                            <input 
                                type="text" 
                                defaultValue="Creator" 
                                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Timezone</label>
                            <select className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                                <option>UTC+8 (Shanghai)</option>
                                <option>UTC-8 (Pacific)</option>
                                <option>UTC+0 (London)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                        <button className="px-5 py-2 text-sm font-semibold rounded-lg text-foreground hover:bg-secondary transition-colors">Cancel</button>
                        <button className="px-5 py-2 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center gap-2">
                            <Check size={16} /> Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
