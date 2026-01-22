import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    まずは、<br />
                    <span className="text-indigo-600">「面倒なこと」</span>を教えてください。
                </h2>
                <p className="text-lg text-slate-600 mb-12">
                    解決策の仮説と、実現可能性を提示します。<br />
                    無理な営業は一切行いません。
                </p>

                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd_Placeholder" // User needs to replace this
                    target="_blank"
                    className="group inline-flex items-center justify-center p-1 rounded-full bg-slate-900 hover:bg-indigo-600 transition-colors duration-300"
                >
                    <span className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-slate-900 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                        <Mail className="mr-3 h-5 w-5" />
                        相談フォームを開く
                        <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                </Link>

                <p className="mt-8 text-sm text-slate-400">
                    ※ Googleフォームへ移動します
                </p>
            </div>
        </section>
    );
}
