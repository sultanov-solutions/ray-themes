import hook from "../hook";

export default {
	meta: {
		name: 'ray-module',
		configKey: 'rayModule',
		compatibility: {
			nuxt: '>=3.0.0'
		}
	},
	defaults: {
		themesDir: 'themes',
		theme: 'uiphoria23'
	},
	hooks: hook(),
}
