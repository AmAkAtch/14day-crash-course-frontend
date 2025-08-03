const traineeID = "T001";
let score1 = 80;
let score2 = 70;
let grade;
let average = (score1 + score2) / 2;
let isTraineePassed = average > 70;

console.log("Trainee ID:", traineeID, ", Trainee Score:", average);

if (isTraineePassed) {
  console.log("Passing Status: Passed");
  if (average > 80) {
    console.log("Passing grade: A");
    grade = "A";
  } else if (average > 70) {
    console.log("Passing grade: B");
    grade = "B";
  }
} else {
  console.log("Passing status: Failed");
}

switch (grade) {
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good Job");
    break;
  default:
    console.log("Needs work");
}

for (let i = 0; i < 3; i++) {
  console.log("Employee ", i + 1);
}

let i = 0;
while (i < 3) {
  console.log("Employee", i + 1);
  i++;
}

let scores = [10, 20, 30];
scores.push(50);
scores.pop();
console.log(scores.length);
scores.forEach((score, index) => {
  console.log(score, index);
});
