import {addImports} from "@nuxt/kit";
import {resolve} from "../utils";

export default async function useComposablesBoot () {
	await addImports({
		name: 'useRayTemplate',
		as: 'useRayTemplate',
		from: resolve('./../runtime/composables/useRayTemplate') // path of composable
	})
}
