module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    semi: [2, 'always'],
    'no-unused-vars': 'warn',
  },
};
