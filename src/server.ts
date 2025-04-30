import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { resolvers } from './graphql/resolvers.generated.js';
import { typeDefs } from './graphql/typeDefs.generated.js';
import { createContext, type GraphQLContext } from './utils/context.js';

const server = new ApolloServer<GraphQLContext>({
  resolvers,
  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  context: createContext,
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
