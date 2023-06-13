import {tryUseNuxt} from "@nuxt/kit";
import {InterfaceRayModuleOptions} from "../utils";

export default async function useRequirementsBoot () {
	const nuxt = tryUseNuxt()

	if (!nuxt)
		throw new Error('Nuxt is not defined')

	const options = nuxt.options.runtimeConfig.public.rayThemes as InterfaceRayModuleOptions

	if (!options?.themesDir)
		throw new Error('RayModule themes dir is not set')

	if (!options?.theme)
		throw new Error('Theme is not defined')

	return {
		...options,
		nuxt
	}
}
