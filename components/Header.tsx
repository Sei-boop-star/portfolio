import Link from "next/link";

export default function Header() {
    const menuItems = [
        { label: "事例", href: "#cases" },
        { label: "できること", href: "#capabilities" },
        { label: "相談", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Glass Panel */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-md border-b border-white/50 shadow-sm"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-10">
                <div className="font-bold text-xl tracking-tight text-slate-900 font-sans">
                    Seiya Watanabe
                </div>

                <nav className="hidden md:flex gap-8">
                    {menuItems.slice(0, 2).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-600 hover:shadow-lg"
                    >
                        相談する
                    </Link>
                </div>
            </div>
        </header>
    );
}
