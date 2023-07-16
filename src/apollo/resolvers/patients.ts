import { PrismaClient } from '@prisma/client';

export const patientResolvers = {
  Query: {
    patients: async (parent: any, args: any, context: any, info: any) => {
      const cursor = args?.input?.cursor;
      const take = args?.input?.take;
      const order = args?.input?.order;

      console.log('patients fetch args', args);

      const cursorProps = !!cursor
        ? {
            cursor: {
              createdAt: new Date(Number(cursor)),
            },
          }
        : undefined;

      return await context.prismaClient.patient.findMany({
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
      { input }: { input: any },
      context: any,
      info: any
    ) => {
      const patient = await context.prismaClient.patient.create({
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
    updatePatient: async (
      parent: any,
      { input }: { input: any },
      { prismaClient }: { prismaClient: PrismaClient },
      info: any
    ) => {
      const { id, ...rest } = input;

      const patient = await prismaClient?.patient?.update({
        where: {
          id,
        },
        data: {
          ...rest,
        },
      });

      return {
        success: true,
        message: 'patient updated',
        data: patient,
      };
    },
  },
};
