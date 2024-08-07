import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://professional-portfolio-theta-three.vercel.app/",
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: { es: "es-AR", en: "en-US" },
			},
		}),
		icon(),
	],
});
