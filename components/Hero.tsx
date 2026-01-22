import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Badge: Experience */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold tracking-wide mb-10 border border-slate-200">
                    <Award className="h-4 w-4 text-emerald-600" />
                    元JT 品質管理キャリア12年
                </div>

                {/* H1 */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8 text-slate-900">
                    社長の頭の中を、
                    <br className="hidden md:block" />
                    現場が迷わず動ける
                    <br />
                    <span className="text-emerald-700 bg-emerald-50 px-2 rounded-lg decoration-4 decoration-emerald-200 underline-offset-4">“仕組み”</span>に変える。
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                    口頭指示や暗黙のルールを、手順・チェックリストに落とし込み、
                    生成AIで業務の回転数を上げます。
                    <br className="hidden md:block" />
                    IT用語は使いません。「事故が起きない運用」まで設計します。
                </p>

                {/* CTA Buttons - Large & Touchable */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto min-w-[280px] inline-flex h-16 items-center justify-center rounded-lg bg-slate-900 px-8 text-lg font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl"
                    >
                        まずは相談する
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
