import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.code.createMany({
    data: [
      {
        code: 'EUIC01',
        nama: 'Badan Hukum',
      },
      {
        code: 'EUIC02',
        nama: 'EUIC Session/Year End/Midyear',
      },
      {
        code: 'EUIC03',
        nama: 'EUIC Executive Committee',
      },
      {
        code: 'EUIC04',
        nama: 'EUIC Administrative Committee',
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
