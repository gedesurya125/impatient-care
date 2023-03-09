import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

import type { PatientType } from '../../types/patientTypes';

const PATIENTS_NUMBER = 10;

export async function seed(prismaClient: PrismaClient) {
  const patientsData: PatientType[] = [];
  for (let i = 0; i < PATIENTS_NUMBER; i++) {
    patientsData.push({
      codeAg: faker.random.numeric(5),
      isSamplingComstock: faker.datatype.boolean(),
      roomName: faker.color.human(),
      assessmentDate: faker.date.past().toISOString(),
      roomNumber: faker.random.numeric(5),
      mrsDate: faker.date.past().toISOString(),
      rmNumber: faker.random.numeric(5),
      name: faker.name.fullName(),
      dob: faker.date.past().toISOString(),
      medicalDiagnose: faker.word.noun(),
      diet: faker.word.noun(),
      weightMrs: faker.datatype.number({ min: 40, max: 80 }),
      armCircumference: faker.datatype.number({ min: 40, max: 80 }),
      estimatedWeight: faker.datatype.number({ min: 40, max: 80 }),
      actualWeight: faker.datatype.number({ min: 1, max: 70 }),
      heightMrs: faker.datatype.number({ min: 1, max: 70 }),
      imtOrWaterLow: faker.random.word(),
      imt: faker.datatype.number({ min: 1, max: 70 }),
      waterLow: faker.datatype.number({ min: 1, max: 70 }),
    });
  }

  await prismaClient.patient.createMany({
    data: patientsData,
  });
}
