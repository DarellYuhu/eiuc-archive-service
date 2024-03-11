/*
  Warnings:

  - You are about to drop the column `namaDepartment` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `institusiId` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the column `noLaci` on the `ServiceRecord` table. All the data in the column will be lost.
  - You are about to drop the `Administrasi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Code` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DaerahKonfrens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FisikBangunan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Huruf` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Institusi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nomor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pensiun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sertifikat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Surat` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[location]` on the table `ServiceRecord` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentName` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institutionId` to the `ServiceRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `ServiceRecord` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ServiceRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CertificateType" AS ENUM ('original', 'copy');

-- CreateEnum
CREATE TYPE "LetterType" AS ENUM ('IN', 'OUT', 'IN_OUT');

-- DropForeignKey
ALTER TABLE "Administrasi" DROP CONSTRAINT "Administrasi_codeId_fkey";

-- DropForeignKey
ALTER TABLE "Administrasi" DROP CONSTRAINT "Administrasi_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Pensiun" DROP CONSTRAINT "Pensiun_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Sertifikat" DROP CONSTRAINT "Sertifikat_daerahKonfrensId_fkey";

-- DropForeignKey
ALTER TABLE "Sertifikat" DROP CONSTRAINT "Sertifikat_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Sertifikat" DROP CONSTRAINT "Sertifikat_fisikBangunanId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_institusiId_fkey";

-- DropForeignKey
ALTER TABLE "Surat" DROP CONSTRAINT "Surat_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Surat" DROP CONSTRAINT "Surat_fileId_fkey";

-- DropIndex
DROP INDEX "ServiceRecord_noLaci_key";

-- AlterTable
ALTER TABLE "Department" DROP COLUMN "namaDepartment",
ADD COLUMN     "departmentName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "institusiId",
DROP COLUMN "keterangan",
DROP COLUMN "nama",
DROP COLUMN "noLaci",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "institutionId" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Administrasi";

-- DropTable
DROP TABLE "Code";

-- DropTable
DROP TABLE "DaerahKonfrens";

-- DropTable
DROP TABLE "FisikBangunan";

-- DropTable
DROP TABLE "Huruf";

-- DropTable
DROP TABLE "Institusi";

-- DropTable
DROP TABLE "Nomor";

-- DropTable
DROP TABLE "Pensiun";

-- DropTable
DROP TABLE "Sertifikat";

-- DropTable
DROP TABLE "Surat";

-- DropEnum
DROP TYPE "JenisSertifikat";

-- DropEnum
DROP TYPE "JenisSurat";

-- CreateTable
CREATE TABLE "Administration" (
    "id" TEXT NOT NULL,
    "recordGroupId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "dateSpanOfRecord" TEXT,
    "author" TEXT,
    "location" TEXT NOT NULL,
    "retantionSchedule" INTEGER,
    "fileId" TEXT,

    CONSTRAINT "Administration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordGroup" (
    "id" SERIAL NOT NULL,
    "recordGroup" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RecordGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConferenceArea" (
    "id" TEXT NOT NULL,
    "conferenceAreaName" TEXT NOT NULL,

    CONSTRAINT "ConferenceArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhysicalBuilding" (
    "id" TEXT NOT NULL,
    "physicalName" TEXT NOT NULL,

    CONSTRAINT "PhysicalBuilding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alphabet" (
    "id" CHAR(1) NOT NULL,

    CONSTRAINT "Alphabet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "institutionName" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Number" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Number_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Retirement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rate" "Rate" NOT NULL,
    "status" "Status" NOT NULL,
    "description" TEXT,
    "location" TEXT NOT NULL,
    "fileId" TEXT,

    CONSTRAINT "Retirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "conferenceAreaid" TEXT NOT NULL,
    "congregation" TEXT NOT NULL,
    "type" "CertificateType",
    "certificate" TEXT,
    "physicalBuildingId" TEXT NOT NULL,
    "value" TEXT,
    "description" TEXT,
    "location" TEXT NOT NULL,
    "fileId" TEXT,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Letter" (
    "id" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "type" "LetterType" NOT NULL,
    "dateSpanOfRecord" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "topic" TEXT,
    "location" TEXT NOT NULL,
    "fileId" TEXT,

    CONSTRAINT "Letter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administration_location_key" ON "Administration"("location");

-- CreateIndex
CREATE UNIQUE INDEX "RecordGroup_recordGroup_key" ON "RecordGroup"("recordGroup");

-- CreateIndex
CREATE UNIQUE INDEX "Number_name_key" ON "Number"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Retirement_location_key" ON "Retirement"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_location_key" ON "Certificate"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Letter_location_key" ON "Letter"("location");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceRecord_location_key" ON "ServiceRecord"("location");

-- AddForeignKey
ALTER TABLE "Administration" ADD CONSTRAINT "Administration_recordGroupId_fkey" FOREIGN KEY ("recordGroupId") REFERENCES "RecordGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administration" ADD CONSTRAINT "Administration_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retirement" ADD CONSTRAINT "Retirement_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_conferenceAreaid_fkey" FOREIGN KEY ("conferenceAreaid") REFERENCES "ConferenceArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_physicalBuildingId_fkey" FOREIGN KEY ("physicalBuildingId") REFERENCES "PhysicalBuilding"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
