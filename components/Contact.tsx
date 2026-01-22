import Link from "next/link";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";

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
                        何を書けばいいか迷っている方へ
                    </p>
                    <ul className="text-slate-600 space-y-3 text-sm font-medium">
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            「スタッフに何度も同じことを聞かれるのをやめたい」
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            「自分の『こだわり』を、AIを使って正しく伝えたい」
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1">●</span>
                            「とにかく今の忙しさを、AIという道具で少しでも軽くしたい」
                        </li>
                    </ul>
                    <p className="mt-6 text-xs text-slate-400 border-t border-slate-200 pt-4">
                        ※まとまっていなくて大丈夫です。そのままお書きください。
                    </p>
                </div>

                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd_Placeholder" // User needs to replace this
                    target="_blank"
                    className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded bg-slate-900 px-8 text-lg font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-slate-800"
                >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    まずは雑談ベースで相談する
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <p className="mt-8 text-sm text-slate-500">
                    無理な売り込みは一切いたしません。<br />
                    Googleフォームへ移動します。
                </p>
            </div>
        </section>
    );
}
