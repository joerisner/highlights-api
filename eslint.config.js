import js from '@eslint/js';
import globals from 'globals';

export default [
  // Use ESLint recommended
  js.configs.recommended,
  {
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
    rules: {
      'max-nested-callbacks': ['error', 2],
      'no-return-await': 'error',
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
    }
  }
];
