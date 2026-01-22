import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
            },
            colors: {
                // Deep Navy for Trust (信頼)
                primary: {
                    DEFAULT: "#0f172a", // Slate-900-like navy
                    foreground: "#ffffff",
                },
                // Deep Green for Solution/Accent (解決・安心)
                accent: {
                    DEFAULT: "#059669", // Emerald-600
                    foreground: "#ffffff",
                },
                background: "#f8fafc", // Slate-50 (Clean white-grey)
                foreground: "#0f172a", // Text color
                muted: {
                    DEFAULT: "#f1f5f9", // Slate-100
                    foreground: "#64748b", // Slate-500
                },
            },
            // Remove fancy animations, keep it solid
        },
    },
    plugins: [],
};
export default config;
