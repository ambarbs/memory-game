module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": 0,
    "react/no-array-index-key": 0,
    "import/prefer-default-export": 0,
    "prettier/prettier": ["error"],
  },
};
