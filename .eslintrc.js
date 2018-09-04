module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  rules: {
    // allow async-await
    'space-before-function-paren': [
      1,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'generator-star-spacing': 'off',
    'spaced-comment': 'off',
    'indent': ['warn', 4],
    'no-unused-vars': 'warn',
    'semi': ['warn', 'never'],
    // 不允许多个空行
    'no-multiple-empty-lines': ["warn", { "max": 2}],
    // 要求或禁止使用拖尾逗号
    "comma-dangle": ["warn", "never"],
    // 禁止出现多个空格
    'no-multi-spaces': "off",
    // allow debugger during development
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 单引号，双引号
    'quotes': ['error', 'single'],
    "no-console": 'off',
  }
}
