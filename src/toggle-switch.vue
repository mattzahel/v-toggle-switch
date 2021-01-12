<template>
	<label
		:id="`toggle-switch-label-${uuid}`"
		:for="`toggle-switch-${uuid}`"
		class="toggle-switch"
		:class="{ 'toggle-switch--checked': isChecked }"
		tabindex="-1"
		@click.prevent="toggleState"
	>
		<button
			:id="`toggle-switch-${uuid}`"
			tabindex="0"
			type="button"
			role="switch"
			class="toggle-switch__button"
			:class="additionalClasses"
			:style="buttonStyles"
			v-bind="{
				disabled,
				'aria-checked': ariaChecked,
				'aria-disabled': disabled,
				'aria-labelledby': `toggle-switch-label-${uuid}`,
			}"
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
let uuid = 0

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
		colorOn: {
			type: String,
			default: '#0178D6',
		},
		colorOff: {
			type: String,
			default: '#C4C4C4',
		},
		colorText: {
			type: String,
			default: '#FFF',
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
		speed: {
			type: Number,
			default: 200,
		},
		noOutline: {
			type: Boolean,
			default: false,
		},
		buttonStyle: {
			type: String,
			default: null,
			validator: value => ['outline', 'slider'].includes(value),
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
				buttonStyle: this.buttonStyle,
				noOutline: 'no-outline',
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
				'--color-on': this.colorOn,
				'--color-off': this.colorOff,
				'--color-text': this.colorText,
				'--width': `${this.width}px`,
				'--height': `${this.height}px`,
				'--padding': `${this.height * 0.25}px`,
				'--distance': `${this.width - this.height}px`,
				'--speed': `${this.speed}ms`,
			}
		},
	},

	watch: {
		value(newVal) {
			this.isChecked = newVal
		},
	},

	beforeCreate() {
		this.uuid = uuid.toString()
		uuid += 1
	},

	methods: {
		toggleState() {
			if (!this.disabled) {
				this.isChecked = !this.isChecked
				this.$emit('toggle', this.isChecked)
			}
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
		transition: all var(--speed) ease;
		transition-property: transform, background-color, box-shadow;
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
		transition: all var(--speed) ease;
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
		&--slider {
			background-color: transparent;

			&::before {
				content: '';
				width: calc(100% - var(--padding) * 2);
				height: 25%;
				position: absolute;
				top: 50%;
				left: var(--padding);
				transition: background-color var(--speed) ease;
				transform: translateY(-50%);
				border-radius: 1rem;
				background-color: var(--color-off);
			}
			#{$self}__toggle {
				box-shadow: 1px 0 6px rgba(0, 0, 0, 0.3);
			}
			#{$self}__labels {
				display: none;
			}
		}
		&--no-outline {
			outline: none;
		}
		&--disabled {
			pointer-events: none;
			opacity: 0.5;
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
		#{$self}__button--slider {
			background-color: transparent;

			&::before {
				background-color: var(--color-on);
			}
			#{$self}__toggle {
				background-color: var(--color-on);
				box-shadow: -1px 0 6px rgba(0, 0, 0, 0.3);
			}
		}
		#{$self}__toggle {
			transform: translate(var(--distance), -50%);
		}
	}
}
</style>
