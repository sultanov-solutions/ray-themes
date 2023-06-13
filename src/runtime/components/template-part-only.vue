<script>
import {useRayTemplate} from "../composables/useRayTemplate";

export default {
	inheritAttrs: false,
	computed: {
		name: (ctx) => ctx.$attrs?.name ?? null,
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
	<component
		:is="useRayTemplate().getViewOnly(name)"
		v-bind="componentAttrs"
		v-if="useRayTemplate().viewExists(name)"
	>
		<slot />
	</component>
</template>
