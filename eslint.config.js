import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    extends: [js.configs.recommended], // Use @eslint/js recommended rules
    languageOptions: { globals: globals.browser },
    settings: {
      react: { version: "detect" },
    },
  },
  pluginReact.configs.flat.recommended,
]);
