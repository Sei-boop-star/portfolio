import { FileJson, MessageCircle, Sparkles } from "lucide-react";

export default function CaseStudies() {
    return (
        <section id="cases" className="py-24 bg-slate-50/50 relative">
            {/* Simple accent background */}
            <div className="absolute top-0 inset-x-0 h-px bg-slate-200/50"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative inline-block">
                        <span className="relative z-10">現場の「困った」を解決した実例</span>
                        <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-100/80 -z-0 rotate-1"></span>
                    </h2>
                    <p className="text-slate-600 font-medium mt-4">技術的な話ではなく、「結局どうなるのか」をご紹介します。</p>
                </div>

                <div className="space-y-12">

                    {/* Case A: Admin Automation */}
                    <CaseCard
                        title="【事務の自動化】毎月5時間の「納品書転記」を、5分の「確認」へ。"
                        icon={<FileJson className="h-6 w-6 text-white" />}
                        iconBg="bg-blue-600"
                    >
                        <ProblemSolution
                            problem="大量の納品書を目視でExcelに入力。入力ミスと、単純作業のストレスが限界だった。"
                            solution="スマホで撮影したPDFをAIが読み取り、自動で一覧表を作成。人は「最終確認」をするだけ。"
                        />
                    </CaseCard>

                    {/* Case B: Knowledge Base (Updated) */}
                    <CaseCard
                        title="【現場の知恵袋】スタッフが自ら相談し始める「AI知恵袋」"
                        icon={<MessageCircle className="h-6 w-6 text-white" />}
                        iconBg="bg-emerald-600"
                    >
                        <ProblemSolution
                            problem="「わからない」が口癖で、常に指示待ちの状態。マニュアルを作っても読まれず、管理者への質問が減らない。"
                            solution="NotebookLMに会社の商品情報やストーリーを集約し、イラスト多めの「AI相談役」を作成。今ではスタッフから「これもAIで作れますか？」と能動的な提案が出るように。"
                        />
                        {/* Case Study Images (Mobile First) */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                    <img
                                        src={`${process.env.BASE_PATH || ""}/case-slide-${num}.jpg`}
                                        alt={`AI知恵袋スライド ${num}`}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </CaseCard>

                    {/* Case C: SNS/Marketing */}
                    <CaseCard
                        title="【集客の加速】ブランドの質を守りながら、SNS投稿を量産。"
                        icon={<Sparkles className="h-6 w-6 text-white" />}
                        iconBg="bg-rose-500"
                    >
                        <ProblemSolution
                            problem="投稿頻度を上げたいが、アルバイトに任せるとお店の雰囲気に合わない文章になってしまう。"
                            solution="箇条書きのメモから、お店の「こだわり」や「口調」を反映した投稿案をAIが複数提案。最後は人が選んで投稿するだけ。"
                        />
                    </CaseCard>

                </div>
            </div>
        </section>
    );
}

function CaseCard({ title, icon, iconBg, children }: { title: string, icon: React.ReactNode, iconBg: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="p-6 md:p-10">
                <div className="flex items-start gap-5 mb-8">
                    <div className={`shrink-0 w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg shadow-slate-200 ring-4 ring-white`}>
                        {icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug pt-1">
                        {title}
                    </h3>
                </div>
                {children}
            </div>
        </div>
    );
}

function ProblemSolution({ problem, solution }: { problem: string, solution: string }) {
    return (
        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
            <div className="grid md:grid-cols-[auto,1fr] gap-2 md:gap-4">
                <span className="inline-block px-2.5 py-1 text-xs font-bold text-slate-500 bg-slate-200 rounded self-start whitespace-nowrap">Before</span>
                <p className="text-slate-600 text-sm leading-relaxed">{problem}</p>
            </div>
            <div className="w-full h-px bg-slate-200/50 my-2"></div>
            <div className="grid md:grid-cols-[auto,1fr] gap-2 md:gap-4">
                <span className="inline-block px-2.5 py-1 text-xs font-bold text-emerald-700 bg-emerald-100 rounded self-start whitespace-nowrap">After</span>
                <p className="text-slate-900 text-base font-bold leading-relaxed">{solution}</p>
            </div>
        </div>
    );
}
