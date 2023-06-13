import {Nuxt} from "@nuxt/schema";
import {RayModuleOptions} from "../types";

export default async function useRequirementsBoot (nuxt: Nuxt) {

	const options = nuxt.options.runtimeConfig.public.rayModule as RayModuleOptions

	if (!options.themesDir)
		throw new Error('RayModule back themes dir is not set')

	if (!options.theme)
		throw new Error('Theme is not defined')

	return options
}
