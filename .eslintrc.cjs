// eslint-disable-next-line no-undef
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },

  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.

      parserOptions: {
        project: './tsconfig.json' // Specify it only for TypeScript files
      }
    }
  ],
  ignorePatterns: ['vite.config.ts'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // ...
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-misused-promises': 0
  }
})
