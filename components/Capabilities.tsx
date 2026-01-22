import { ArrowDown, ArrowRight } from "lucide-react";

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-white/50 border-b border-slate-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 inline-block relative">
                        私がお手伝いできること
                        <span className="absolute -bottom-2 inset-x-0 h-1 bg-slate-200/50 rounded-full"></span>
                    </h2>
                    <p className="mt-6 text-slate-600 font-medium">
                        「きれいなデータ」は必要ありません。現場にあるものを、そのままお渡しください。
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center">

                    {/* Input */}
                    <div className="bg-white p-8 rounded-2xl relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5">
                        <span className="absolute -top-3 left-6 px-4 py-1.5 bg-slate-700 text-white text-xs font-bold rounded shadow-lg shadow-slate-200 tracking-wider">
                            入力（現状）
                        </span>
                        <ul className="space-y-4 pt-4">
                            <ListItem text="手書きのメモ・ノート" />
                            <ListItem text="口頭での指示" />
                            <ListItem text="古いPDF資料" />
                            <ListItem text="社内の「暗黙のルール」" />
                        </ul>
                    </div>

                    {/* Arrow (Mobile down, Desktop right) */}
                    <div className="flex justify-center text-slate-300 py-4 md:py-0">
                        <ArrowDown className="text-slate-400 h-8 w-8 md:hidden animate-pulse" />
                        <ArrowRight className="text-slate-400 h-8 w-8 hidden md:block animate-pulse" />
                    </div>

                    {/* Output */}
                    <div className="bg-white p-8 rounded-2xl relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-emerald-900/5">
                        <span className="absolute -top-3 left-6 px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded shadow-lg shadow-emerald-200 tracking-wider">
                            出力（成果物）
                        </span>
                        <ul className="space-y-4 pt-4">
                            <ListItem text="現場が動ける手順書" highlight />
                            <ListItem text="即戦力の返信案" highlight />
                            <ListItem text="ミスを防ぐチェックリスト" highlight />
                            <ListItem text="自動化された業務フロー" highlight />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ListItem({ text, highlight = false }: { text: string, highlight?: boolean }) {
    return (
        <li className={`flex items-center gap-3 text-sm font-bold ${highlight ? "text-slate-800" : "text-slate-600"}`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${highlight ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-slate-300"}`}></span>
            {text}
        </li>
    );
}
