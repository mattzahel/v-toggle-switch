<template>
	<label
		for="toggle"
		class="toggle-switch"
		:class="{ 'toggle-switch--checked': isChecked }"
		tabindex="-1"
		@click.prevent="toggleState"
	>
		<button
			id="toggle"
			tabindex="0"
			type="button"
			role="switch"
			:aria-checked="ariaChecked"
			class="toggle-switch__button"
			:class="additionalClasses"
			:style="buttonStyles"
		>
			<div class="toggle-switch__labels">
				<span v-if="isChecked">
					<slot name="label-on"></slot>
				</span>
				<span v-if="!isChecked">
					<slot name="label-off"></slot>
				</span>
			</div>
			<span class="toggle-switch__toggle"></span>
		</button>
		<span class="toggle-switch__label"><slot></slot></span>
	</label>
</template>

<script>
export default {
	name: 'ToggleSwitch',

	props: {
		value: {
			type: Boolean,
			default: false,
		},
		labelOn: {
			type: String,
			default: null,
		},
		labelOff: {
			type: String,
			default: null,
		},
		width: {
			type: Number,
			default: 50,
		},
		height: {
			type: Number,
			default: 24,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		outline: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			isChecked: this.value,
		}
	},

	computed: {
		additionalClasses() {
			const classes = []
			const classToParams = {
				disabled: 'disabled',
				outline: 'outline',
			}

			for (let param in classToParams) {
				if (this[param]) {
					classes.push(`toggle-switch__button--${classToParams[param]}`)
				}
			}

			return classes
		},
		ariaChecked() {
			return this.isChecked ? 'true' : 'false'
		},
		buttonStyles() {
			return {
				'--color-off': '#c4c4c4',
				'--color-on': '#0178d6',
				'--color-text': '#fff',
				'--width': this.width + 'px',
				'--height': this.height + 'px',
				'--padding': this.height * 0.25 + 'px',
				'--distance': this.width - this.height + 'px',
			}
		},
	},

	methods: {
		toggleState() {
			this.isChecked = !this.isChecked
			this.$emit('toggle', this.isChecked)
		},
	},
}
</script>

<style scoped lang="scss">
.toggle-switch {
	$self: &;

	display: inline-flex;
	align-items: center;
	outline: none;

	.toggle-switch__toggle {
		width: calc(var(--height) - var(--padding));
		height: calc(var(--height) - var(--padding));
		position: absolute;
		top: 50%;
		left: calc(var(--padding) / 2);
		transition: all 200ms ease;
		transition-property: transform, background-color;
		transform: translateY(-50%);
		border-radius: 50%;
		background-color: #fff;
	}
	&__label {
		margin-left: 10px;
	}

	&__labels {
		display: flex;
		justify-content: flex-end;
		padding: 0 var(--padding);
		font-size: calc(var(--height) / 2);
	}

	&__button {
		width: var(--width);
		height: var(--height);
		position: relative;
		color: var(--color-text);
		cursor: pointer;
		transition: all 200ms ease;
		transition-property: background-color, border;
		border: 0;
		border-radius: calc((var(--height) - var(--padding)));
		background-color: var(--color-off);

		&--outline {
			color: var(--color-off);
			border: var(--color-off) solid calc(var(--padding) / 2);
			background-color: #fff;

			#{$self}__toggle {
				width: calc(var(--height) - var(--padding) * 2);
				height: calc(var(--height) - var(--padding) * 2);
				background-color: var(--color-off);
			}
		}
	}

	&--checked {
		#{$self}__button {
			background-color: var(--color-on);
		}
		#{$self}__labels {
			justify-content: flex-start;
		}
		#{$self}__button--outline {
			border-color: var(--color-on);
			background-color: #fff;

			#{$self}__toggle {
				background-color: var(--color-on);
			}
			#{$self}__labels {
				color: var(--color-on);
			}
		}
		#{$self}__toggle {
			transform: translate(var(--distance), -50%);
		}
	}
}
</style>
