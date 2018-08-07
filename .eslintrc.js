module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  globals: {},
  plugins: [],
  extends: 'eslint:recommended',
  rules: {
    eqeqeq: 1,
    'no-console': 0,
    'space-before-function-paren': [
      1,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'generator-star-spacing': 0,
    'spaced-comment': 1,
    indent: [1, 2],
    'no-unused-vars': 1,
    semi: [1, 'never'],
    'no-multiple-empty-lines': [1, { max: 2 }],
    'comma-dangle': [1, 'never'],
    'no-multi-spaces': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 1
  }
}
