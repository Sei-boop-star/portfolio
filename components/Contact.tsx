import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                    お問い合わせ
                </h2>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12 text-left max-w-xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
                    <p className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="text-xl">🤔</span>
                        まずは状況だけで大丈夫です（こういう方へ）
                    </p>
                    <ul className="text-slate-600 space-y-3 text-sm font-medium">
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            問い合わせ返信を毎回作るのがつらい
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            同じ質問が何度も来て、現場が止まる
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            日報・引き継ぎが続かず、毎回やり直しになる
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            マニュアルを作る時間がない
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            口頭指示が伝わらず、聞き直しが増えている
                        </li>
                    </ul>
                    <p className="mt-6 text-xs text-slate-400 border-t border-slate-200 pt-4 leading-relaxed">
                        ※箇条書きでOKです。まとまっていなくて大丈夫です。<br />
                        無理な売り込みはしません。まずは雑談ベースで状況を聞かせてください。
                    </p>
                </div>

                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd_Placeholder" // User needs to replace this
                    target="_blank"
                    className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded bg-slate-900 px-8 text-lg font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-slate-800"
                >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    雑談ベースで相談する
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <p className="mt-8 text-sm text-slate-500">
                    Googleフォームへ移動します。
                </p>
            </div>
        </section>
    );
}
