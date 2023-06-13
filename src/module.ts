import {defineNuxtModule} from '@nuxt/kit'
import defu from "defu";

import {
	InterfaceRayModuleOptions,
	bootDefaults, bootMeta, bootHooks, bootComponents
} from "./utils";

export default defineNuxtModule<InterfaceRayModuleOptions>({
	defaults: bootDefaults(),
	meta: bootMeta(),
	hooks: bootHooks(),
	async setup(options, nuxt)
	{
		nuxt.options.runtimeConfig.public.rayThemes = defu(nuxt.options.runtimeConfig.public.rayThemes, options)
		await bootComponents()
		// await useComposablesBoot()
		// await usePluginsBoot()
		// await useThemeContextLoader(nuxt)
	}
})
