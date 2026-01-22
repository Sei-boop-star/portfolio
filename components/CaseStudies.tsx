import { FileText, ArrowRight, Table, Terminal, CheckCircle } from "lucide-react";

export default function CaseStudies() {
    return (
        <section id="cases" className="py-16 md:py-24 bg-slate-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[hsl(var(--primary))] font-semibold tracking-wide uppercase text-sm">Case Studies</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center mt-2 text-slate-900">代表事例</h2>
                </div>

                {/* Representative Case */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-indigo-100 text-[hsl(var(--primary))] text-xs font-bold rounded mb-2">
                                PICK UP
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                                納品書PDF <ArrowRight className="inline mx-1 h-5 w-5 text-slate-400" />
                                <span className="text-[hsl(var(--primary))]">自動抽出</span> <ArrowRight className="inline mx-1 h-5 w-5 text-slate-400" />
                                スプレッドシート転記
                            </h3>

                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-3">
                                    <span className="font-bold text-slate-900 shrink-0">課題：</span>
                                    毎月100件以上のPDF納品書を目視で確認し、手入力で管理表に転記していた。
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-slate-900 shrink-0">対策：</span>
                                    PDF読み込みAIを導入し、項目を自動抽出。確認用画面を経てシートへ連携。
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-slate-900 shrink-0">運用：</span>
                                    AIが下書きを作成し、担当者が「最終承認」ボタンを押すだけのフローに変更。
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-slate-500">成果</span>
                                    <span className="text-lg font-bold text-[hsl(var(--primary))]">
                                        転記作業時間を80%削減 / 人為的ミスを解消
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Visual/Screenshot Placeholder */}
                        <div className="relative aspect-video rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-8 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>

                            {/* Mock UI Element */}
                            <div className="relative w-full max-w-xs bg-white rounded shadow-lg p-4 mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                                    <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center">
                                        <FileText className="h-4 w-4 text-red-500" />
                                    </div>
                                    <div className="text-xs text-slate-500">invoice.pdf</div>
                                    <ArrowRight className="ml-auto h-4 w-4 text-slate-300" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                                    <div className="h-2 w-1/2 bg-slate-100 rounded"></div>
                                </div>
                            </div>

                            <div className="relative w-full max-w-xs bg-white rounded shadow-lg p-4 transform translate-x-4 group-hover:translate-x-2 transition-transform duration-500 border border-indigo-100">
                                <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                                    <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">
                                        <Table className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div className="text-xs text-slate-500">管理シート</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex gap-1">
                                        <div className="h-2 w-1/3 bg-indigo-100 rounded"></div>
                                        <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="h-2 w-1/3 bg-indigo-100 rounded"></div>
                                        <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-4 right-4 text-[10px] text-slate-400 font-mono">Image: Automation Flow</div>
                        </div>
                    </div>
                </div>

                {/* Other Cases List */}
                <div className="grid md:grid-cols-3 gap-6">
                    <CaseCard
                        title="納品書PDF → 転記"
                        badge="実運用"
                        problem="形式の異なるPDFから特定項目を拾うのが手間"
                        solution="AIによるゆらぎ吸収＋定型化処理"
                        result="確認作業が「探す」から「見る」へ変化"
                    />
                    <CaseCard
                        title="手順書 / FAQ化"
                        badge="標準化"
                        problem="熟練スタッフしか分からない業務がある"
                        solution="チャット履歴やメモから標準手順書を生成"
                        result="新人教育コストの削減"
                    />
                    <CaseCard
                        title="SNS下書き生成"
                        badge="効率化"
                        problem="投稿ネタはあるが文章化に時間がかかる"
                        solution="箇条書きメモから3パターンの案を作成"
                        result="投稿頻度が週1→週3に向上"
                    />
                </div>
            </div>
        </section>
    );
}

function CaseCard({ title, badge, problem, solution, result }: { title: string, badge: string, problem: string, solution: string, result: string }) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 hover:border-indigo-200 group">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900">{title}</h4>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">{badge}</span>
            </div>
            <div className="space-y-4 text-sm">
                <div>
                    <div className="text-xs text-slate-400 mb-1">課題</div>
                    <p className="text-slate-700">{problem}</p>
                </div>
                <div>
                    <div className="text-xs text-slate-400 mb-1">やったこと</div>
                    <p className="text-slate-700">{solution}</p>
                </div>
                <div className="pt-3 border-t border-slate-50">
                    <div className="text-xs text-[hsl(var(--primary))] font-bold mb-1">成果</div>
                    <p className="text-slate-900 font-medium">{result}</p>
                </div>
            </div>
        </div>
    );
}
