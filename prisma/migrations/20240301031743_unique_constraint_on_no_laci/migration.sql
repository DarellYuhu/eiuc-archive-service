/*
  Warnings:

  - A unique constraint covering the columns `[noLaci]` on the table `Pensiun` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[noLaci]` on the table `Sertifikat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[noLaci]` on the table `Surat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pensiun_noLaci_key" ON "Pensiun"("noLaci");

-- CreateIndex
CREATE UNIQUE INDEX "Sertifikat_noLaci_key" ON "Sertifikat"("noLaci");

-- CreateIndex
CREATE UNIQUE INDEX "Surat_noLaci_key" ON "Surat"("noLaci");
