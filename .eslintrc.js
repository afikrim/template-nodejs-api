module.exports = {
  env: {
    commonjs: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-unused-vars': 'warn'
  }
}
