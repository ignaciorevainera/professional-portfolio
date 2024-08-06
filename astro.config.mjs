import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://localhost:4321",
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: ["es", "en"],
			},
		}),
		icon(),
	],
});
