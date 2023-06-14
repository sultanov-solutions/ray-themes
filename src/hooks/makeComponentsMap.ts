import {Component} from "@nuxt/schema";
import fs from "fs";
import {mapFile, tmpDir} from "../configs/components.json";
import {
	requirementsBoot,
	resolve,
	InterfaceComponentsMap,
} from "../utils";


export default (components: Component[]) => {
	requirementsBoot().then(async (res) =>{
		const { nuxt, themesDir, theme} = res
		const themesRootPath = resolve(nuxt.options.rootDir, themesDir)

		if (!fs.existsSync(resolve(themesRootPath, theme)))
			fs.mkdirSync(resolve(themesRootPath, theme), { recursive: true})

		if (!fs.existsSync(resolve(themesRootPath, tmpDir)))
			fs.mkdirSync(resolve(themesRootPath, tmpDir), { recursive: true})

		if (fs.existsSync(resolve(themesRootPath, tmpDir)))
			fs.writeFile(resolve(themesRootPath, tmpDir, mapFile), '', (e) => {if (e) console.log(e)})

		/**
		if (!fs.existsSync(resolve(themesRootPath, tmpDir, mapFile)))
			throw new Error('File ~/' + themesDir + '/' + tmpDir + '/' + mapFile + ' is not found')
		**/

		const mapFilePath = resolve(themesRootPath, tmpDir, mapFile)

		const componentsMap: InterfaceComponentsMap = [];

		components.forEach(component =>
			component.kebabName.includes('theme-') && componentsMap.push({file: component.shortPath,componentName: component.kebabName})
		)

		const componentsMapJson = JSON.stringify(componentsMap, null, '\t');

		fs.writeFile(
			mapFilePath,
			componentsMapJson,
			'utf8',
			(e) => {if (e) console.log(e)}
		);
	})
}
