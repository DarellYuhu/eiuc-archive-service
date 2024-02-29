/*
  Warnings:

  - A unique constraint covering the columns `[noLaci]` on the table `Administrasi` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Administrasi_noLaci_key" ON "Administrasi"("noLaci");
