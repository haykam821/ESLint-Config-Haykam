import { defineConfig } from "eslint/config";

export const markdownOverride = defineConfig({
	files: [
		"**/*.md",
	],
	processor: "markdown/markdown",
});
