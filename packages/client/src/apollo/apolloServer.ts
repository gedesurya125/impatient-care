import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import path from 'path';
import { readdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';

// get the __dirname in ES module scope
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

import { resolvers } from './resolvers/index';

const getTypeDefs = () => {
  let typeDefs = '';

  // const typeDefsDir = path.resolve(path.join(dirname, 'typeDefs'));
  const typeDefsDir = path.resolve(path.join('src', 'apollo', 'typeDefs'));

  const gqlFiles = readdirSync(typeDefsDir);
  gqlFiles.forEach((file) => {
    typeDefs += readFileSync(path.join(typeDefsDir, file), {
      encoding: 'utf8',
    });
  });
  return typeDefs;
};

export const apolloServer = new ApolloServer({
  typeDefs: getTypeDefs(),
  resolvers,
  // @ts-ignore
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
