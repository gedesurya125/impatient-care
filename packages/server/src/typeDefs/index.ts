export const typeDefs = `#graphql
type Patient {
  name:String
  age:Int
  gender: String
}

type Query {
  patients
}
`;
