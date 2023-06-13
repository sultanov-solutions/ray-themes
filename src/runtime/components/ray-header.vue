<script>
import {useRayTemplate} from "../composables/useRayTemplate";

export default {
	inheritAttrs: false,
	computed: {
		name: (ctx) => ctx.$attrs?.name ? `header-${ctx.$attrs.name}` : `header`,
		componentAttrs() {
			const attrs = {}
			if (Object.keys(this.$attrs).length !== 0) {
				for (const [key, value] of Object.entries(this.$attrs))
					if (key !== 'name')
						attrs[key] = value
			}
			return attrs
		},
	},
	methods: {
		useRayTemplate,
	}
};
</script>
<template>
	<get-template-part
		:name="name"
		v-bind="componentAttrs"
	>
		<slot />
	</get-template-part>
</template>
