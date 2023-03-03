import lodash from 'lodash'



import { typeDef as patient, resolvers as patientResolvers } from './patient.js'

const Query = `#graphql
  type Query {
  _empty: String
  }
`


export const typeDefs = [Query, patient]
export const resolvers = lodash.merge({}, patientResolvers)

