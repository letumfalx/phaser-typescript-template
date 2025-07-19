import eslint from "@eslint/js";
import eslintPrettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/**/*"],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  eslintPrettierConfig,
  {
    files: ["vite/*.mjs", "log.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts", "*.mjs"],
    rules: {
      camelcase: ["error", { properties: "never" }],
      eqeqeq: "error",
      "line-between-class-members": "off",
      "no-console": "warn",
      "no-unreachable-loop": "error",
      "no-unused-vars": "off",
      "no-self-compare": "error",
      "prefer-promise-reject-errors": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_\\$",
          varsIgnorePattern: "^_\\$",
        },
      ],
    },
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        sourceType: "module",
        projectService: {
          allowDefaultProject: [
            ".stylelintrc.mjs",
            "eslint.config.mjs",
            "log.mjs",
            "vite/*.mjs",
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
