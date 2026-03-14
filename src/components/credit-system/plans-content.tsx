import { Check, Zap, Sparkles, Crown, ArrowRight, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

export const PlansAndTopupContent = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 pb-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">Plans & Top-up</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">Supercharge your workflow with premium features. Upgrade to a Pro plan for higher limits or top up your credits on demand.</p>
                </div>
                <div className="bg-secondary/50 rounded-xl px-4 py-2 border border-border flex items-center gap-3">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Balance</span>
                    <div className="flex items-center gap-1.5 font-bold text-foreground">
                        <Zap size={14} className="text-amber-500" fill="currentColor" />
                        1,401
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Free Plan */}
                <PlanCard 
                    title="Free"
                    price="$0"
                    description="Perfect for exploring AI possibilities."
                    features={["10 Daily Credits", "Static Canvas", "Community Access", "Standard Export"]}
                    current={true}
                />
                
                {/* Pro Plan */}
                <PlanCard 
                    title="Pro"
                    price="$19"
                    description="For creators needing regular high-quality output."
                    features={["200 Monthly Credits", "Private Canvas", "Prioritized Generation", "Advanced Vector Export", "Cloud Storage (5GB)"]}
                    highlighted={true}
                    icon={Sparkles}
                />

                {/* Studio Plan */}
                <PlanCard 
                    title="Studio"
                    price="$49"
                    description="The ultimate power for professional studios."
                    features={["Unlimited Generations", "Custom AI Training", "Team Collaboration", "API Access", "Priority Support"]}
                    icon={Crown}
                />
            </div>

            <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                        <CreditCard size={18} />
                    </div>
                    <h4 className="font-bold text-lg">One-time Top-up</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { amount: 50, price: "$5", extra: "Basic" },
                        { amount: 150, price: "$12", extra: "Popular", hot: true },
                        { amount: 500, price: "$35", extra: "Value" },
                        { amount: 1200, price: "$75", extra: "Best Deal" }
                    ].map((pack, i) => (
                        <Card key={i} className={cn(
                            "bg-card border-border hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden group",
                            pack.hot && "ring-1 ring-primary"
                        )}>
                            {pack.hot && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">HOT</div>
                                </div>
                            )}
                            <CardContent className="p-5 flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <Zap size={20} fill={pack.hot ? "currentColor" : "none"} />
                                </div>
                                <span className="text-xl font-bold">{pack.amount}</span>
                                <span className="text-xs text-muted-foreground font-medium mb-3">Credits</span>
                                <button className="w-full py-2 bg-secondary group-hover:bg-primary group-hover:text-primary-foreground text-foreground text-xs font-bold rounded-lg transition-all">
                                    Buy for {pack.price}
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PlanCard = ({ title, price, description, features, highlighted, current, icon: Icon }: any) => (
    <Card className={cn(
        "bg-card border-border relative flex flex-col h-full transition-all duration-300",
        highlighted && "border-primary shadow-xl shadow-primary/10 bg-primary/5 z-10"
    )}>
        {highlighted && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 shadow-lg border-none">MOST POPULAR</Badge>
        )}
        <CardHeader className="p-6 pb-2 shrink-0">
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        {Icon ? <Icon size={20} className={highlighted ? "text-primary" : "text-muted-foreground"} /> : <div className="w-5 h-5 border-2 border-dashed border-muted-foreground/20 rounded-full" />}
                    </div>
                    {title}
                </CardTitle>
                {current && <Badge variant="secondary" className="font-bold">CURRENT</Badge>}
            </div>
            <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold tracking-tighter">{price}</span>
                <span className="text-sm text-muted-foreground font-medium">/mo</span>
            </div>
            <CardDescription className="pt-4 text-xs leading-relaxed line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-2 flex-1 flex flex-col justify-between">
            <div className="space-y-4 mb-8 flex-1">
                {features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm">
                        <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                            highlighted ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                        )}>
                            <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-muted-foreground font-medium">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="mt-auto">
                <button className={cn(
                    "w-full py-3.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 group h-12",
                    current 
                        ? "bg-secondary text-muted-foreground cursor-default border border-border" 
                        : highlighted 
                            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                            : "bg-card border border-border hover:bg-secondary text-foreground"
                )}>
                    {current ? "Current Plan" : "Upgrade Plan"}
                    {!current && <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />}
                </button>
            </div>
        </CardContent>
    </Card>
);
