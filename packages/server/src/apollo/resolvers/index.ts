import { patientResolvers } from './patients.js';

export const resolvers = {
  Query: {
    ...patientResolvers.Query,
  },
  Mutation: {
    ...patientResolvers.Mutation,
  },
};
