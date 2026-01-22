import { FileJson, MessageCircle, Sparkles, ShieldAlert } from "lucide-react";
import Image from "next/image";

export default function CaseStudies() {
    return (
        <section id="cases" className="py-24 bg-slate-50/50 relative">
            {/* Simple accent background */}
            <div className="absolute top-0 inset-x-0 h-px bg-slate-200/50"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative inline-block">
                        <span className="relative z-10">実例（結局どうラクになるか）</span>
                        <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-100/80 -z-0 rotate-1"></span>
                    </h2>
                    <p className="text-slate-600 font-medium mt-4">技術の話ではなく、「結局どうラクになるか」だけ載せます。</p>
                </div>

                <div className="space-y-12">

                    {/* Case A: Admin Automation */}
                    <CaseCard
                        title="【事務】納品書転記：5時間 → 確認だけへ"
                        icon={<FileJson className="h-6 w-6 text-white" />}
                        iconBg="bg-blue-600"
                    >
                        <ProblemSolution
                            problem="目視入力が多く、ミスと負担が積み上がる。"
                            solution="一覧を自動で作成。人は最終確認だけ。"
                            stopMechanism="読めない所は要確認に分けて止めます。"
                        />
                    </CaseCard>

                    {/* Case B: Knowledge Base (Updated) */}
                    <CaseCard
                        title="【自走】質問が減る 社内の知恵袋"
                        icon={<MessageCircle className="h-6 w-6 text-white" />}
                        iconBg="bg-emerald-600"
                    >
                        <ProblemSolution
                            problem="同じ質問が繰り返され、現場が止まりやすい。"
                            solution="商品情報・ストーリー・判断基準をまとめ、スタッフがまず自分で確認できる形に。改善が現場から出る循環につながりました。"
                            stopMechanism="迷うケースは確認につなぐ出し方にします。"
                        />
                        {/* Case Study Images (Mobile First) */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                    <Image
                                        src={`/case-slide-${num}.jpg`}
                                        alt={`AI知恵袋スライド ${num}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </CaseCard>

                    {/* Case C: SNS/Marketing (Dashboard Style) */}
                    <CaseCard
                        title="【文章】説明文・返信文の 品質をそろえる"
                        icon={<Sparkles className="h-6 w-6 text-white" />}
                        iconBg="bg-rose-500"
                    >
                        <ProblemSolution
                            problem="人によって文章がブレて、確認が増える。"
                            solution="メモから複数案。最後は人が選ぶだけ。責めない／断定しすぎないも固定。文章の雰囲気をそろえます。"
                            stopMechanism="強い断定は避け、**出口（次の一手）**を残します。"
                        />
                        <SystemDashboard />
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

function ProblemSolution({ problem, solution, stopMechanism }: { problem: string, solution: string, stopMechanism?: string }) {
    return (
        <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
            {/* Before / After */}
            <div className="space-y-4">
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

            {/* Stop Mechanism */}
            {stopMechanism && (
                <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-100 flex gap-4 items-start">
                    <ShieldAlert className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                        <span className="block text-xs font-bold text-yellow-700 mb-1">止め方（要確認）</span>
                        <p className="text-sm text-slate-700 font-medium leading-relaxed">{stopMechanism}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

function SystemDashboard() {
    return (
        <div className="mt-8 border border-slate-200 rounded-lg overflow-hidden font-mono text-sm bg-slate-50 relative">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5 }}></div>

            <div className="relative p-6 space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        <span className="text-slate-500 text-xs font-bold ml-2">AI_ENGINEERING_DASHBOARD</span>
                    </div>
                    <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">Active</div>
                </div>

                {/* Logic Flow */}
                <div className="space-y-2">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">&gt;&gt;&gt; SYSTEM_LOGIC</p>

                    <div className="bg-white border border-slate-200 rounded p-4 shadow-sm space-y-3">
                        <div className="flex items-start gap-4">
                            <span className="text-rose-500 font-bold shrink-0">INPUT :</span>
                            <span className="text-slate-600">箇条書きのメモ（新商品の特徴、価格、ターゲット）</span>
                        </div>

                        {/* Logic Block */}
                        <div className="pl-4 border-l-2 border-slate-200 py-2 space-y-2 my-2 bg-slate-50/50 rounded-r">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold text-xs">▼ PROCESS:</span>
                            </div>
                            <div className="grid gap-2 text-xs md:text-sm pl-4">
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">TONE_CONFIG:</span>
                                    <span className="text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded">
                                        トーン：社長の明るさ+10%
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">SAFETY_FILTER:</span>
                                    <span className="text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded">
                                        検品NG：嘲笑、ため息、人格否定
                                    </span>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                    <span className="text-slate-400 font-bold shrink-0">REQUIREMENT:</span>
                                    <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">
                                        必須要件：必ず『出口（解決策）』を提示する
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-emerald-500 font-bold shrink-0">OUTPUT:</span>
                            <span className="text-slate-900 font-bold">「お店のこだわり」を反映した、高品質なSNS投稿文</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
