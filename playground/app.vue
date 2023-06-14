<script setup>
import {useRayTemplate} from "../src/runtime/composables/useRayTemplate"
</script>
<template>
	<div>
		Nuxt module playground! 3
		<pre>{{ useRayTemplate().componentsMap }}</pre>
	</div>
</template>
