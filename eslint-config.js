require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	env: {
		es2022: true,
		node: true,
	},
	overrides: [
		require("./rules/markdown.js"),
		require("./rules/markdown-code.js"),
		require("./rules/typescript.js"),
	],
	parserOptions: {
		ecmaVersion: 2023,
	},
	plugins: [
		"extra-rules",
		"unicorn",
		"jsdoc",
		"node",
		"json",
		"html",
		"markdown",
		"@stylistic",
	],
	rules: {
		"@stylistic/array-bracket-newline": [
			"error",
			"consistent",
		],
		"@stylistic/array-element-newline": [
			"error",
			"consistent",
		],
		"@stylistic/arrow-parens": [
			"error",
			"as-needed",
		],
		"@stylistic/arrow-spacing": "error",
		"@stylistic/brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		"@stylistic/comma-dangle": [
			"error",
			"always-multiline",
		],
		"@stylistic/comma-spacing": "error",
		"@stylistic/comma-style": "error",
		"@stylistic/dot-location": [
			"error",
			"property",
		],
		"@stylistic/eol-last": "error",
		"@stylistic/indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"@stylistic/key-spacing": "error",
		"@stylistic/keyword-spacing": "error",
		"@stylistic/max-statements-per-line": [
			"error",
			{
				max: 2,
			},
		],
		"@stylistic/newline-per-chained-call": "error",
		"@stylistic/no-extra-semi": "error",
		"@stylistic/no-floating-decimal": "error",
		"@stylistic/no-mixed-spaces-and-tabs": "error",
		"@stylistic/no-multi-spaces": "error",
		"@stylistic/no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxBOF: 0,
				maxEOF: 1,
			},
		],
		"@stylistic/no-trailing-spaces": "error",
		"@stylistic/object-curly-newline": ["error", {
			ObjectExpression: {
				minProperties: 1,
			},
		}],
		"@stylistic/object-curly-spacing": [
			"error",
			"always",
		],
		"@stylistic/object-property-newline": "error",
		"@stylistic/padded-blocks": [
			"error",
			"never",
		],
		"@stylistic/quote-props": [
			"error",
			"as-needed",
		],
		"@stylistic/quotes": [
			"error",
			"double",
		],
		"@stylistic/semi": [
			"error",
			"always",
		],
		"@stylistic/semi-spacing": "error",
		"@stylistic/semi-style": "error",
		"@stylistic/space-before-blocks": "error",
		"@stylistic/space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never",
			},
		],
		"@stylistic/space-in-parens": "error",
		"@stylistic/space-infix-ops": "error",
		"@stylistic/space-unary-ops": "error",
		"@stylistic/spaced-comment": "error",
		"@stylistic/template-curly-spacing": ["error", "never"],
		"@stylistic/wrap-iife": [
			"error",
			"outside",
		],
		camelcase: "error",
		"capitalized-comments": "error",
		"constructor-super": "error",
		curly: [
			"error",
			"multi-line",
			"consistent",
		],
		"dot-notation": "error",
		"extra-rules/no-commented-out-code": "error",
		"for-direction": "error",
		"getter-return": "error",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-param-names": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-types": [
			"error",
			{
				noDefaults: true,
			},
		],
		"jsdoc/require-hyphen-before-param-description": ["error", "never"],
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
		"no-async-promise-executor": "error",
		"no-case-declarations": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-const-assign": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-empty-static-block": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "error",
		"no-extra-boolean-cast": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-global-assign": "error",
		"no-implied-eval": "error",
		"no-import-assign": "error",
		"no-inline-comments": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-lonely-if": "error",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-plusplus": "error",
		"no-prototype-builtins": "error",
		"no-redeclare": "error",
		"no-regex-spaces": "error",
		"no-return-await": "error",
		"no-self-assign": "error",
		"no-setter-return": "error",
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
		"no-shadow-restricted-names": "error",
		"no-sparse-arrays": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unneeded-ternary": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": "error",
		"no-unused-labels": "error",
		"no-unused-vars": "error",
		"no-useless-catch": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"no-warning-comments": "error",
		"no-with": "error",
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
		"one-var": ["error", "never"],
		"prefer-const": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-object-spread": "error",
		"prefer-rest-params": "error",
		"require-await": "error",
		"require-yield": "error",
		"sort-keys": "error",
		"symbol-description": "error",
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
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-await-expression-member": "error",
		"unicorn/no-document-cookie": "error",
		"unicorn/no-empty-file": "error",
		"unicorn/no-for-loop": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-process-exit": "error",
		"unicorn/no-static-only-class": "error",
		"unicorn/no-thenable": "error",
		"unicorn/no-unnecessary-await": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"unicorn/no-useless-spread": "error",
		"unicorn/number-literal-case": "error",
		"unicorn/numeric-separators-style": [
			"error",
			{
				onlyIfContainsSeparator: true,
			},
		],
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-flat": "error",
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-at": "error",
		"unicorn/prefer-code-point": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-export-from": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-json-parse-buffer": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-node-protocol": "error",
		"unicorn/prefer-object-from-entries": "error",
		"unicorn/prefer-object-has-own": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-top-level-await": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/relative-url-style": ["error", "always"],
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		"unicorn/require-post-message-target-origin": "error",
		"unicorn/switch-case-braces": "error",
		"unicorn/template-indent": [
			"error",
			{
				comments: [
					"HTML",
					"indent",
				],
				functions: [
					"dedent",
					"stripIndent",
				],
				tags: [
					"outdent",
					"dedent",
					"gql",
					"sql",
					"html",
					"styled",
				],
			},
		],
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",
		"use-isnan": "error",
		"valid-typeof": "error",
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
