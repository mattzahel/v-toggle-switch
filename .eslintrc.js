module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'prettier',
		'prettier/vue',
	],
	rules: {
		'no-undef': 'error',
		quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	},
}
