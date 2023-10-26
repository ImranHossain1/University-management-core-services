# university-management-core-service

Initial URL: http://localhost:3002/api/v1

## Academic Semester:

- (POST) : /academic-semesters (Authenticated by Admin and Super admin)

```json
sample input:
{
  "year": 2031,
  "title": "Summer",
  "code": "02",
  "startMonth": "january",
  "endMonth": "June"
}
```

- (GET) : /academic-semesters (OPEN ROUTE)
- (GET) : /academic-semesters/:id (OPEN ROUTE)
- (PATCH) : /academic-semesters/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
  "year": 2031,
  "title": "Summer",
  "code": "02",
  "startMonth": "january",
  "endMonth": "June"
}
```

- (DELETE) : /academic-semesters/:id (Authenticated by Admin and Super admin)

## Academic Faculty:

- (POST) : /academic-faculties/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Department of CSE"
}
```

- (GET) : /academic-faculties/ (OPEN ROUTE)
- (GET) : /academic-faculties/:id (OPEN ROUTE)
- (PATCH) : /academic-faculties/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Department of CSE"
}
```

- (DELETE) : /academic-faculties/:id (Authenticated by Admin and Super admin)

## Academic Department:

- (POST) : /academic-department/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Software Engineering",
    "academicFacultyId": "56a4223b-db24-41e1-904f-a58033f2c4c8"
}
```

- (GET): /academic-department/ (OPEN ROUTE)
- (GET): /academic-department/:id (OPEN ROUTE)
- (PATCH): /academic-department/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Programming Language"
}
```

- (DELETE) : /academic-department/:id (Authenticated by Admin and Super admin)

## Building:

- (POST) : /buildings/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Building D"
}
```

- (GET): /buildings/ (OPEN ROUTE)
- (GET): /buildings/:id (OPEN ROUTE)
- (PATCH): /buildings/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Building D"
}
```

- (DELETE) : /buildings/:id (Authenticated by Admin and Super admin)

## Rooms:

- (POST) : /rooms/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "roomNumber": "501",
    "floor": "5",
    "buildingId": "dfdf3121-2dd9-4684-be63-bced367de027"
}
```

- (GET): /rooms/ (OPEN ROUTE)
- (GET): /rooms/:id (OPEN ROUTE)
- (PATCH): /rooms/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "roomNumber": "501",
    "floor": "5",
    "buildingId": "dfdf3121-2dd9-4684-be63-bced367de027"
}
```

- (DELETE) : /rooms/:id (Authenticated by Admin and Super admin)

## Courses:

- (POST) : /courses/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Advance database",
    "code": "CSE118",
    "credits": 3,
    "preRequisiteCourses": [
        {
            "courseId": "1e2aba3f-9153-4c5f-a3f4-003ba2be5355"
        }
    ]
}
```

- (GET): /courses/ (OPEN ROUTE)
- (GET): /courses/:id (OPEN ROUTE)
- (PATCH): /courses/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Advance database",
    "code": "CSE118",
    "credits": 3,
    "preRequisiteCourses": [
        {
            "courseId": "1e2aba3f-9153-4c5f-a3f4-003ba2be5355"
        }
    ]
}
```

- (DELETE) : /courses/:id (Authenticated by Admin and Super admin)

## Offered Course:

- (POST) : /offered-courses/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "courseIds": [
        "3bc5804f-f6ab-42b9-8d9d-b5e55558f4d0"
    ],
    "academicDepartmentId": "eb66d33d-a611-47cb-8f10-051ee6534176",
    "semesterRegistrationId": "f9f7394b-4a68-410d-bde3-df8a9d7bbd17"
}
```

- (GET): /offered-courses/ (OPEN ROUTE)
- (GET): /offered-courses/:id (OPEN ROUTE)
- (PATCH): /offered-courses/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "courseId": "4e37d95e-9cd1-4139-82e8-a51d6a5a5fab"
}
```

- (DELETE) : /offered-courses/:id (Authenticated by Admin and Super admin)

## Semester Registration:

- (POST) : /semester-registrations/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startDate": "2023-10-09T16:27:12.552Z",
    "endDate": "2023-10-09T16:27:12.552Z",
    "minCredit": 6,
    "maxCredit": 18,
    "academicSemesterId": "4fad990c-b8dd-49c7-b5d1-52da5d71cc6c"
}
```

