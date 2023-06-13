import {useNuxt} from "@nuxt/kit";
import useRequirementsBoot from "./useRequirementsBoot";

export default async function useRayAssets (asset: string) {
	const nuxt = useNuxt()
	const {themesDir, theme} = await useRequirementsBoot(nuxt)
	const stylesheetExtension = ['css', 'scss', 'sass', 'less', 'stylus']
	const assetExtension = asset.split('.').pop()

	if (!assetExtension)
		return

	if (stylesheetExtension.includes(assetExtension))
	{
		const cssList = nuxt.options.css.filter((css: string) => !css.includes(themesDir + '/' + theme + '/' + asset))

		cssList.push('~/' + themesDir + '/' + theme + '/' + asset)

		nuxt.options.css = cssList
	}
}
