export default function Profile() {
    return (
        <section className="py-32 bg-white border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-10 items-start">

                    <div className="shrink-0 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-lg">
                            SW
                        </div>
                        {/* Social Links or simple location */}
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            静岡県浜松市 拠点
                        </span>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">渡邊 聖也 <span className="text-lg font-normal text-slate-500 ml-2">Seiya Watanabe</span></h2>
                        <p className="text-emerald-700 font-bold mb-6">社長の右腕・現場の翻訳者</p>

                        <div className="space-y-4 text-slate-600 leading-loose">
                            <p>
                                1993年生まれ。JT（日本たばこ産業）にて12年間、製造現場の品質管理に従事。<br />
                                「絶対にミスが許されない」環境で、標準化・マニュアル化の手法を叩き込まれました。
                            </p>
                            <p>
                                「AIを導入したいが、現場がついてこれるか不安」<br />
                                「社長のやりたいことが、社員に伝わらない」
                            </p>
                            <p>
                                そんな経営者の悩みを、現場レベルの言葉と仕組み（手順書・ツール）に翻訳し、
                                <span className="font-bold text-slate-900 underline decoration-emerald-300 decoration-2 underline-offset-4">
                                    “誰でも回せる業務”として定着させる
                                </span>
                                ことを生業としています。
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {["品質管理12年", "外構・店舗マネジメント", "社内研修講師"].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
