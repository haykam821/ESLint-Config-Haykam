import { Linter } from "eslint";

module.exports = {
	files: [
		"*.md",
	],
	processor: "markdown/markdown",
} satisfies Linter.ConfigOverride;
