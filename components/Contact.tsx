import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-slate-900">ご相談・お問い合わせ</h2>
                <p className="text-slate-600 mb-10">
                    まずは現状の「面倒なこと」をそのままお聞かせください。<br />
                    解決の糸口をご提案します。
                </p>

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd_Placeholder" // User needs to replace this
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[hsl(var(--primary))] px-10 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:bg-[hsl(var(--primary))/90]"
                >
                    <Mail className="mr-3 h-5 w-5" />
                    相談フォームを開く
                </a>

                <p className="mt-6 text-xs text-slate-400">
                    ※ Googleフォームへ移動します
                </p>
            </div>
        </section>
    );
}
