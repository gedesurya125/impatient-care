import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";


const PATIENTS_NUMBER = 10

export async function seed(prismaClient: PrismaClient) {

  const patientsData = []
  for (let i = 0; i < PATIENTS_NUMBER; i++) {
    patientsData.push({
      name: faker.name.fullName(),
      age: faker.datatype.number({ min: 10, max: 70 }),
      gender: faker.name.gender()
    })
  }


  await prismaClient.patient.createMany({
    data: patientsData
  })

}
