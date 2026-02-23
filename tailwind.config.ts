import type { Config } from "tailwindcss";

export default {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F42A2A',
                    dark: '#dc2626',
                },
                secondary: {
                    DEFAULT: '#ef4444',
                },
                accent: {
                    DEFAULT: '#f87171',
                },
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
                heading: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
