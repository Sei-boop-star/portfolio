import { FileText, ArrowRight, Table } from "lucide-react";

export default function CaseStudies() {
    return (
        <section id="cases" className="py-24 bg-white relative">
            {/* Section Header */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-3 block">Works</span>
                <h2 className="text-3xl md:text-4xl font-bold section-title-gradient inline-block">代表事例</h2>
                <p className="mt-4 text-slate-500">「実際にどう変わるのか」のビフォーアフターです。</p>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Featured Case Card */}
                <div className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 mb-20 transition-all hover:shadow-3xl hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>

                    <div className="grid md:grid-cols-2">

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">PICK UP</span>
                                <span className="text-xs text-slate-400 font-medium">経理業務DX</span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-6">
                                納品書PDF内容を自動抽出し<br />
                                <span className="text-indigo-600">スプレッドシートへ転記</span>
                            </h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex gap-4">
                                    <span className="w-12 h-6 flex items-center justify-center rounded bg-red-50 text-red-600 text-xs font-bold shrink-0">課題</span>
                                    <p className="text-sm text-slate-600">毎月100件以上のPDFを目視確認＆手入力。<br />ミス発生時の修正コストが重荷。</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="w-12 h-6 flex items-center justify-center rounded bg-blue-50 text-blue-600 text-xs font-bold shrink-0">解決</span>
                                    <p className="text-sm text-slate-600">AIがPDFを読み取り、整形データを提示。<br />人は「確認ボタンを押すだけ」に。</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 mt-auto">
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Result</div>
                                <div className="text-xl font-bold text-slate-900">
                                    作業時間 <span className="text-indigo-600 text-2xl mx-1">80%</span> 削減 / ミスゼロへ
                                </div>
                            </div>
                        </div>

                        {/* Visual Side (Mockup) */}
                        <div className="bg-slate-50 border-l border-slate-100 flex items-center justify-center p-12 relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

                            <div className="relative z-10 w-full max-w-sm">
                                {/* Card 1: PDF Input */}
                                <div className="bg-white rounded-lg shadow-lg p-4 mb-4 border border-slate-100 transform -rotate-2 origin-bottom-left transition-transform group-hover:rotate-0">
                                    <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-2">
                                        <FileText className="h-5 w-5 text-red-500" />
                                        <span className="text-xs font-bold text-slate-600">invoice_A001.pdf</span>
                                    </div>
                                    <div className="space-y-2 opacity-50">
                                        <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                                        <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex justify-center -my-2 relative z-20 text-indigo-500">
                                    <div className="bg-white rounded-full p-2 shadow-sm border border-slate-100">
                                        <ArrowRight className="h-5 w-5 rotate-90" />
                                    </div>
                                </div>

                                {/* Card 2: Sheet Output */}
                                <div className="bg-white rounded-lg shadow-lg p-4 mt-2 border border-slate-100 border-l-4 border-l-green-500 transform rotate-2 origin-top-right transition-transform group-hover:rotate-0">
                                    <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-2">
                                        <Table className="h-5 w-5 text-green-600" />
                                        <span className="text-xs font-bold text-slate-600">管理台帳.xlsx</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <div className="h-2 bg-indigo-100 rounded w-1/4"></div>
                                            <div className="h-2 bg-green-50 rounded w-3/4"></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-2 bg-indigo-100 rounded w-1/4"></div>
                                            <div className="h-2 bg-green-50 rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Supporting Cases Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <CaseCard
                        title="マニュアル・FAQ生成"
                        tag="社内標準化"
                        desc="熟練者のチャット履歴やメモ書きから、誰でも読める標準手順書を生成。新人教育コストを削減。"
                    />
                    <CaseCard
                        title="SNS等の下書き作成"
                        tag="マーケティング"
                        desc="箇条書きのアイデアから、3パターンの投稿文案を自動生成。人間は「選んで微調整」するだけに。"
                    />
                    <CaseCard
                        title="日報・報告書の要約"
                        tag="マネジメント"
                        desc="現場から上がる大量の日報から「トラブル」や「重要な予兆」だけを抽出し、管理者の確認時間を短縮。"
                    />
                </div>

            </div>
        </section>
    );
}

function CaseCard({ title, tag, desc }: { title: string, tag: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300">
            <span className="inline-block px-2 py-1 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold rounded mb-4">
                {tag}
            </span>
            <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
                {desc}
            </p>
        </div>
    );
}
