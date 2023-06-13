import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
	modules: [
		'@invictus.codes/nuxt-vuetify'
	],
	vuetify: {
		vuetifyOptions: {
			theme: {
				themes: {
					light: {
						dark: false,
						colors: {
							primary: '#7367F0'
						}
					},
				},
			},
		},
		moduleOptions: {
			/* nuxt-vuetify module options */
			treeshaking: true,
			autoImport: true,
			useIconCDN: true,
			/* vite-plugin-vuetify options */
			styles: 'sass',
		}
	}
})
