<template>
	<div>
		<toggle-switch v-bind="{ width: 64, height: 28 }">
			<template v-slot:label-off>Off</template>
			<template v-slot:label-on>On</template>
			This is an example main label
		</toggle-switch>
	</div>
</template>

<script>
import ToggleSwitch from '../../../../src/toggle-switch'

export default {
	components: {
		ToggleSwitch,
	},
}
</script>
