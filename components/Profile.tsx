import Image from "next/image";

export default function Profile() {
    return (
        <section id="profile" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Photo */}
                    <div className="shrink-0 flex flex-col items-center mx-auto md:mx-0">
                        <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-sm bg-slate-200 shadow-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white ring-1 ring-slate-100">
                            <Image
                                src="/profile.jpg"
                                alt="Seiya Watanabe"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <span className="mt-8 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-5 py-2 rounded-full tracking-wider uppercase">
                            BASE: SHIZUOKA, HAMAMATSU
                        </span>
                    </div>

                    <div className="flex-1 text-center md:text-left pt-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                            渡邊 聖也 <span className="block text-sm font-bold text-slate-400 mt-1 tracking-widest uppercase">Seiya Watanabe</span>
                        </h2>
                        <p className="text-slate-800 font-bold mb-10 text-xl leading-relaxed border-l-4 border-slate-900 pl-4 py-1">
                            「ITコンサル」ではありません。<br />
                            現場の言葉を、回る形につなぐ翻訳者です。
                        </p>

                        <div className="space-y-8 text-slate-600 leading-loose text-justify md:text-left font-medium">
                            <p>
                                中小企業の現場側で、接客・運営・教育の最前線に立ちながら改善を回しています。
                            </p>
                            <p>
                                前職は品質管理12年。曖昧さを「同じ判断ができる形」に整える仕事を続けてきました。
                            </p>
                            <div className="bg-slate-50 p-6 rounded-none border-l-2 border-slate-300 text-sm leading-relaxed">
                                <span className="font-bold block mb-2 text-slate-900 text-base">大切にしていること</span>
                                「きれい」より「使える」。<br />
                                確認ポイントが残る形を一緒に作ります。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
