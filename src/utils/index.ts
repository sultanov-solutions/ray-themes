import * as types from "../types"
import bootDefaults from "../boot/default"
import bootMeta from "../boot/meta"
import bootHooks from "../boot/hooks"
import {resolve} from "../resolve";
import bootComponents from "../boot/components";

interface InterfaceRayComponentMapItem extends types.RayComponentMapItem {}
interface InterfaceComponentsMap extends types.ComponentsMap {}
interface InterfaceRayTemplate extends types.RayTemplate {}
interface InterfaceRayModuleOptions extends types.RayModuleOptions {}


// // Components
import requirementsBoot from "../boot/requirements"
import makeComponentsMap from "../hooks/makeComponentsMap";
// import useComposablesBoot from "./boot/useComposablesBoot"
// import useSetDefaultOptions from "./boot/useSetDefaultOptions"
// import usePluginsBoot from "./boot/usePluginsBoot"
// import useThemeContextLoader from "./boot/useThemeContextLoader"
// import makeComponentsMap from "./hooks/makeComponentsMap"

// Configs
const moduleRootDir = resolve('./..')
const tmpDir = '.tmp'
const mapFile = 'components-map.json'



export {
	// Const
	moduleRootDir,
	tmpDir,
	mapFile,

	// Boot
	bootDefaults,
	bootMeta,
	bootHooks,
	bootComponents,

	// Utils
	resolve,
	requirementsBoot,
	makeComponentsMap,
	// useComponentsBoot,
	// useRequirementsBoot,
	// useComposablesBoot,
	// usePluginsBoot,
	// useSetDefaultOptions,
	// useThemeContextLoader,
	// makeComponentsMap,
	// baseConfig,

	//Interfaces
	InterfaceRayComponentMapItem,
	InterfaceComponentsMap,
	InterfaceRayTemplate,
	InterfaceRayModuleOptions,
}
