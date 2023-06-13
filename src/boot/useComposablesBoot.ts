import {addImports, createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url)

export default async function useComposablesBoot () {

	// Default module composable
	await addImports({
		name: 'useRayTemplate',
		as: 'useRayTemplate',
		from: resolve('./composables/useRayTemplate') // path of composable
	})

	// Default module composable
	await addImports({
		name: 'useRayAssets',
		as: 'useRayAssets',
		from: resolve('./composables/useRayAssets') // path of composable
	})
}
