// Given a set of letter grades, output the GPA (grade point average) of those grades.

const key = {
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2.0,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1.0,
  "D-": 0.7,
  "F": 0.0
}

function calculateGPA(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += key[grades[i]];
  }
  return Math.round(sum / grades.length * 10) / 10;
}

let grades = ["A"];
console.log(calculateGPA(grades));

grades = ["F", "F", "F"];
console.log(calculateGPA(grades));

grades = ["A", "A-", "B+", "B", "B-"];
console.log(calculateGPA(grades));
outputStr = "" + calculateGPA(grades);
document.getElementById("output").innerHTML += outputStr;

grades = ["A", "B+", "C-", "A"]
console.log(calculateGPA(grades));