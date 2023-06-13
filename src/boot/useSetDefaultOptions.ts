import defu from "defu";
import {Nuxt} from "@nuxt/schema";
import {RayModuleOptions} from "../types";

export default async function useComposablesBoot (nuxt: Nuxt, options: RayModuleOptions) {
	nuxt.options.runtimeConfig.public.rayModule = defu(nuxt.options.runtimeConfig.public.rayModule, options)
}
