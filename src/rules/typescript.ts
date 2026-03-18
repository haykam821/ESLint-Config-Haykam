import { Linter } from "eslint";

module.exports = {
	files: [
		"**/*.ts",
		"**/*.tsx",
	],
	rules: {
		"jsdoc/no-types": "error",
		"jsdoc/require-param-type": "off",
	},
} satisfies Linter.ConfigOverride;