- (GET): /semester-registrations/ (OPEN ROUTE)
- (GET): /semester-registrations/:id (OPEN ROUTE)
- (PATCH): /semester-registrations/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startDate": "2023-10-09T16:27:12.552Z",
    "endDate": "2023-10-09T16:27:12.552Z",
    "minCredit": 6,
    "maxCredit": 18,
    "academicSemesterId": "4fad990c-b8dd-49c7-b5d1-52da5d71cc6c"
}
```

- (DELETE) : /semester-registrations/:id (Authenticated by Admin and Super admin)
- (POST): /semester-registrations/:id/start-new-semester(Authenticated by Admin and Super admin)

- (GET): /semester-registrations/my-registration (Authenticated by Student)
- (GET): /semester-registrations/my-semester-registration-courses (Authenticated by Student)

- (POST) : /semester-registrations/start-registration (Authenticated by Student)
- (POST) : /semester-registrations/confirm-registration (Authenticated by Student)

- (POST): /semester-registrations/enroll-into-course (Authenticated by Student)
- (POST): /semester-registrations/withdraw-from-course (Authenticated by Student)

## Offered Course Class Schedule:

- (POST) : /offered-course-class-schedules/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startTime": "16:30",
    "endTime": "17:30",
    "dayOfWeek": "FRIDAY",
    "offeredCourseSectionId": "9583d55c-5008-46e6-8ce6-9099562502fa",
    "semesterRegistrationId": "f3421800-b253-4769-94fa-87a0c88ed604",
    "roomId": "ffe0136b-50e5-4955-9691-21356bd6cf28",
    "facultyId": "a9232359-5ee3-4e44-ba95-72475b33b3da"
}
```

- (GET): /offered-course-class-schedules/ (OPEN ROUTE)
- (GET): /offered-course-class-schedules/:id (OPEN ROUTE)
- (PATCH): /offered-course-class-schedules/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startTime": "16:30",
    "endTime": "17:30",
    "dayOfWeek": "FRIDAY",
    "offeredCourseSectionId": "9583d55c-5008-46e6-8ce6-9099562502fa",
    "semesterRegistrationId": "f3421800-b253-4769-94fa-87a0c88ed604",
    "roomId": "ffe0136b-50e5-4955-9691-21356bd6cf28",
    "facultyId": "a9232359-5ee3-4e44-ba95-72475b33b3da"
}
```

- (DELETE) : /offered-course-class-schedules/:id (Authenticated by Admin and Super admin)

## Offered Course Sections:

- (POST) : /offered-course-sections/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Section E",
    "maxCapacity": 30,
    "offeredCourseId": "29e55dda-32f4-40ea-8fe6-cfc268740905",
    "classSchedules": [
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "THURSDAY",
            "roomId": "96e8e986-faaa-41a6-88ce-a2c543b759fa",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        },
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "TUESDAY",
            "roomId": "3c80dfb2-537a-45d7-b923-430cdbd2039b",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        }
    ]
}
```

- (GET): /offered-course-sections/ (OPEN ROUTE)
- (GET): /offered-course-sections/:id (OPEN ROUTE)
- (PATCH): /offered-course-sections/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Section E",
    "maxCapacity": 30,
    "offeredCourseId": "29e55dda-32f4-40ea-8fe6-cfc268740905",
    "classSchedules": [
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "THURSDAY",
            "roomId": "96e8e986-faaa-41a6-88ce-a2c543b759fa",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        },
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "TUESDAY",
            "roomId": "3c80dfb2-537a-45d7-b923-430cdbd2039b",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        }
    ]
}
```

- (DELETE) : /offered-course-sections/:id (Authenticated by Admin and Super admin)

## Student Enrolled Course:

- (POST) : /student-enrolled-courses/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "academicSemesterId":"679ae7d6-cf90-4e93-aaf9-61198c968097",
    "studentId":"1b45597f-9e1c-433a-9a94-37e9f41b5ce4",
    "courseId": "3bc5804f-f6ab-42b9-8d9d-b5e55558f4d0"
}
```

