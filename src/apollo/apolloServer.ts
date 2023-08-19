import { ApolloServer } from '@apollo/server';

import path from 'path';
import { readdirSync, readFileSync } from 'fs';

import { resolvers } from './resolvers/index';

// Merge all the graphql typeDefs from folder typeDefs
const getTypeDefs = () => {
  let typeDefs = '';

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
});
