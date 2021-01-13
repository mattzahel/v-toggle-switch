<template>
	<div class="basic">
		<toggle-switch button-style="slider" :value="value1" @toggle="onToggle" />
	</div>
</template>

<script>
import ToggleSwitch from '../../../../src/toggle-switch'

export default {
	components: {
		ToggleSwitch,
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
