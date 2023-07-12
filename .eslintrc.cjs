module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    'google'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
    'max-len': ['error', {'code': 120, 'ignoreComments': true}],
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
