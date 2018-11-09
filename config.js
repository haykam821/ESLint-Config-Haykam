module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:unicorn/recommended"
	],
	parserOptions: {
		ecmaVersion: 2017
	},
	plugins: [
		"extra-rules",
		"unicorn",
		"json",
		"html",
		"markdown"
	],
	rules: {
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true
			}
		],
		camelcase: "error",
		"capitalized-comments": "error",
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"comma-spacing": "error",
		"comma-style": "error",
		curly: [
			"error",
			"multi-line",
			"consistent"
		],
		"dot-location": [
			"error",
			"property"
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
				SwitchCase: 1
			}
		],
		"max-nested-callbacks": [
			"error",
			{
				max: 4
			}
		],
		"max-statements-per-line": [
			"error",
			{
				max: 2
			}
		],
		"no-console": "error",
		"no-empty-function": "error",
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
				maxEOF: 1
			}
		],
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-path-concat": "error",
		"no-restricted-modules": [
			"error",
			[{
				"name": "fs",
				"message": "Use fs-extra for promises, which results in readable code."
			}],
		],
		"no-return-await": "error",
		"no-shadow": [
			"error",
			{
				allow: [
					"err",
					"resolve",
					"reject"
				]
			}
		],
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-var": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"quote-props": [
			"error",
			"as-needed"
		],
		quotes: [
			"error",
			"double"
		],
		"require-await": "error",
		"require-jsdoc": "error",
		semi: [
			"error",
			"always"
		],
		"sort-keys": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never"
			}
		],
		"space-in-parens": "error",
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": "error",
		"unicorn/catch-error-name": [
			"error",
			{
				name: "error"
			}
		],
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase"
			}
		],
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/throw-new-error": "error",
		"unicorn/no-array-instanceof": "error",
		"unicorn/prefer-starts-ends-with": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/import-index": "error",
		"unicorn/new-for-builtins": "error",
		"unicorn/regex-shorthand": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/error-message": "error",
		"unicorn/prefer-add-event-listener": "error",
		"valid-jsdoc": [
			"error",
			{
				prefer: {
					return: "returns",
					arg: "param",
					argument: "param",
				},
				preferType: {
					"object": "Object",
				},
				requireReturn: false,
				requireReturnType: false,
				requireParamDescription: true,
				requireReturnDescription: false,
			},
		],
		"wrap-iife": [
			"error",
			"outside"
		],
		yoda: "error"
	}
};
