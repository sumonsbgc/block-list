import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brand: "var(--brand)",
				"brand-deep": "var(--brand-deep)",
				"brand-light": "var(--brand-light)",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				"secondary-light": "var(--secondary-light)",
				"gray-light": "var(--gray-light)",
				"warning-light": "var(--warning-light)",
			},
			fontFamily: {
				urbanist: ["var(--font-urbanist)", "sans-serif"],
			},
		},
		container: {
			center: true,
			padding: { DEFAULT: "1rem", sm: "2rem" },
			screens: {
				DEFAULT: "1328px",
			},
		},
	},
	plugins: [],
} satisfies Config;
