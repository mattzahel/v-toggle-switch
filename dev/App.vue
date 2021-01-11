<template>
	<div id="app">
		<h1>Demo</h1>
		<toggle-switch v-model="value1" accessibility-off @toggle="onToggle">
			This is example label
		</toggle-switch>
		<toggle-switch v-model="value2" outline @toggle="onToggle">
			This is another label
		</toggle-switch>
		<toggle-switch
			disabled
			:value="value3"
			v-bind="{ width: 64, height: 28 }"
			@toggle="onToggle"
		>
			<template #label-off>off</template>
			<template #label-on>on</template>
		</toggle-switch>
	</div>
</template>

<script>
import Vue from 'vue'
import ToggleSwitch from '@/toggle-switch.vue'

export default Vue.extend({
	name: 'App',
	components: {
		ToggleSwitch,
	},
	data() {
		return {
			value1: false,
			value2: false,
			value3: false,
		}
	},
	methods: {
		onToggle(value) {
			console.log(value)
		},
	},
})
</script>

<style lang="scss">
#app {
	font-family: sans-serif;
	padding: 3rem;
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
}
</style>
