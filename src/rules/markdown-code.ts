import { defineConfig } from "eslint/config";

export const markdownCodeOverride = defineConfig({
	files: [
		"**/*.md/**",
	],
	rules: {
		"@stylistic/eol-last": "off",
		"@stylistic/no-multiple-empty-lines": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"no-undef": "off",
		"no-unused-vars": "off",
		"unicorn/filename-case": "off",
	},
});
