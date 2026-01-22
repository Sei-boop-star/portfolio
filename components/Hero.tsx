import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-12 md:gap-20 items-center mb-20">

                    {/* Text Column */}
                    <div className="space-y-10 text-center md:text-left order-2 md:order-1">
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug tracking-tight text-slate-900">
                                「社長の頭の中」を、<br />
                                現場が迷わず動ける<br className="md:hidden" />
                                <span className="relative whitespace-nowrap inline-block px-1 ml-1">
                                    <span className="absolute inset-0 bg-slate-200/50 -skew-y-2 rounded-sm -z-10"></span>
                                    「仕組み」
                                </span>
                                に変える。
                            </h1>
                            <p className="text-lg text-slate-600 leading-loose font-medium">
                                12年の品質管理経験が、<br className="md:hidden" />
                                「AIの嘘」を実務に耐える「確信」に変えます。
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-lg bg-slate-800 px-10 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(30,41,59,0.39)] transition-all hover:bg-slate-700 hover:-translate-y-0.5"
                            >
                                まずは相談する
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Photo Column */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center overflow-hidden border-4 border-white ring-1 ring-slate-100">
                            <Image
                                src="/profile.jpg"
                                alt="Seiya Watanabe"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3 Core Values / Declaration */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 opacity-30"></div>
                    <p className="text-center md:text-left font-bold text-slate-800 mb-10 text-xl tracking-wide leading-relaxed">
                        ITの専門用語は使いません。AIに丸投げもさせません。<br className="hidden md:block" />
                        最終判断は「人」が行う、確実な運用を設計します。
                    </p>
                    <ul className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "難解なIT用語は\n一切使いません",
                                icon: "言葉の壁をなくす"
                            },
                            {
                                title: "AI任せにせず\n「人」の確認を重視",
                                icon: "品質を守る"
                            },
                            {
                                title: "現場が迷わない\n手順書まで作成",
                                icon: "明日から動ける"
                            }
                        ].map((item, i) => (
                            <li key={i} className="flex flex-col items-center md:items-start text-center md:text-left group">
                                <div className="mb-4 p-3 bg-slate-50 rounded-2xl text-slate-700 ring-1 ring-slate-200 group-hover:bg-slate-100 transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg whitespace-pre-line mb-2 leading-relaxed">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full inline-block">{item.icon}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
