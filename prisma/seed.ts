// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const user1 = await prisma.user.upsert({
    where: { email: 'david@example.com' },
    update: {},
    create: {
      dni: '123456789',
      name: 'David',
      lastName: 'Mateos',
      email: 'david@example.com',
      birthDate: '1990-01-01',
      lastDate: null,
      phone: '1234567890',
    },
  });

  console.log({ user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
