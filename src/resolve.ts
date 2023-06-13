import {createResolver} from "@nuxt/kit";

export function resolve(...args: string[]){
	const {resolve} = createResolver(import.meta.url)
	return resolve(...args)
}
