import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        // fields: {
        //   patients: {
        //     keyArgs: false,
        //     merge(existing = [], incoming) {
        //       return [...existing, ...incoming];
        //     },
        //   },
        // },
      },
    },
  }),
});

export default client;
