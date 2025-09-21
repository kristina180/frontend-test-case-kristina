import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
]);
