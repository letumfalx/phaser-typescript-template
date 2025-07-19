import postCssScss from "postcss-scss";

/** @type {import("stylelint").Config} */
const stylelintConfig = {
  extends: ["stylelint-config-standard-scss"],
  customSyntax: postCssScss,
  plugins: ["stylelint-order"],
  rules: {
    "at-rule-no-unknown": null,
    "selector-class-pattern": [
      "^([a-z][a-zA-Z0-9]+)$",
      {
        resolveNestedSelectors: true,
        message: "Expected class selector to be camelCase",
      },
    ],
    "order/properties-alphabetical-order": true,
    "scss/at-rule-no-unknown": true,
  },
};

export default stylelintConfig;
