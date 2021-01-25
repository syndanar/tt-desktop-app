module.exports = {
  env: {
    browser: true,
    es2017: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
};
