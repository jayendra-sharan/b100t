// eslint.config.mjs
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslintParser from '@typescript-eslint/parser';
import vitest from 'eslint-plugin-vitest';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        JSX: 'readonly',
        React: 'readonly',
        ...vitest.environments.globals,
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      vitest,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Recommended rules
      ...eslintPluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'prettier/prettier': 'error',
    },
    ignores: ['node_module', 'dist'],
  },
  eslintConfigPrettier,
];
