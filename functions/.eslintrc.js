module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },

  // new adding 1
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },

  // new edding 2
  parser: ["@babel/eslint-parser"],
};
