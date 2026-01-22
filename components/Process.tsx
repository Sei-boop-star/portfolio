import { MessageSquare, Layout, Settings } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: MessageSquare,
            title: "1. ヒアリング",
            desc: "現場の「面倒くさい」をそのまま教えてください。制約条件も確認します。",
        },
        {
            icon: Layout,
            title: "2. 小さく試作",
            desc: "1〜2週間単位で、実際に動くプロトタイプを作成し、認識を合わせます。",
        },
        {
            icon: Settings,
            title: "3. 運用設計",
            desc: "最終確認は人が行うフローを構築。例外処理や責任範囲も明確にします。",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-white">進め方</h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
