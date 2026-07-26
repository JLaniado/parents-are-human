module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "simple-import-sort", "unused-imports"],
  settings: { react: { version: "detect" } },
  rules: {
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
