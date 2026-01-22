import Image from "next/image";

export default function Profile() {
    return (
        <section id="profile" className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Photo */}
                    <div className="shrink-0 flex flex-col items-center mx-auto md:mx-0">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl bg-slate-100 shadow-xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/profile.jpg"
                                alt="Seiya Watanabe - Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="mt-6 text-xs font-bold text-slate-500 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full tracking-wider">
                            静岡県浜松市 拠点
                        </span>
                    </div>

                    <div className="flex-1 text-center md:text-left pt-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            渡邊 聖也 <span className="text-base font-normal text-slate-500 ml-3">Seiya Watanabe</span>
                        </h2>
                        <p className="text-slate-700 font-bold mb-10 text-lg">
                            現場の「曖昧さ」を、AIが動ける「言葉」に直す翻訳者
                        </p>

                        <div className="space-y-8 text-slate-600 leading-loose text-justify md:text-left font-medium">
                            <p>
                                浜松市を拠点に活動。現在は実店舗3拠点を運営する企業の「社長の右腕」として、現場実務とAI実装を両立しています。
                            </p>
                            <p>
                                過去には大手食品メーカーの工場で12年間、品質管理と「五感の数値化（官能評価）」に従事。<br className="hidden md:inline" />
                                「IT屋」ではなく「現場の人間」として、スタッフが明日から使える解決策にこだわります。
                            </p>
                            <p className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-sm leading-relaxed shadow-sm">
                                <span className="font-bold block mb-2 text-slate-900 text-base">大切にしていること</span>
                                現場の「創意工夫」を尊重すること。効率化という名目で、現場のモチベーションや「そのお店らしさ」を奪わないよう細心の注意を払います。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
