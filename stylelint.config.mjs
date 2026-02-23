/** @type {import('stylelint').Config} */

const config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
    "@stylistic/stylelint-config",
  ],
  plugins: ["stylelint-order", "@stylistic/stylelint-plugin"],
  rules: {
    "@stylistic/indentation": [2, { baseIndentLevel: 1 }],
    "@stylistic/number-leading-zero": "always",
    "color-hex-length": "short",
    "declaration-block-no-redundant-longhand-properties": true,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.css"],
      customSyntax: "postcss",
    },
    {
      files: ["**/*.module.css", "**/*.styled.js", "**/*.styled.tsx"],
      customSyntax: "postcss-styled-syntax",
    },
  ],
};

export default config;
