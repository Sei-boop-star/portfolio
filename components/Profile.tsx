export default function Profile() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="shrink-0">
                        {/* Placeholder for Profile Image if needed, or just initials */}
                        <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-400">
                            SW
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Seiya Watanabe</h2>
                        <p className="text-sm text-[hsl(var(--primary))] font-medium mb-4">業務改善パートナー / クリエイティブ・デベロッパー</p>

                        <p className="text-slate-700 leading-relaxed mb-6">
                            1993年生まれ。JT（日本たばこ産業株式会社）にて12年間、製造現場の品質管理・工程管理に従事。
                            「標準化」「再現性」を徹底する業務文化の中で、新人教育や業務フロー改善を担当。
                            現在はクリエイティブファーム「庭あそ」にて、テクノロジーと現場業務の橋渡しを行っています。
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {["品質管理12年", "外構・店舗・右腕業務", "社内研修講師"].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600">
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
