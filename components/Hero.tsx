import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"></span>
                        中小企業・個人事業主 / 現場業務特化
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6 text-slate-900">
                        現場の曖昧さを
                        <br className="hidden md:block" />
                        “回る業務”に翻訳し、
                        <br />
                        <span className="text-[hsl(var(--primary))]">生成AI</span>で処理速度を上げます。
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        手作業の転記や整理を自動化し、本業に集中できる環境を作ります。<br className="hidden md:block" />
                        AIの出力は必ず人が確認する「安心設計」で運用します。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-[hsl(var(--primary))] px-8 text-base font-medium text-white shadow-lg transition-transform hover:scale-105"
                        >
                            まずは相談する
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="#cases"
                            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-200 px-8 text-base font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                        >
                            事例を見る
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
                        {[
                            "業務整理→標準化（手順・FAQ）",
                            "現場が使えるAI運用設計",
                            "軽量自動化で手作業削減",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--primary))] shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-xs text-slate-400">
                        ※AI単独での納品は行いません。事実確認・前提整合は必ず人が行います。
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>
        </section>
    );
}
