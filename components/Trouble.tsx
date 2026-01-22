import { AlertCircle } from "lucide-react";

export default function Trouble() {
    return (
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-slate-900">こんなお困りごとから入れます</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-2xl mx-auto">
                    <ul className="space-y-4">
                        {[
                            "問い合わせ返信を毎回ゼロから作って消耗している",
                            "同じ質問が繰り返されて、現場が止まりやすい",
                            "日報・引き継ぎが続かず、毎回やり直しになる"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 font-bold text-slate-700">
                                <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 text-sm text-slate-500 border-t border-slate-100 pt-4 text-center">
                        マニュアルを作る時間がない、口頭指示が伝わらない、も同じ根っこです。
                    </p>
                </div>
            </div>
        </section>
    );
}
