import { Linter } from "eslint";

export const markdownOverride = {
	files: [
		"**/*.md",
	],
	processor: "markdown/markdown",
} satisfies Linter.ConfigOverride;
