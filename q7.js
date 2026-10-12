const student = { name: "Chidi", score: 50 };
student.score = 90;
console.log(student);

const grades = [1, 2, 3];
grades.push(4);
console.log(grades);

Object.freeze(student);
student.score = 70;
console.log(student);

try {
  student = { name: "Bola", score: 70 };
} catch (error) {
  console.log(error.name, error.message);
}
