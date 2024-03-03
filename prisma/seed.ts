import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({
    data: [
      {
        namaLengkap: 'administrator',
        username: 'admin',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'ADMIN',
      },
      {
        namaLengkap: 'operator',
        username: 'operator',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'OPERATOR',
      },
      {
        namaLengkap: 'Happy Sibilang',
        username: 'sibilang',
        password:
          '$2b$10$8E690c0IzPDH/qtIIlDS6eDDRdKx9tjJg3L0wxhoDxGQdkSu7DntS',
        role: 'USER',
      },
    ],
  });

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

  await prisma.fisikBangunan.createMany({
    data: [
      {
        namaFisik: 'Permanen',
      },
      {
        namaFisik: 'Semi Permanen',
      },
      {
        namaFisik: 'Tanah Kosong',
      },
      {
        namaFisik: 'Permanen dan Lapangan',
      },
      {
        namaFisik: 'Tidak Jelas',
      },
    ],
  });

  await prisma.daerahKonfrens.createMany({
    data: [
      {
        namaDaerahKonfrens: 'WPM',
      },
      {
        namaDaerahKonfrens: 'UNKLAB',
      },
      {
        namaDaerahKonfrens: 'NMC',
      },
      {
        namaDaerahKonfrens: 'PM',
      },
      {
        namaDaerahKonfrens: 'EUIC',
      },
      {
        namaDaerahKonfrens: 'NIM',
      },
      {
        namaDaerahKonfrens: 'MC',
      },
      {
        namaDaerahKonfrens: 'CSM',
      },
      {
        namaDaerahKonfrens: 'MAH',
      },
      {
        namaDaerahKonfrens: 'SSC',
      },
      {
        namaDaerahKonfrens: 'MM',
      },
      {
        namaDaerahKonfrens: 'LTM',
      },
      {
        namaDaerahKonfrens: 'BGM',
      },
      {
        namaDaerahKonfrens: 'NMBM',
      },
      {
        namaDaerahKonfrens: 'AECS',
      },
      {
        namaDaerahKonfrens: 'MNMC',
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
