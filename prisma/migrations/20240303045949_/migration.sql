/*
  Warnings:

  - A unique constraint covering the columns `[noLaci]` on the table `ServiceRecord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ServiceRecord_noLaci_key" ON "ServiceRecord"("noLaci");
