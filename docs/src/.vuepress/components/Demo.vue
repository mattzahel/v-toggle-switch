<template>
	<div id="app">
		<toggle-switch :value="value1" @toggle="onToggle"></toggle-switch>
		<toggle-switch outline :value="value2" @toggle="onToggle"></toggle-switch>

		<toggle-switch outline :value="value2" @toggle="onToggle">
			This is an example label
		</toggle-switch>

		<toggle-switch :value="value3" v-bind="{ height: 36, width: 92 }" @toggle="onToggle">
			<template #label-off>off</template>
			<template #label-on>on</template>
		</toggle-switch>
		<toggle-switch
			outline
			:value="value4"
			v-bind="{ height: 36, width: 96 }"
			@toggle="onToggle"
		>
			<template #label-off>off</template>
			<template #label-on>on</template>
		</toggle-switch>
	</div>
</template>

<script>
import Vue from 'vue'
import ToggleSwitch from '../../../../src/toggle-switch'

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
			value4: false,
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
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
}
</style>
