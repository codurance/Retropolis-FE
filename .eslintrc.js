module.exports = {
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "comma-dangle": ["warn", "never"],
    "import/prefer-default-export":0,
    'react/jsx-props-no-spreading': ['error', {
      html: "ignore",
      custom: "ignore",
      exceptions: [""],
  }],
  }
};
