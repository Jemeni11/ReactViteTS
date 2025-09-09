/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order", "stylelint-prettier/recommended"],
  plugins: ["stylelint-plugin-use-baseline"],
  rules: {
    "color-no-invalid-hex": true,
    "import-notation": "string",
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["theme"],
      },
    ],
    "plugin/use-baseline": true,
  },
};
