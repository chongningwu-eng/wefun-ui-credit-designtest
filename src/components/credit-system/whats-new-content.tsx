import { Sparkles, Calendar, ArrowRight, Zap, Target, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export const WhatsNewContent = () => {
    const updates = [
        { 
            id: 1, 
            version: "v2.1.0", 
            date: "March 12, 2026", 
            title: "Advanced Vector Export", 
            description: "You can now export your canvas directly to SVG and PDF formats with full vector support.",
            type: "New Feature",
            details: ["Perfect 1:1 vector reproduction", "Support for layered exports", "Optimized file sizes"]
        },
        { 
            id: 2, 
            version: "v2.0.8", 
            date: "March 8, 2026", 
            title: "Performance Boost", 
            description: "We've optimized the rendering engine. Large projects with 100+ AI generations now load 40% faster.",
            type: "Optimization",
            details: ["GPU-accelerated rendering", "Lazy loading for off-screen assets", "Reduced memory footprint"]
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2 mt-2 tracking-tight">What's New</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Discover the latest features, improvements, and updates to the WeFun platform.</p>
                </div>
                <div className="bg-primary/10 text-primary border border-primary/20 rounded-xl px-4 py-2 flex items-center gap-2">
                    <Sparkles size={16} fill="currentColor" />
                    <span className="text-sm font-bold">Latest: v2.1.0</span>
                </div>
            </div>

            <div className="space-y-10 mt-6 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-secondary">
                {updates.map((update) => (
                    <div key={update.id} className="relative pl-12">
                        {/* Timeline Marker */}
                        <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20 z-10">
                            <Target size={18} className="text-primary" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5 uppercase tracking-widest">
                                    <Calendar size={14} />
                                    {update.date}
                                </span>
                                <Badge variant="secondary" className="font-bold text-[10px] uppercase">{update.type}</Badge>
                            </div>

                            <Card className="bg-card border-border hover:border-primary/30 transition-all overflow-hidden">
                                <CardContent className="p-6">
                                    <h4 className="text-xl font-bold text-foreground mb-3">{update.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                        {update.description}
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {update.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {detail}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                                        <button className="text-xs font-bold text-primary flex items-center gap-1 group">
                                            Read Full Release Notes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                                            <Star size={10} fill="currentColor" />
                                            Build {update.version}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="pt-10 flex justify-center">
                <button className="px-6 py-3 bg-secondary hover:bg-accent text-foreground text-sm font-bold rounded-xl transition-all border border-border flex items-center gap-2">
                    <Zap size={16} /> View Changelog
                </button>
            </div>
        </div>
    );
};
