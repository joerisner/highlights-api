import js from '@eslint/js';
import globals from 'globals';

export default [
  // Use ESLint recommended
  js.configs.recommended,
  {
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
    rules: {
      'max-nested-callbacks': ['error', 3],
      'no-return-await': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
    }
  }
];