- (GET): /student-enrolled-courses/ (OPEN ROUTE)
- (GET): /student-enrolled-courses/:id (OPEN ROUTE)
- (PATCH): /student-enrolled-courses/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "academicSemesterId":"679ae7d6-cf90-4e93-aaf9-61198c968097",
    "studentId":"1b45597f-9e1c-433a-9a94-37e9f41b5ce4",
    "courseId": "3bc5804f-f6ab-42b9-8d9d-b5e55558f4d0",
    "grade": "5.0",
    "point": 0,
    "totalMarks": 0,
}
```

- (DELETE) : /student-enrolled-courses/:id (Authenticated by Admin and Super admin)

## Student Enrolled Course Marks:

- (PATCH) : /student-enrolled-course-marks/update-marks (Authenticated by Faculty)
- (PATCH) : /student-enrolled-course-marks/update-marks (Authenticated by Faculty)

- (GET): /student-enrolled-course-marks/my-marks (Authenticated by Student)
- (GET): /student-enrolled-course-marks/ (Authenticated by Admin and Super admin)

## Management Department:

- (POST) : /management-departments/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Adminstration"
}
```

- (GET): /management-departments/ (OPEN ROUTE)
- (GET): /management-departments/:id (OPEN ROUTE)
- (PATCH): /management-departments/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Adminstration"
}
```

- (DELETE) : /management-departments/:id (Authenticated by Admin and Super admin)

## USER:

- (POST) : /users/create-student (Authenticated by Admin and Super admin)

```json
sample input:
file: image.jpg
{
  "firstName": "Imran",
  "lastName": "Khan",
  "middleName": "",
  "dateOfBirth": "14-02-1998",
  "gender":"male",
  "bloodGroup": "O+",
  "email": "imran14@gmail.com",
  "contactNo": "1545656",
  "emergencyContactNo": "01765",
  "presentAddress": "Frankfurt",
  "permanentAddress": "Frankfurt",
  "academicFaculty": "92d1d83e-fdc1-4688-ad67-845451c573e4",
  "academicDepartment": "8a88d6b8-ccfc-4ddd-ad2f-3c303301c20a",
  "academicSemester": "20bf9090-2986-4b05-b506-27977542a61e",
}
```

- (POST) : /users/create-faculty (Authenticated by Admin and Super admin)

```json
sample input:
file: image.jpg
{
  "firstName": "Imran",
  "lastName": "Hossain",
  "middleName": "",
  "dateOfBirth": "24-04-1998",
  "gender":"male",
  "bloodGroup": "O+",
  "email": "imran14@gmail.com",
  "contactNo": "477799956400",
  "emergencyContactNo": "017",
  "presentAddress": "CTG",
  "permanentAddress": "CTG",
  "academicFaculty": "92d1d83e-fdc1-4688-ad67-845451c573e4",
  "academicDepartment": "8a88d6b8-ccfc-4ddd-ad2f-3c303301c20a",
  "designation": "MSc in HIS"
}


```


## STUDENT:

- (GET) /students/ (GET ALL Student from Core Service) (Authenticated by All)
- (GET) /students/:id (GET Single Student from Core Service) (Authenticated by All)

- (GET) /students/my-courses (GET Single Students Courses from Core Service) (Authenticated by Student)
- (GET) /students/my-academic-infos (GET Single Students Academic Info from Core Service) (Authenticated by Student)
- (GET) /students/my-course-schedules (GET Single Students Course Schedule from Core Service) (Authenticated by Student)

- (GET) /students/profile/:id (GET Single Student from Auth Service) (Authenticated by All)
- (PATCH) /students/:id (UPDATE Single Students Course Schedule from Auth Service) (Authenticated by Admin and Super Admin)
- (DELETE) /students/:id (UPDATE Single Students Course Schedule from Auth Service) (Authenticated by Admin and Super Admin)

## FACULTY:

- (GET) /faculties/ (GET ALL Faculties from Core Service) (Authenticated by All)
- (GET) /faculties/:id (GET Single Faculty from Core Service) (Authenticated by All)

- (GET) /faculties/my-courses (GET Single faculties Courses from Core Service) (Authenticated by Faculty)
- (GET) /faculties/my-course-students (GET Single faculties Academic Info from Core Service) (Authenticated by Faculty)

- (GET) /faculties/profile/:id (GET Single Faculty from Auth Service) (Authenticated by All)
- (PATCH) /faculties/:id (UPDATE Single faculties Course Schedule from Auth Service) (Authenticated by Admin and Super Admin)
- (DELETE) /faculties/:id (UPDATE Single faculties Course Schedule from Auth Service) (Authenticated by Admin and Super Admin)
