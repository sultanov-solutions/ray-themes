import {useRuntimeConfig} from "#app";
import {InterfaceRayComponentMapItem} from "../../utils";
import {useComponentsMap} from "./useComponentsMap";

export const useComponentFilter = (viewName: string, themeName: string | null = null): InterfaceRayComponentMapItem[] => {
	const componentsMap = useComponentsMap()

	if(!themeName)
		themeName = useRuntimeConfig()?.public?.rayModule?.theme

	const realViewName = 'theme-' + themeName + '-' + viewName

	return componentsMap.filter((component: InterfaceRayComponentMapItem) => component?.componentName?.trim() === realViewName)
}
