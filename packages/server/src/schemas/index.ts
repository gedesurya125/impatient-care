import lodash from 'lodash'
import { typeDef as patient, resolvers as patientResolvers } from './patient.js'

const Query = `#graphql
  type Query {
  _empty: String
  }
`
const Mutation = `#graphql
  type Mutation{
  _empty: String
  }
`


export const typeDefs = [Query, Mutation, patient]
export const resolvers = lodash.merge({}, patientResolvers)

