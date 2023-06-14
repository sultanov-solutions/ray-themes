import {addComponent, addComponentsDir} from "@nuxt/kit";
import {Nuxt} from "@nuxt/schema";
import {resolve, requirementsBoot} from '../utils'
const componentsRootPath = '../src/runtime/components/'

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
	/**
	if (!fs.existsSync(resolve(nuxt.options.rootDir, themesDir, theme)))
		throw new Error('Theme ' + theme + ' is not found in ~/' + themesDir + '/' + theme +' directory')
	**/

	// Theme components loader
	await addComponentsDir({
		path: resolve(nuxt.options.rootDir, themesDir, theme),
		global: true,
		prefix: "theme-" + theme,
		pattern: "**/*.vue"
	})
}

async function loadModuleComponents(){
	for (const [componentName, componentPath] of Object.entries(componentsList)) {
		await addComponent({
			name: componentName,
			filePath: resolve(componentsRootPath + componentPath + '.vue'),
			global: true
		})
	}
}

export default async function components () {
	const { nuxt, themesDir, theme} = await requirementsBoot()
	await loadModuleComponents()
	await loadThemeRequirements(nuxt, themesDir, theme)
}
