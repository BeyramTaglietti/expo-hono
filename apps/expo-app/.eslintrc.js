module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/no-unresolved": "off",
  },
  ignorePatterns: ["node_modules/", "metro.config.js", "babel.config.js"],
};
