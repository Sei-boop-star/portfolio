import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-slate-50"></div>
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse"></div>
                <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse delay-75"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold tracking-wider uppercase mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        For SMB & Solo Founders
                    </div>

                    {/* H1 */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8 text-slate-900 text-balance animate-fade-in-up delay-100">
                        「社長の頭の中」を、
                        <br className="hidden md:block" />
                        現場が迷わず動ける
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">“仕組み”</span>に変える。
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        口頭指示・メモ・暗黙の判断を、手順・チェック・文章に落とし、
                        <span className="font-bold text-slate-800">生成AIで回転数を上げます。</span><br />
                        難しいIT用語は使いません。「事故が起きない運用」まで設計します。
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-300">
                        <Link
                            href="#contact"
                            className="group w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-10 text-base font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
                        >
                            まずは相談する
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Trust Points */}
                    <div className="grid sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto animate-fade-in-up delay-300">
                        {[
                            "業務整理→標準化（手順・FAQ）",
                            "現場が使えるAI運用設計",
                            "軽量自動化で手作業削減",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/60 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-bold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
