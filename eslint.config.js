import { FlatCompat } from "@eslint/eslintrc";
import config from "./src/eslint-config.ts";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
	includeIgnoreFile(gitignorePath, ".gitignore"),
	...compat.extends("plugin:@typescript-eslint/eslint-recommended"),
	...compat.extends("plugin:@typescript-eslint/recommended"),
	...config,
];
