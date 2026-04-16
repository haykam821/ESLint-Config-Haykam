import { Linter } from "eslint";

export const markdownCodeOverride = {
	files: [
		"**/*.md/**",
	],
	rules: {
		"@stylistic/eol-last": "off",
		"@stylistic/no-multiple-empty-lines": "off",
		"no-undef": "off",
		"no-unused-vars": "off",
		"unicorn/filename-case": "off",
	},
} satisfies Linter.ConfigOverride;
