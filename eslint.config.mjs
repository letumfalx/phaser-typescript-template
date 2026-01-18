import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import typescript from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    rules: {
      camelcase: [
        "error",
        {
          properties: "never",
        },
      ],
      eqeqeq: "error",
      "lines-between-class-members": "off",
      "no-console": "warn",
      "no-self-compare": "error",
      "no-unreachable-loop": "error",
      "no-unused-vars": "off",
      "prefer-promise-reject-errors": "error",
      "sort-keys": [
        "error",
        "asc",
        {
          allowLineSeparatedGroups: true,
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_\\$",
          varsIgnorePattern: "^_\\$",
        },
      ],
    },
  },
  prettier, // Turn off all rules that might conflict with Prettier
];
