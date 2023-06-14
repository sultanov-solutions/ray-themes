import * as types from "../types"
import bootDefaults from "../boot/default"
import bootMeta from "../boot/meta"
import bootHooks from "../boot/hooks"
import {resolve} from "../resolve";
import composablesBoot from "../boot/composables";

interface InterfaceRayComponentMapItem extends types.RayComponentMapItem {}
interface InterfaceComponentsMap extends types.ComponentsMap {}
interface InterfaceRayTemplate extends types.RayTemplate {}
interface InterfaceRayModuleOptions extends types.RayModuleOptions {}

// Components
import requirementsBoot from "../boot/requirements"
import makeComponentsMap from "../hooks/makeComponentsMap";

// Configs
const moduleRootDir = resolve('./..')

export {
	// Const
	moduleRootDir,

	// Boot
	bootDefaults,
	bootMeta,
	bootHooks,

	// Utils
	resolve,
	requirementsBoot,
	makeComponentsMap,
	composablesBoot,
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
