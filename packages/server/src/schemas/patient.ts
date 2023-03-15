export const typeDef = `#graphql
  type Patient {
    id: ID!
    createdAt: String
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
  }

  enum OrderType {
    ASC
    DESC
  }

  input fetchPatients {
    take: Int
    cursor: ID
    order: OrderType
  }

  extend type Query {
    patients(input: fetchPatients): [Patient]
  }

  input CreatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
  }

  input UpdatePatient {
    codeAg:String
    isSamplingComstock: Boolean
    roomName:String
    assessmentDate:String
    roomNumber: String
    mrsDate: String
    rmNumber: String
    name:String
    dob:String
    medicalDiagnose: String
    diet:String
    weightMrs:String
    armCircumference:Float
    estimatedWeight:Float
    actualWeight:Float
    heightMrs:Float
    imtOrWaterLow:String
    imt:Float
    waterLow:Float
  }

  type DeletePatientResponse {
    id:ID!
  }

  type CreatePatientResponse{
    success: Boolean!
    message: String!
    data: Patient
  }

  extend type Mutation {
    createPatient(input:CreatePatient!):CreatePatientResponse!
    updatePatient(id:ID!, input:UpdatePatient!):CreatePatientResponse!
    deletePatient(id:ID!):DeletePatientResponse!
  }
`;

export const resolvers = {
  Query: {
    patients: async (parent: any, args: any, contextValue: any, info: any) => {
      const cursor = args?.input?.cursor;
      const take = args?.input?.take;
      const order = args?.input?.order;

      console.log('this is the take', take, order, cursor, args);

      const cursorProps = !!cursor
        ? {
            cursor: {
              id: cursor,
            },
          }
        : undefined;

      return await contextValue.prismaClient.patient.findMany({
        take: !!take ? take : 10,
        skip: !!cursor ? 1 : 0,
        ...cursorProps,
        orderBy: [
          {
            createdAt: order === 'ASC' ? 'asc' : 'desc',
          },
        ],
      });
    },
  },
  Mutation: {
    createPatient: async (
      parent: any,
      { input },
      contextValue: any,
      info: any
    ) => {
      console.log('hi i am called mutation create patient');
      const patient = await contextValue.prismaClient.patient.create({
        data: input,
      });
      if (patient?.id)
        return {
          success: true,
          message: 'patient created',
          data: patient,
        };
      return {
        success: false,
        message: 'patient not created',
        data: {},
      };
    },
  },
};
