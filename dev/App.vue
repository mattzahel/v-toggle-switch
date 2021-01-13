<template>
	<div id="app" class="app">
		<h1>Examples</h1>
		<div class="app__switches">
			<toggle-switch v-model="value1" @toggle="onToggle">
				This is example toggle-switch button
			</toggle-switch>
			<toggle-switch
				v-model="value2"
				button-style="outline"
				v-bind="{ colorOff: '#444', colorOn: 'green' }"
				@toggle="onToggle"
			>
				This is "outline" style button
			</toggle-switch>
			<toggle-switch :value="value3" v-bind="config" @toggle="onToggle">
				This is "switch" style button
			</toggle-switch>
			<toggle-switch :value="value3" disabled @toggle="onToggle"
				>This is disabled button</toggle-switch
			>
			<toggle-switch width="64" height="28" @toggle="onToggle">
				<template #label-off>off</template>
				<template #label-on>on</template>
				This is label for button with state labels
			</toggle-switch>
			<toggle-switch width="64" height="28" button-style="outline" @toggle="onToggle">
				<template #label-off>off</template>
				<template #label-on>on</template>
				And this is label for outline button with state labels
			</toggle-switch>
		</div>
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

			config: {
				speed: 300,
				outlineDisabled: true,
				buttonStyle: 'slider',
			},
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
.app {
	font-family: sans-serif;
	padding: 3rem;

	&__switches {
		display: inline-flex;
		flex-direction: column;

		label {
			margin: 10px 0;
		}
	}
}
</style>
