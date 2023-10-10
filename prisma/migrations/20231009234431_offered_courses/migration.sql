/*
  Warnings:

  - You are about to drop the `course_offer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "course_offer" DROP CONSTRAINT "course_offer_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "course_offer" DROP CONSTRAINT "course_offer_courseId_fkey";

-- DropForeignKey
ALTER TABLE "course_offer" DROP CONSTRAINT "course_offer_semesterRegistrationId_fkey";

-- DropTable
DROP TABLE "course_offer";

-- CreateTable
CREATE TABLE "offeredCourse" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "courseId" TEXT NOT NULL,
    "academicDepartmentId" TEXT NOT NULL,
    "semesterRegistrationId" TEXT NOT NULL,

    CONSTRAINT "offeredCourse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "offeredCourse" ADD CONSTRAINT "offeredCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offeredCourse" ADD CONSTRAINT "offeredCourse_academicDepartmentId_fkey" FOREIGN KEY ("academicDepartmentId") REFERENCES "academic_department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "offeredCourse" ADD CONSTRAINT "offeredCourse_semesterRegistrationId_fkey" FOREIGN KEY ("semesterRegistrationId") REFERENCES "semester_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
