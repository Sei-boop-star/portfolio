import Link from "next/link";

export default function Header() {
    const menuItems = [
        { label: "実績", href: "#cases" },
        { label: "できること", href: "#capabilities" },
        { label: "プロフィール", href: "#profile" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Glass Panel */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-10">
                <div className="font-bold text-lg tracking-tight text-slate-900 leading-tight">
                    <span className="block text-xs text-slate-500 font-normal">業務改善パートナー</span>
                    渡邊 聖也
                </div>

                <nav className="hidden md:flex gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-bold text-slate-600 hover:text-emerald-700 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="inline-flex h-10 items-center justify-center rounded bg-slate-800 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-slate-700"
                    >
                        相談する
                    </Link>
                </div>
            </div>
        </header>
    );
}
