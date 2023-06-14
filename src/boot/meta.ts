export default () => ({
	name: 'ray-themes',
	configKey: 'rayThemes',
	compatibility: {
		nuxt: '>=3.0.0'
	},
	nitro: {
		esbuild: {
			options: {
				target: 'esnext'
			}
		}
	}
})
