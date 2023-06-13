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
	<template v-if="!name">
		There is no component name specified
	</template>
	<template v-else>
		<get-template-part
			:name="`components-${name}`"
			v-bind="componentAttrs"
		>
			<slot />
		</get-template-part>
	</template>
</template>
