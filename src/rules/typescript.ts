import { Linter } from "eslint";

export const typeScriptOverride = {
	files: [
		"**/*.ts",
		"**/*.tsx",
	],
	rules: {
		"jsdoc/no-types": "error",
		"jsdoc/require-param-type": "off",
	},
} satisfies Linter.ConfigOverride;
