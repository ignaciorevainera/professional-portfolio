import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				"slide-left": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			animation: {
				"slide-left-infinite": "slide-left 20s linear infinite",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],

	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					primary: "#00c9b1",
					"primary-content": "#000f0c",
					secondary: "#9035a7",
					"secondary-content": "#ead7ef",
					accent: "#e686fb",
					"accent-content": "#130615",
					neutral: "#c8c1b2",
					"neutral-content": "#0f0e0c",
					"base-100": "#fff8e8",
					"base-200": "#ded8ca",
					"base-300": "#beb8ac",
					"base-content": "#161513",
					info: "#2563eb",
					"info-content": "#d2e2ff",
					success: "#22c55e",
					"success-content": "#000e03",
					warning: "#eab308",
					"warning-content": "#130c00",
					error: "#e11d48",
					"error-content": "#ffd8d9",
				},
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					primary: "#ec9929",
					"primary-content": "#130801",
					secondary: "#c026d3",
					"secondary-content": "#f5d9f8",
					accent: "#00c77f",
					"accent-content": "#000e06",
					neutral: "#2d3941",
					"neutral-content": "#d1d4d6",
					"base-100": "0c1420",
					"base-200": "#09101a",
					"base-300": "#060c15",
					"base-content": "#c8cacd",
					info: "#0ea5e9",
					"info-content": "#000a13",
					success: "#358d2f",
					"success-content": "#010701",
					warning: "#ffb300",
					"warning-content": "#160c00",
					error: "#e11d48",
					"error-content": "#ffd8d9",
				},
			},
		],
		base: true,
	},
};
