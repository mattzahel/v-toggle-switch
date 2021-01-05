<template>
	<label for="toggle" class="toggle">
		<button id="toggle" type="button" role="switch" aria-checked="true">
			<span>on</span>
			<span>off</span>
		</button>
		Label text
	</label>
</template>

<script>
export default {
	name: 'ToggleSwitch',

	mounted() {
		const button = document.querySelector('button')

		button.addEventListener('click', e => {
			let el = e.target
			let state = el.getAttribute('aria-checked')
			let isState = state === 'true'

			el.setAttribute('aria-checked', isState ? false : true)
		})
	},
}
</script>

<style scoped>
.toggle {
	--brightest: #fff;
	--bright: #757580;
	--positive: #0a0;
}

[role='switch'] {
	padding: 0;
	width: 2.6rem;
	height: 1.5rem;
	border: 0;
	border-radius: 1rem;
	background-color: var(--bright);
}

[role='switch'][aria-checked='true'] {
	background-color: var(--positive);
}

[role='switch'] span {
	color: var(--brightest);
	padding: 0.1rem;
	pointer-events: none;
	border-radius: 2rem;
}

[role='switch'][aria-checked='false'] :last-child {
	padding-left: 0.2em;
}

[role='switch'][aria-checked='true'] :last-child,
[role='switch'][aria-checked='false'] :first-child {
	background: var(--brightest);
}
</style>
