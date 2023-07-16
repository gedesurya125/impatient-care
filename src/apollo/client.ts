import { ApolloClient, InMemoryCache } from '@apollo/client';

const serverUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`
  : process.env.NEXT_PUBLIC_SERVER_URL;

const client = new ApolloClient({
  uri: serverUrl,
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
