import { patientResolvers } from './patients';

export const resolvers = {
  Query: {
    ...patientResolvers.Query,
  },
  Mutation: {
    ...patientResolvers.Mutation,
  },
};
