import {ComponentsMap} from "../types";
import fs from "fs";
import rayConfigs from "../config.json";
import {createResolver} from '@nuxt/kit'

const {resolve} = createResolver(import.meta.url)
const moduleRootDir = resolve('./..')
const mapFileName = 'components-map.json'
const mapFile = resolve(moduleRootDir, rayConfigs.tempPath, mapFileName)


export default (components: any[]) => {
	const componentsMap: ComponentsMap = [];

	components.forEach(component =>
		component.kebabName.includes('theme-') && componentsMap.push({file: component.shortPath,componentName: component.kebabName})
	)

	const componentsMapJson = JSON.stringify(componentsMap, null, '\t');

	fs.writeFile(
		mapFile,
		componentsMapJson,
		'utf8',
		(e) => {
			if (e)
				console.log(e)
		}
	);
}
