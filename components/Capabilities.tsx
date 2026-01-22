import { ArrowDown, ArrowRight } from "lucide-react";

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-white/50 border-b border-slate-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 inline-block relative">
                        入力は「きれい」でなくて大丈夫です
                        <span className="absolute -bottom-2 inset-x-0 h-1 bg-slate-200/50 rounded-full"></span>
                    </h2>
                    <p className="mt-6 text-slate-600 font-medium">
                        現場にあるものから始めます。整理はこちらで行います。
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-start">

                    {/* Input */}
                    <div className="bg-white p-8 rounded-2xl relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5 h-full">
                        <span className="absolute -top-3 left-6 px-4 py-1.5 bg-slate-700 text-white text-xs font-bold rounded shadow-lg shadow-slate-200 tracking-wider">
                            いただくもの（そのままでOK）
                        </span>
                        <ul className="space-y-4 pt-4">
                            <ListItem text="メモ／口頭の指示" />
                            <ListItem text="古い資料（PDFなど）" />
                            <ListItem text="よくある質問・返信（あれば）" />
                        </ul>
                    </div>

                    {/* Arrow (Mobile down, Desktop right) */}
                    <div className="flex justify-center text-slate-300 py-4 md:py-0 self-center">
                        <ArrowDown className="text-slate-400 h-8 w-8 md:hidden animate-pulse" />
                        <ArrowRight className="text-slate-400 h-8 w-8 hidden md:block animate-pulse" />
                    </div>

                    {/* Output */}
                    <div className="bg-white p-8 rounded-2xl relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-emerald-900/5 h-full">
                        <span className="absolute -top-3 left-6 px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded shadow-lg shadow-emerald-200 tracking-wider">
                            お渡しするもの（現場が動ける形）
                        </span>
                        <ul className="space-y-4 pt-4">
                            <ListItem text="迷わない手順（誰が／いつ）" highlight />
                            <ListItem text="返信のたたき台（確認ポイントつき）" highlight />
                            <ListItem text="チェックリスト" highlight />
                            <ListItem text="要確認で止まる流れ" highlight />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ListItem({ text, highlight = false }: { text: string, highlight?: boolean }) {
    return (
        <li className={`flex items-start gap-3 text-sm font-bold ${highlight ? "text-slate-800" : "text-slate-600"}`}>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${highlight ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-slate-300"}`}></span>
            <span className="flex-1 leading-relaxed">{text}</span>
        </li>
    );
}
