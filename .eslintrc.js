// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'semi': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'arrow-spacing': 0,
    'no-floating-decimal': 0,
    'indent': 0,
    'key-spacing': 0,
    'space-in-parens': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}