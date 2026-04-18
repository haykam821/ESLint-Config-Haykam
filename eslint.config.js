import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";

import config from "./dist/eslint-config.js";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, ".gitignore"),
	...config,
];
