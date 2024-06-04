export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students by location (city)
  const filteredStudents = students.filter((student) => student.location === city);

  // Map through filtered students, assigning grades based on newGrades
  return filteredStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}
