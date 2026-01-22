import { ArrowRight } from "lucide-react";

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-3 block">Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 inline-block">
                        ご依頼のイメージ
                    </h2>
                    <p className="mt-4 text-slate-400">「何を渡せば、何が返ってくるのか」の例です。</p>
                </div>

                <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center max-w-4xl mx-auto">

                    {/* Input Concept */}
                    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl transform transition hover:scale-105">
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Input</div>
                        <h3 className="text-xl font-bold text-white mb-6">現状そのまま</h3>
                        <ul className="space-y-3">
                            <ListItem text="大量のPDF / 書類" />
                            <ListItem text="ぐちゃぐちゃのメモ" />
                            <ListItem text="口頭での指示・録音" />
                            <ListItem text="社内ルール / 慣習" />
                        </ul>
                    </div>

                    {/* Process Flow */}
                    <div className="flex flex-col items-center justify-center p-4 text-slate-500 gap-2">
                        <div className="h-12 w-[1px] bg-slate-700 md:hidden"></div>
                        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <ArrowRight className="text-indigo-400 h-5 w-5 rotate-90 md:rotate-0" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest uppercase">Processing</span>
                        <div className="h-12 w-[1px] bg-slate-700 md:hidden"></div>
                    </div>

                    {/* Output Concept */}
                    <div className="bg-gradient-to-br from-indigo-900/50 to-slate-800/50 backdrop-blur border border-indigo-500/30 p-8 rounded-2xl transform transition hover:scale-105 shadow-2xl shadow-indigo-500/10">
                        <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Output</div>
                        <h3 className="text-xl font-bold text-white mb-6">整理された形式</h3>
                        <ul className="space-y-3">
                            <ListItem text="標準化された手順書" highlight />
                            <ListItem text="整形済みデータシート" highlight />
                            <ListItem text="自動返信の下書き案" highlight />
                            <ListItem text="チェックリスト" highlight />
                        </ul>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <p className="inline-block px-4 py-2 bg-slate-800/80 rounded-lg text-xs text-slate-400 border border-slate-700">
                        <span className="text-red-400 font-bold mr-2">対象外</span>
                        24時間監視が必要なインフラ構築 / 大規模基幹システムのフルリプレイス
                    </p>
                </div>
            </div>
        </section>
    );
}

function ListItem({ text, highlight = false }: { text: string, highlight?: boolean }) {
    return (
        <li className={`flex items-center gap-3 text-sm ${highlight ? "text-white font-medium" : "text-slate-300"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${highlight ? "bg-indigo-400" : "bg-slate-600"}`}></span>
            {text}
        </li>
    );
}
