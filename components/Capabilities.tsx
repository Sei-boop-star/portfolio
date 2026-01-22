import { ArrowRightIcon } from "lucide-react";

export default function Capabilities() {
    return (
        <section id="capabilities" className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-[hsl(var(--primary))] font-semibold tracking-wide uppercase text-sm">Capabilities</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center mt-2 text-slate-900">できること</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        ご依頼のイメージを具体化するため、「入力」と「出力」の例を挙げます。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-8 items-center">

                            {/* Input */}
                            <div className="space-y-4">
                                <div className="text-center md:text-left">
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Input</span>
                                    <h3 className="text-xl font-bold text-slate-900">依頼の形</h3>
                                </div>
                                <ul className="space-y-3">
                                    {["大量のPDFファイル", "溜まったメール履歴", "口頭でのメモ・録音", "社内の独自ルール"].map((item, i) => (
                                        <li key={i} className="bg-white p-3 rounded shadow-sm text-slate-700 text-sm border border-slate-100">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center text-slate-300">
                                <ArrowRightIcon className="h-8 w-8 rotate-90 md:rotate-0" />
                            </div>

                            {/* Output */}
                            <div className="space-y-4">
                                <div className="text-center md:text-left">
                                    <span className="text-sm font-bold text-[hsl(var(--primary))] uppercase tracking-wider">Output</span>
                                    <h3 className="text-xl font-bold text-slate-900">成果物</h3>
                                </div>
                                <ul className="space-y-3">
                                    {["自動返信案の作成", "FAQ / 手順書の整備", "チェックリスト化", "集計シートへの転記"].map((item, i) => (
                                        <li key={i} className="bg-white p-3 rounded shadow-sm text-slate-900 font-medium text-sm border-l-4 border-[hsl(var(--primary))]">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                            <p className="text-sm text-slate-500">
                                <span className="font-bold text-slate-700">対象外：</span>
                                大規模基幹システムの改修、24時間監視が必要な複雑なインフラ構築など
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
