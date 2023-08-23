module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    page: true,
    browser: true,
    jestPuppeteer: true,
  },
  rules: {
    "class-methods-use-this": "off",
    "no-console": "warn",
    "no-param-reassign": ["error", { props: false }],
    "no-trailing-spaces": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        consistent: true,
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "prettier/prettier": ["error"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
