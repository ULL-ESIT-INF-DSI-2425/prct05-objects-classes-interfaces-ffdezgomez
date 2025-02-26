import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import tsdoc from "eslint-plugin-tsdoc";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["/.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      tsdoc,
    },
  },
  {
    rules: {
      "prefer-const": "off",  // Para permitir variables que no se reasignan
      "tsdoc/syntax": "warn", // Para que avise si no se sigue la sintaxis de TSDoc
      "no-empty": "off",      // Para permitir funciones vacías
      "no-unused-vars": "warn"
    }
  },
  { ignores: [
    "eslint.config.mjs",
    "dist/",
    "docs/*",
  ]
  },
];