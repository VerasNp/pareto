import prettierPlugin from "eslint-plugin-prettier"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import prettierConfig from "eslint-config-prettier"
import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import { ESLint } from "eslint"
import vitest from "@vitest/eslint-plugin"

export default defineConfig([
	js.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: {
			"@typescript-eslint": tseslint as unknown as ESLint.Plugin,
			prettier: prettierPlugin,
			vitest: vitest as unknown as ESLint.Plugin,
		},
		languageOptions: {
			parser: tsparser,
			sourceType: "module",
		},
		rules: {
			...tseslint.configs.recommended.rules,
			...prettierConfig.rules,
			...vitest.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": "warn",
			"no-console": "warn",
			quotes: ["error", "double"],
			"prettier/prettier": "error",
		},
	},
])
