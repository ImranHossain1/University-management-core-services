/*
  Warnings:

  - You are about to drop the column `RoomId` on the `offered_course_class_schedules` table. All the data in the column will be lost.
  - Added the required column `roomId` to the `offered_course_class_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "offered_course_class_schedules" DROP CONSTRAINT "offered_course_class_schedules_RoomId_fkey";

-- AlterTable
ALTER TABLE "offered_course_class_schedules" DROP COLUMN "RoomId",
ADD COLUMN     "roomId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "offered_course_class_schedules" ADD CONSTRAINT "offered_course_class_schedules_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
