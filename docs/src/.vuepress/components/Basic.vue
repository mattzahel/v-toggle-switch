<template>
	<div class="basic">
		<toggle-switch :value="value1" @toggle="onToggle"></toggle-switch>
		<span v-if="state">State: {{ value1 }}</span>
	</div>
</template>

<script>
import ToggleSwitch from '../../../../src/toggle-switch'

export default {
	components: {
		ToggleSwitch,
	},
	props: {
		state: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			value1: false,
		}
	},
	methods: {
		onToggle(val) {
			this.value1 = val
		},
	},
}
</script>
<style lang="scss" scoped>
.basic {
	display: flex;
	flex-direction: column;
	justify-items: center;

	span {
		margin-top: 10px;
	}
}
</style>
