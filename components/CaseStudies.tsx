import { ArrowRight, CheckCircle2, FileText, Upload } from "lucide-react";

export default function CaseStudies() {
    return (
        <section id="cases" className="py-32 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        「現場がどう変わるか」
                    </h2>
                    <p className="text-slate-600 font-medium">代表的な2つの改善事例です。</p>
                </div>

                <div className="space-y-16">
                    {/* Case 1: 納品書 */}
                    <CaseCard
                        badge="経理・事務"
                        title="納品書PDF抽出の自動化"
                        beforeText="毎月100件のPDFを目視確認。ミスがあれば修正に1時間、心理的負担も大。"
                        afterText="AIが項目を自動転記し、人は「最終確認ボタン」を押すだけ。ミスゼロへ。"
                        metrics="作業時間 80% 削減"
                    >
                        {/* Visual representation: PDF -> Excel */}
                        <div className="flex items-center justify-center gap-4 text-slate-400 py-8 bg-white rounded-lg border border-slate-200">
                            <div className="text-center">
                                <FileText className="h-10 w-10 mx-auto text-slate-300 mb-2" />
                                <span className="text-xs font-bold">PDF</span>
                            </div>
                            <ArrowRight className="h-6 w-6 text-emerald-500" />
                            <div className="text-center">
                                <Upload className="h-10 w-10 mx-auto text-emerald-600 mb-2" />
                                <span className="text-xs font-bold text-slate-900">自動入力</span>
                            </div>
                        </div>
                    </CaseCard>

                    {/* Case 2: AI知恵袋 */}
                    <CaseCard
                        badge="社内標準化"
                        title="「あの人に聞かないと分からない」の解消"
                        beforeText="熟練スタッフに質問が集中。退職すると業務が回らなくなるリスク。"
                        afterText="過去のチャット・日報をAIに学習させ、24時間即答する「社内知恵袋」を構築。"
                        metrics="新人教育コスト 50% 減"
                    >
                        {/* Visual representation: Chat bubbles */}
                        <div className="p-6 bg-white rounded-lg border border-slate-200 space-y-3">
                            <div className="flex gap-3 justify-end">
                                <div className="bg-emerald-100 text-emerald-900 text-xs p-2 rounded-lg rounded-tr-none">
                                    このエラーの対応方法は？
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-slate-100 text-slate-800 text-xs p-3 rounded-lg rounded-tl-none border border-slate-200 w-full">
                                    <span className="font-bold block mb-1">AIアシスタント</span>
                                    マニュアルP.12の手順に従ってください。それでも直らない場合は...
                                </div>
                            </div>
                        </div>
                    </CaseCard>
                </div>

            </div>
        </section>
    );
}

function CaseCard({ badge, title, beforeText, afterText, metrics, children }: { badge: string, title: string, beforeText: string, afterText: string, metrics: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden md:grid md:grid-cols-[1.2fr,0.8fr]">
            <div className="p-8 md:p-12">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded mb-4">
                    {badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">{title}</h3>

                <div className="space-y-6">
                    <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Before</span>
                        <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-3 rounded border border-slate-100">
                            {beforeText}
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 md:hidden">
                            <ArrowRight className="h-5 w-5 text-emerald-500 rotate-90 mx-auto" />
                        </div>
                        <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">After</span>
                        <p className="text-slate-900 font-bold leading-relaxed text-lg">
                            {afterText}
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        <span className="font-bold text-slate-900">{metrics}</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 flex items-center justify-center p-8">
                <div className="w-full max-w-xs">
                    {children}
                </div>
            </div>
        </div>
    );
}
