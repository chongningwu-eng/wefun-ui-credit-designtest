import { useState } from "react";
import { Moon, Sun, Bell, Layout, Palette, Globe, Layers } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const PreferencesContent = () => {
    const [theme, setTheme] = useState('dark');
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">Preferences</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Customize your application experience, appearance and notification settings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Appearance Section */}
                <Card className="bg-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                <Palette size={18} />
                            </div>
                            <h4 className="font-bold text-lg">Appearance</h4>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold">Theme Mode</p>
                                    <p className="text-xs text-muted-foreground">Switch between light and dark themes.</p>
                                </div>
                                <div className="flex bg-secondary p-1 rounded-xl gap-1">
                                    <button 
                                        onClick={() => setTheme('light')}
                                        className={`p-2 rounded-lg transition-all ${theme === 'light' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <Sun size={16} />
                                    </button>
                                    <button 
                                        onClick={() => setTheme('dark')}
                                        className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        <Moon size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold">Canvas Layout</p>
                                    <p className="text-xs text-muted-foreground">Default view for your projects.</p>
                                </div>
                                <select className="bg-secondary/50 border border-border rounded-lg text-xs font-bold px-3 py-1.5 focus:outline-none">
                                    <option>Masonry Grid</option>
                                    <option>Fixed Grid</option>
                                    <option>List View</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Notifications Section */}
                <Card className="bg-card border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                                <Bell size={18} />
                            </div>
                            <h4 className="font-bold text-lg">Notifications</h4>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold">Email Notifications</p>
                                    <p className="text-xs text-muted-foreground">Credit balance and feature updates.</p>
                                </div>
                                <button 
                                    onClick={() => setEmailNotifications(!emailNotifications)}
                                    className={`w-10 h-6 rounded-full transition-colors relative ${emailNotifications ? 'bg-primary' : 'bg-secondary'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${emailNotifications ? 'right-1' : 'left-1'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold">App Push</p>
                                    <p className="text-xs text-muted-foreground">Real-time alerts for generation completions.</p>
                                </div>
                                <button 
                                    onClick={() => setPushNotifications(!pushNotifications)}
                                    className={`w-10 h-6 rounded-full transition-colors relative ${pushNotifications ? 'bg-primary' : 'bg-secondary'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pushNotifications ? 'right-1' : 'left-1'}`} />
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Integration & Settings */}
                <Card className="bg-card border-border md:col-span-2">
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <Globe className="text-muted-foreground mt-1" size={20} />
                                <div>
                                    <p className="text-sm font-bold">Interface Language</p>
                                    <p className="text-xs text-muted-foreground mb-3">Choose your primary language.</p>
                                    <button className="text-xs font-bold text-primary hover:underline">Change Language</button>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Layers className="text-muted-foreground mt-1" size={20} />
                                <div>
                                    <p className="text-sm font-bold">Auto-save Intensity</p>
                                    <p className="text-xs text-muted-foreground mb-3">How often we save your canvas.</p>
                                    <button className="text-xs font-bold text-primary hover:underline">Configure Frequency</button>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Layout className="text-muted-foreground mt-1" size={20} />
                                <div>
                                    <p className="text-sm font-bold">Accessibility</p>
                                    <p className="text-xs text-muted-foreground mb-3">Assistive features and high contrast.</p>
                                    <button className="text-xs font-bold text-primary hover:underline">Accessibility Settings</button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
