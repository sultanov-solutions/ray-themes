import {Nuxt} from "@nuxt/schema";
import {addComponentsDir, defineNuxtModule, createResolver, addComponent} from '@nuxt/kit'
import defu from "defu";
import {
	InterfaceRayModuleOptions,
	bootDefaults, bootMeta, bootHooks, composablesBoot, requirementsBoot
} from "./utils";

const {resolve} = createResolver(import.meta.url)
const componentsRootPath = 'runtime/components/'
const componentsList = {
	'get-template-part': "template-part",
	'get-template-part-only': "template-part-only",
	'o-get-template-part': "template-part-only",
	'get-header': "ray-header",
	'get-sidebar': "ray-sidebar",
	'get-content': "ray-content",
	'get-footer': "ray-footer",
	'get-search': "ray-search",
	'get-layouts': "ray-layouts",
}

/**
 * Components start
 */
async function loadThemeRequirements(nuxt: Nuxt, themesDir:string, theme:string ){
	// Theme components loader
	await addComponentsDir({
		path: resolve(nuxt.options.rootDir, themesDir, theme),
		global: true,
		prefix: "theme-" + theme,
		pattern: "**/**/*.vue"
	})
}

async function loadModuleComponents(){
	for (const [componentName, componentPath] of Object.entries(componentsList)) {
		await addComponent({
			name: componentName,
			filePath: resolve(componentsRootPath, componentPath + '.vue'),
			global: true
		})
	}
}
const components = async () => {
	const { nuxt, themesDir, theme} = await requirementsBoot()
	await loadModuleComponents()
	await loadThemeRequirements(nuxt, themesDir, theme)
}
/**
 * Components end
 */

export default defineNuxtModule<InterfaceRayModuleOptions>({
	defaults: bootDefaults(),
	meta: bootMeta(),
	hooks: bootHooks(),
	async setup(options, nuxt)
	{
		nuxt.options.runtimeConfig.public.rayThemes = defu(nuxt.options.runtimeConfig.public.rayThemes, options)

		await components()
		await composablesBoot()
		// await usePluginsBoot()
		// await useThemeContextLoader(nuxt)
	}
})
