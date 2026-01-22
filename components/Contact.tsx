import Link from "next/link";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                    お問い合わせ
                </h2>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-10 text-left max-w-lg mx-auto">
                    <p className="text-xs font-bold text-slate-500 mb-2">ご相談の例</p>
                    <ul className="text-slate-700 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500">●</span>
                            納品書の入力を自動化したい
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500">●</span>
                            生成AIを使って古いマニュアルを整理したい
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500">●</span>
                            現場がアナログすぎて何からしていいか分からない
                        </li>
                    </ul>
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
