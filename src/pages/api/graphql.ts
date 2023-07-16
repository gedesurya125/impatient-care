import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { apolloServer } from 'apollo/apolloServer';
import { prismaClient } from '../../../prisma/client';

import typeDefs from 'apollo/schemas';
import resolvers from 'apollo/resolvers';
// import allowCors from 'apollo/cors';

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
// });

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    prismaClient,
    req,
    res,
  }),
});

export default handler;
