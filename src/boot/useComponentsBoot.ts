import {addComponent, addComponentsDir, createResolver} from "@nuxt/kit";
import {Nuxt} from "@nuxt/schema";
import {useRequirementsBoot} from "./index";
const {resolve} = createResolver(import.meta.url)

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
	'get-components': "ray-components",
}

async function loadThemeRequirements(nuxt: Nuxt, themesDir:string, theme:string ){
	// Theme components loader
	await addComponentsDir({
		path: resolve(nuxt.options.rootDir, themesDir, theme),
		global: true,
		prefix: "theme-" + theme,
		pattern: "**/*.vue"
	})
}

async function loadModuleComponents(){
	const componentsRootPath = './../components/'

	for (const [componentName, componentPath] of Object.entries(componentsList)) {
		await addComponent({
			name: componentName,
			filePath: resolve(componentsRootPath + componentPath + '.vue'),
			global: true
		})
	}
}

export default async function useComponentsBoot (nuxt: Nuxt) {
	const { themesDir, theme} = await useRequirementsBoot(nuxt)

	await loadModuleComponents()
	await loadThemeRequirements(nuxt, themesDir, theme)
}
