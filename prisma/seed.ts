import { prismaClient } from './client';
import { seed as seedPatientData } from './seed/patient';

async function main() {
  console.log('seeding patient');
  await seedPatientData(prismaClient);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
