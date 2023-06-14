import {InterfaceRayTemplate} from "../../utils";
import {useComponentFilter} from "./useComponentFilter";
import {useComponentsMap} from "./useComponentsMap";

export const useRayTemplate = (): InterfaceRayTemplate => {
	const defaultTheme = 'base'
	const componentsMap = useComponentsMap()

	const componentFilter = (viewName: string, themeName: string | null = null ) => useComponentFilter(viewName, themeName)

	const viewExists = (viewName: string) => componentFilter(viewName)?.length == 1

	const getView = (viewName: string) =>
	{
		if (!viewName)
			return false

		if (!viewExists(viewName))
		{
			const filtered = componentFilter(viewName, defaultTheme)

			if(filtered.length == 1)
				return filtered.pop()?.componentName?.trim() ?? false

			return false
		}

		const filtered = componentFilter(viewName)

		if(filtered.length == 1)
			return filtered.pop()?.componentName?.trim() ?? false

		return false
	}

	const getViewOnly = (viewName: string) =>
	{
		if (!viewName)
			return false

		if (!viewExists(viewName))
			return false

		return componentFilter(viewName).pop()?.componentName?.trim() ?? false
	}

	return {
		componentsMap,
		viewExists,
		getViewOnly,
		getView,
	}
}
