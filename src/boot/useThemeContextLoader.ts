import {Nuxt} from "@nuxt/schema";
import {useRequirementsBoot} from "./index";
import {createResolver} from "@nuxt/kit";
const {resolve} = createResolver(import.meta.url)

export default async function useThemeContextLoader (nuxt: Nuxt) {
	const { themesDir, theme} = await useRequirementsBoot(nuxt)
	await import(resolve(nuxt.options.rootDir, themesDir, theme, 'theme'))
}
