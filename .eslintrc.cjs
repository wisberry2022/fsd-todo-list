module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@kvadrofilii/fsd"],
  rules: {
    "@kvadrofilii/fsd/path-checker": "warn",
    "@kvadrofilii/fsd/public-api-imports": "warn",
    "@kvadrofilii/fsd/layer-imports": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
