/*
  Warnings:

  - You are about to drop the column `noFile` on the `ServiceRecord` table. All the data in the column will be lost.
  - Added the required column `noLaci` to the `ServiceRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceRecord" DROP COLUMN "noFile",
ADD COLUMN     "noLaci" TEXT NOT NULL;
