<script>
import Vue from 'vue'
import ToggleSwitch from '@/toggle-switch.vue'

export default Vue.extend({
	name: 'ServeDev',
	components: {
		ToggleSwitch,
	},
})
</script>

<template>
	<div id="app">
		<toggle-switch />
	</div>
</template>
