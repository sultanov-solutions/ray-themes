import {addPlugin, createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url)
const pluginsRoot: string = './../plugins/'
const pluginsList: string[] = [
	'example'
]

export default async function usePluginsBoot ()
{
	for (const pluginName of pluginsList)
		await  addPlugin(resolve(pluginsRoot, pluginName))
}
