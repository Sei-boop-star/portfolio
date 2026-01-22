import { MessageSquare, Layout, Settings } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "1. お話を聞く",
            desc: "現場の「面倒くさい」をそのまま教えてください。社長の「譲れないこだわり」も伺います。",
        },
        {
            icon: Layout,
            title: "2. 小さく試す",
            desc: "1〜2週間で、実際に動く「たたき台」を作成します。机上の空論ではなく、動くもので判断していただきます。",
        },
        {
            icon: Settings,
            title: "3. 運用を整える",
            desc: "スタッフが迷わず使いこなせるまで、手順書の整備や微調整を伴走します。",
        },
    ];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">ご相談の流れ</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-6 pt-8 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-4 text-slate-900 mt-2 text-center">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm text-justify">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
