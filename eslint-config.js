module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
	],
	parserOptions: {
		ecmaVersion: 2018,
	},
	plugins: [
		"extra-rules",
		"unicorn",
		"json",
		"html",
		"markdown",
	],
	rules: {
		"array-bracket-newline": [
			"error",
			"consistent",
		],
		"arrow-parens": [
			"error",
			"as-needed",
		],
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		camelcase: "error",
		"capitalized-comments": "error",
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"comma-spacing": "error",
		"comma-style": "error",
		curly: [
			"error",
			"multi-line",
			"consistent",
		],
		"dot-location": [
			"error",
			"property",
		],
		"dot-notation": "error",
		"extra-rules/no-commented-out-code": "error",
		"extra-rules/no-for-loops": "error",
		"extra-rules/no-single-line-objects": "error",
		"handle-callback-err": [
			"error",
			"error",
		],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"max-nested-callbacks": [
			"error",
			{
				max: 4,
			},
		],
		"max-statements-per-line": [
			"error",
			{
				max: 2,
			},
		],
		"no-console": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "error",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxBOF: 0,
				maxEOF: 1,
			},
		],
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-path-concat": "error",
		"no-restricted-modules": [
			"error",
			{
				paths: [{
					message: "Use fs-extra for promises, which results in readable code.",
					name: "fs",
				}],
			},
		],
		"no-return-await": "error",
		"no-shadow": [
			"error",
			{
				allow: [
					"err",
					"resolve",
					"reject",
				],
			},
		],
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-curly-spacing": [
			"error",
			"always",
		],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"quote-props": [
			"error",
			"as-needed",
		],
		quotes: [
			"error",
			"double",
		],
		"require-await": "error",
		"require-jsdoc": "error",
		semi: [
			"error",
			"always",
		],
		"sort-keys": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never",
			},
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"unicorn/catch-error-name": [
			"error",
			{
				name: "error",
			},
		],
		"unicorn/error-message": "error",
		"unicorn/escape-case": "error",
		"unicorn/explicit-length-check": "error",
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase",
			},
		],
		"unicorn/import-index": "error",
		"unicorn/new-for-builtins": "error",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/no-array-instanceof": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-process-exit": "error",
		"unicorn/number-literal-case": "error",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-exponentiation-operator": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-starts-ends-with": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/regex-shorthand": "error",
		"unicorn/throw-new-error": "error",
		"valid-jsdoc": [
			"error",
			{
				prefer: {
					arg: "param",
					argument: "param",
					return: "returns",
				},
				preferType: {
					object: "Object",
				},
				requireParamDescription: true,
				requireReturn: false,
				requireReturnDescription: false,
				requireReturnType: false,
			},
		],
		"wrap-iife": [
			"error",
			"outside",
		],
		yoda: "error",
	},
};