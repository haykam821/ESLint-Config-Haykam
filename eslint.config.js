import { compat } from "./src/utils/compat.ts";
import config from "./src/eslint-config.ts";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, ".gitignore"),
	...compat.extends("plugin:@typescript-eslint/eslint-recommended"),
	...compat.extends("plugin:@typescript-eslint/recommended"),
	...config,
];
