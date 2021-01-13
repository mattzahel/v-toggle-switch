<template>
		<div class="example">
			<toggle-switch @toggle="onToggle">
				Example toggle-switch button
			</toggle-switch>
			<toggle-switch
				button-style="outline"
				v-bind="{ colorOff: '#444', colorOn: 'green' }"
				@toggle="onToggle"
			>
				Example "outline" style button
			</toggle-switch>
			<toggle-switch v-bind="config" @toggle="onToggle">
				Example "slider" style button
			</toggle-switch>
			<toggle-switch disabled @toggle="onToggle"
				>Disabled button</toggle-switch
			>
			<toggle-switch width="64" height="28" color-off='#444' color-on="orange" @toggle="onToggle">
				<template #label-off>off</template>
				<template #label-on>on</template>
				Label for button with state labels
			</toggle-switch>
			<toggle-switch v-bind="{ width: 64, height: 28, buttonStyle: 'outline'}" @toggle="onToggle">
				<template #label-off>off</template>
				<template #label-on>on</template>
				Label for outline button with state labels
			</toggle-switch>
		</div>
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
.example {
	display: inline-flex;
	flex-direction: column;

	label {
		margin: 10px 0;
	}
}
</style>
