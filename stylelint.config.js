/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
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
        ignoreAtRules: ["theme", "apply", "source", "utility", "custom-variant"],
      },
    ],
    "plugin/use-baseline": true,
  },
};
