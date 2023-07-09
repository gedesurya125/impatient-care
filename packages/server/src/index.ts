import { startStandaloneServer } from '@apollo/server/standalone';
import { prismaClient } from '../prisma/client.js';
import { apolloServer } from './apollo/apolloServer.js';

const port = Number(process.env.PORT) || 4000;

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(apolloServer, {
  listen: { port },
  context: async ({ req, res }) => ({
    prismaClient,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
