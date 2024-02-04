-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERATOR', 'USER');

-- CreateEnum
CREATE TYPE "Rate" AS ENUM ('Single', 'Family');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Inactive');

-- CreateEnum
CREATE TYPE "JenisSertifikat" AS ENUM ('original', 'copy');

-- CreateEnum
CREATE TYPE "JenisSurat" AS ENUM ('IN', 'OUT', 'IN_OUT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrasi" (
    "id" TEXT NOT NULL,
    "codeId" TEXT NOT NULL,
    "topik" TEXT NOT NULL,
    "tahun" TEXT,
    "asal" TEXT,
    "noLaci" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "Administrasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Code" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaerahKonfrens" (
    "id" TEXT NOT NULL,
    "namaDaerahKonfrens" TEXT NOT NULL,

    CONSTRAINT "DaerahKonfrens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "namaDepartment" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FisikBangunan" (
    "id" TEXT NOT NULL,
    "namaFisik" TEXT NOT NULL,

    CONSTRAINT "FisikBangunan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Huruf" (
    "id" CHAR(1) NOT NULL,

    CONSTRAINT "Huruf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institusi" (
    "id" TEXT NOT NULL,
    "namaInstitusi" TEXT NOT NULL,

    CONSTRAINT "Institusi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nomor" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Nomor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pensiun" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "rate" "Rate" NOT NULL,
    "status" "Status" NOT NULL,
    "keterangan" TEXT,
    "noLaci" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "Pensiun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sertifikat" (
    "id" TEXT NOT NULL,
    "daerahKonfrensId" TEXT NOT NULL,
    "jemaat" TEXT NOT NULL,
    "jenis" "JenisSertifikat",
    "sertifikat" TEXT,
    "fisikBangunanId" TEXT NOT NULL,
    "value" TEXT,
    "keterangan" TEXT,
    "noLaci" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "Sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceRecord" (
    "id" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "institusiId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "keterangan" TEXT,
    "noFile" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "ServiceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surat" (
    "id" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "jenis" "JenisSurat" NOT NULL,
    "tahun" TEXT NOT NULL,
    "asal" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "noLaci" TEXT NOT NULL,
    "gambar" TEXT,

    CONSTRAINT "Surat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Code_code_key" ON "Code"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Nomor_nama_key" ON "Nomor"("nama");

-- AddForeignKey
ALTER TABLE "Administrasi" ADD CONSTRAINT "Administrasi_codeId_fkey" FOREIGN KEY ("codeId") REFERENCES "Code"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sertifikat" ADD CONSTRAINT "Sertifikat_daerahKonfrensId_fkey" FOREIGN KEY ("daerahKonfrensId") REFERENCES "DaerahKonfrens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sertifikat" ADD CONSTRAINT "Sertifikat_fisikBangunanId_fkey" FOREIGN KEY ("fisikBangunanId") REFERENCES "FisikBangunan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_institusiId_fkey" FOREIGN KEY ("institusiId") REFERENCES "Institusi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Surat" ADD CONSTRAINT "Surat_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
