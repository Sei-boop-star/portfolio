import Link from "next/link";
// Button component import removed as we use Link with utility classes

// Actually, creating a reusable button is better.
// Let's assume standard HTML button with classes for now to save file count, or make a ui/button.tsx
// I will start broad.

export default function Header() {
    const menuItems = [
        { label: "事例", href: "#cases" },
        { label: "できること", href: "#capabilities" },
        { label: "相談", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="font-bold text-lg tracking-tight text-slate-900">
                    Seiya Watanabe
                </div>

                <nav className="hidden md:flex gap-8">
                    {menuItems.slice(0, 2).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 hover:text-[hsl(var(--primary))] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {/* Mobile Menu could go here, but keeping it simple for MVP */}
                    <Link
                        href="#contact"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-[hsl(var(--primary))] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[hsl(var(--primary))/90] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        相談する
                    </Link>
                </div>
            </div>
        </header>
    );
}
