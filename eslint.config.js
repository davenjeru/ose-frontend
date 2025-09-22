// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import eslintParserTypeScript from '@typescript-eslint/parser';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';

export default tseslint.config(
  [
    globalIgnores(['dist', 'vite.config.ts', 'vitest.config.ts']),
    {
      files: ['**/*.{tsx,ts}'],
      ...reactPlugin.configs.flat['jsx-runtime'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      languageOptions: {
        parser: eslintParserTypeScript,
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          project: './tsconfig.app.json',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindcss,
        'jsx-a11y': jsxA11y,
        react: reactPlugin,
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        // enable all recommended rules to report an error
        ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
        'simple-import-sort/imports': [
          'error',
          {
            groups: [['^\\u0000', '^@?\\w', '^\\.', '^[^.]']],
          },
        ],
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['class', 'interface', 'enumMember'],
            format: ['PascalCase'],
          },
        ],
        'no-unused-vars': 'off',
        'react/no-children-prop': 'off',
        'react/prop-types': 'off',
        'prefer-regex-literals': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        // This is the acceptable way to handle this: https://github.com/orgs/react-hook-form/discussions/9325#discussioncomment-4060566
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
        'array-callback-return': 'error',
        curly: 'error',
        'default-case': 'error',
        'dot-notation': 'off',
        'eol-last': 'error',
        eqeqeq: ['error', 'smart'],
        'getter-return': 'error',
        'guard-for-in': 'off',
        'id-blacklist': 'off',
        'id-match': 'off',
        'jsx-a11y/alt-text': 'error',
        'keyword-spacing': [
          'error',
          {
            before: true,
            after: true,
          },
        ],
        'linebreak-style': 'off',
        'no-bitwise': 'error',
        'no-console': 'off',
        'no-debugger': 'error',
        'no-empty': 'off',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'off',
        'no-multiple-empty-lines': 'error',
        'no-new-wrappers': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unused-labels': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-escape': 'error',
        'no-var': 'error',
        'quote-props': 'off',
        radix: 'error',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'react/jsx-no-target-blank': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': ['off', 'never'],
      },
      settings: {
        'better-tailwindcss': {
          // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
          entryPoint: 'src/lib/tailwind.css',
        },
      },
    },
  ],
  storybook.configs['flat/recommended'],
  storybook.configs['flat/recommended'],
  eslintPluginPrettierRecommended
);
