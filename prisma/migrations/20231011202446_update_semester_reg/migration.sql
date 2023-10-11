/*
  Warnings:

  - You are about to drop the column `startData` on the `semester_registration` table. All the data in the column will be lost.
  - Added the required column `startDate` to the `semester_registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "semester_registration" DROP COLUMN "startData",
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
