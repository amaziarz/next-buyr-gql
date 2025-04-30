import type { CodegenConfig } from '@graphql-codegen/cli';

import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config = {
  generates: {
    'src/graphql/': defineConfig({
      emitLegacyCommonJSImports: false,
      scalarsOverrides: {
        ID: {
          type: 'string',
        },
      },
      typesPluginsConfig: {
        contextType: '../utils/context.ts#GraphQLContext',
        optionalInfoArgument: true,
        useTypeImports: true,
      },
    }),
  },
  hooks: {
    afterAllFileWrite: ['npx prettier --write'],
  },
  overwrite: true,
  schema: './src/schema/**/*.graphql',
} satisfies CodegenConfig;

export default config;
