import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-12 md:gap-20 items-center mb-20">

                    {/* Text Column */}
                    <div className="space-y-10 text-center md:text-left">
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-slate-900">
                                「社長の頭の中」を、<br />
                                現場が迷わない<br className="md:hidden" />
                                <span className="relative whitespace-nowrap inline-block px-1 ml-1">
                                    <span className="absolute inset-0 bg-slate-200/50 -skew-y-2 rounded-sm -z-10"></span>
                                    指示・手順
                                </span>
                                に。
                            </h1>
                            <p className="text-lg text-slate-600 leading-loose font-medium">
                                品質管理12年。<br className="md:hidden" />
                                AIの下書きを <span className="font-bold text-slate-800 border-b-2 border-emerald-200">実務で回る形</span> に整えます。
                            </p>
                        </div>
                    </div>

                    {/* Photo Column */}
                    <div className="flex justify-center md:justify-end relative">
                        {/* Decorative blob behind photo */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-200 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>

                        <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl bg-slate-100 shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white rotate-3 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/profile.jpg"
                                alt="Seiya Watanabe"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3 Core Values / Declaration */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 opacity-30"></div>

                    <div className="text-center md:text-left mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">3つの約束</h2>
                        <p className="font-medium text-slate-700 leading-relaxed">
                            難しいIT用語は使いません。AIに任せきりにしません。<br className="hidden md:block" />
                            最終確定は人。迷う所は<span className="bg-yellow-100 px-1 mx-1 rounded border-b-2 border-yellow-200">「要確認」で止めます。</span>
                        </p>
                    </div>

                    <ul className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "1）現場の言葉で整える",
                                desc: "言い回しをそろえます。説明が増えない文章にします。"
                            },
                            {
                                title: "2）要確認で止める\n（品質）",
                                desc: "AIの出力はそのまま通しません。確定／要確認を分けます。"
                            },
                            {
                                title: "3）定着まで一緒に整える",
                                desc: "作って終わりにしません。誰が・いつ・どこで止めるかまで作ります。"
                            }
                        ].map((item, i) => (
                            <li key={i} className="flex flex-col items-center md:items-start text-center md:text-left group">
                                <div className="mb-4 p-3 bg-slate-50 rounded-2xl text-slate-700 ring-1 ring-slate-200 group-hover:bg-slate-100 transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg whitespace-pre-line mb-3 leading-relaxed">{item.title}</h3>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
