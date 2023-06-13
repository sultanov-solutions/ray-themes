import {HookResult, NuxtHooks} from "@nuxt/schema";
import {makeComponentsMap} from "../utils";

export default (): Partial<NuxtHooks> => ({
	'components:extend': (components): HookResult => makeComponentsMap(components),
})

