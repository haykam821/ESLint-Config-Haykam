import { defineConfig } from "eslint/config";

export const typeScriptOverride = defineConfig({
	files: [
		"**/*.ts",
		"**/*.tsx",
	],
	rules: {
		"jsdoc/no-types": "error",
		"jsdoc/require-param-type": "off",
	},
});
