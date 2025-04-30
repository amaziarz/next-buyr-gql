import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import perfectionist from 'eslint-plugin-perfectionist';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import { join } from 'node:path';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  perfectionist.configs['recommended-natural'],
  prettier,
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.js',
            '.graphqlrc.ts',
            'scripts/*.ts',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  globalIgnores(['src/graphql/*.generated.ts']),
  includeIgnoreFile(join(import.meta.dirname, '.gitignore')),
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
);
