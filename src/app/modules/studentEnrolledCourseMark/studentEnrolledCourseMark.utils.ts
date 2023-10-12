import { Course, StudentEnrolledCourse } from '@prisma/client';

const getGradeFromMarks = (marks: number) => {
  const result = {
    grade: '',
    points: 0,
  };
  if (marks >= 0 && marks <= 39) {
    result.grade = 'F';
    result.points = 0;
  } else if (marks >= 40 && marks <= 50) {
    result.grade = 'D';
    result.points = 2.0;
  } else if (marks >= 51 && marks <= 60) {
    result.grade = 'C';
    result.points = 2.5;
  } else if (marks >= 61 && marks <= 70) {
    result.grade = 'B';
    result.points = 3.0;
  } else if (marks >= 71 && marks <= 80) {
    result.grade = 'A';
    result.points = 3.5;
  } else if (marks >= 81 && marks <= 90) {
    result.grade = 'A+';
    result.points = 4.0;
  }

  return result;
};
const calcCGPAandGrade = (
  payload: (StudentEnrolledCourse & { course: Course })[]
) => {
  if (payload.length === 0) {
    return {
      totalCompletedCredit: 0,
      cgpa: 0,
    };
  }
  let totalCGPA = 0;
  let totalCredit = 0;
  for (const grade of payload) {
    totalCGPA += grade.point || 0;
    totalCredit += grade.course.credits || 0;
  }
  const avgCGPA = Number((totalCGPA / payload.length).toFixed(2));
  console.log(avgCGPA);

  return {
    totalCompletedCredit: totalCredit,
    cgpa: avgCGPA,
  };
};

export const StudentEnrolledCourseMarkUtils = {
  getGradeFromMarks,
  calcCGPAandGrade,
};
