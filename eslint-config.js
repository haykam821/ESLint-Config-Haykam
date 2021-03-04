module.exports = {
	env: {
		es2021: true,
		es6: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
	],
	overrides: [
		{
			files: [
				"*.md",
			],
			processor: "markdown/markdown",
		},
		{
			files: [
				"**/*.md/**",
			],
			rules: {
				"eol-last": "off",
				"no-multiple-empty-lines": "off",
				"no-undef": "off",
				"no-unused-vars": "off",
				"unicorn/filename-case": "off",
			},
		},
	],
	parserOptions: {
		ecmaVersion: 2021,
	},
	plugins: [
		"extra-rules",
		"unicorn",
		"jsdoc",
		"node",
		"json",
		"html",
		"markdown",
	],
	rules: {
		"array-bracket-newline": [
			"error",
			"consistent",
		],
		"array-element-newline": [
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
		"eol-last": "error",
		"extra-rules/no-commented-out-code": "error",
		"extra-rules/no-single-line-objects": "error",
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"jsdoc/check-param-names": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-types": [
			"error",
			{
				noDefaults: true,
			},
		],
		"jsdoc/require-jsdoc": "error",
		"jsdoc/require-param": "error",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		"jsdoc/require-param-type": "error",
		"jsdoc/require-returns-check": "error",
		"jsdoc/valid-types": "error",
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
		"node/handle-callback-err": [
			"error",
			"error",
		],
		"node/no-path-concat": "error",
		"node/no-restricted-require": [
			"error",
			[{
				message: "Use fs-extra for promises, which results in readable code.",
				name: "fs",
			}],
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		"one-var": ["error", "never"],
		"prefer-const": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-object-spread": "error",
		"prefer-rest-params": "error",
		"quote-props": [
			"error",
			"as-needed",
		],
		quotes: [
			"error",
			"double",
		],
		"require-await": "error",
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
		"symbol-description": "error",
		"template-curly-spacing": ["error", "never"],
		"unicorn/better-regex": "error",
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
		"unicorn/no-for-loop": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-process-exit": "error",
		"unicorn/number-literal-case": "error",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/throw-new-error": "error",
		"wrap-iife": [
			"error",
			"outside",
		],
		yoda: "error",
	},
	settings: {
		jsdoc: {
			mode: "typescript",
			preferredTypes: {
				object: "Object",
			},
			tagNamePreference: {
				arg: "param",
				argument: "param",
				return: "returns",
			},
		},
	},
};