Day 2: JavaScript Fundamentals Part 1
Duration: 8 hours

Objective: Master core JavaScript concepts (variables, conditionals, loops, functions) and data structures (arrays, objects, JSON, scope, hoisting, this). By the end, you’ll build a grade calculator with student management, reinforcing your skills for ReactJS.

Tools: VS Code, Live Server extension, Chrome browser (for console debugging).

Real-World Scenario: You’re building a grade calculator for a grocery store’s employee training program, tracking trainees’ scores and managing their data.

Morning Session: Core JavaScript Concepts (4 hours)
1. Variables (let, const, var)

What are Variables?

Variables are like labeled boxes in a grocery store’s inventory, storing data (e.g., a trainee’s name or test score) for later use. You learned let in the original Day 1, but we’ll expand on all variable types.
Types of Variables:

let: For variables that can change.

Example: A trainee’s score might change after a retest.
javascriptlet score = 85; // Initial score
score = 90; // Updated after retest
console.log("Score:", score); // Outputs: Score: 90

Why: Use let when data needs to update, like tracking a trainee’s progress.


const: For variables that don’t change after being set.

Example: A trainee’s ID number is fixed.
javascriptconst traineeId = "T123";
// traineeId = "T456"; // Error: You can’t reassign a const
console.log("Trainee ID:", traineeId); // Outputs: Trainee ID: T123

Why: const prevents accidental changes, making code safer. Note: For objects or arrays, const protects the variable name, not the content (you’ll see this later).


var: An older way to declare variables, less predictable.

Example:
javascriptvar oldScore = 80;
var oldScore = 85; // Allowed, but confusing
console.log("Old score:", oldScore); // Outputs: Old score: 85

Why Avoid: var allows redeclarations and has tricky scope rules (we’ll cover scope later), leading to bugs. Modern JavaScript prefers let and const.




Naming Rules:

Use descriptive names: traineeScore not x.
CamelCase: firstName (lowercase first word, uppercase subsequent words).
No spaces or special characters (except _ or $).
Example: let traineeFirstName = "John"; is good; let 1name = "John"; is invalid.


Why This Matters: Variables are the foundation of programming. In ReactJS, you’ll use const for components and let for state changes.
Best Practice: Always use const unless you need to reassign (then use let). Avoid var in modern code.
Practical (30 minutes):

Open VS Code, go to your my-learning folder, open script.js.
Write:
javascriptconst traineeId = "T001";
let traineeScore = 85;
console.log("Trainee", traineeId, "scored", traineeScore);
traineeScore = 90; // Update score
console.log("Updated score:", traineeScore);

Open index.html with Live Server, check the console (Right-click > Inspect > Console).
Try changing traineeId (you’ll get an error).


Repetition: Variables (let, const, var) store data like trainee scores. Use const for fixed values, let for changeable ones, avoid var.

2. Data Types

What are Data Types?

Data types define what kind of data a variable holds, like different items in a grocery store (e.g., apples vs. bread).
Common Types:

Number: For numbers (e.g., scores, prices).
javascriptlet score = 85; // Integer
let price = 1.5; // Decimal

String: Text, enclosed in quotes (", ', or `).
javascriptlet traineeName = "John";

Boolean: true or false, for decisions.
javascriptlet passedTest = true;

Array: A list of items (covered later).
Object: A collection of key-value pairs (covered later).
Null: Intentional “no value” (e.g., let score = null; for ungraded tests).
Undefined: A variable declared but not set (e.g., let score;).


Why: Different types behave differently. You can add numbers (1 + 2 = 3), but not strings ("1" + "2" = "12"). ReactJS uses these types for state and props.
Practical: Add to script.js:
javascriptlet traineeName = "John";
let score = 85;
let passed = score >= 70;
console.log(traineeName, "passed:", passed); // Outputs: John passed: true

Repetition: Data types (number, string, boolean) define what variables hold. Use them correctly to avoid errors in calculations or logic.

3. Operators

What are Operators?

Symbols that perform actions on variables, like calculating a total or comparing scores.
Types:

Arithmetic: +, -, *, /, % (remainder).

Example: let totalScore = 85 + 90; (adds scores).


Comparison: === (equal), !== (not equal), >, <, >=, <=.

Example: let isPassing = score >= 70; (checks if score is passing).


Logical: && (and), || (or), ! (not).

Example: let isEligible = score >= 70 && traineeName !== ""; (checks score and name).




Why: Operators drive logic and calculations, like determining if a trainee passes a test.
Practical: Add to script.js:
javascriptlet score1 = 85;
let score2 = 90;
let average = (score1 + score2) / 2;
let isPassing = average >= 70;
console.log("Average:", average, "Passing:", isPassing); // Outputs: Average: 87.5 Passing: true

Repetition: Operators (+, ===, &&) let you calculate (e.g., average score) and make decisions (e.g., pass/fail).

4. Conditional Statements (if/else, switch)

What are Conditionals?

Code that runs based on conditions, like checking if a trainee passes.
If/Else:

Syntax:
javascriptif (condition) {
  // Run if true
} else if (anotherCondition) {
  // Run if another condition is true
} else {
  // Run if all false
}

Example:
javascriptlet score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}

Outputs: Grade: B.


Why: Conditionals control app logic, like displaying a trainee’s grade.


Switch:

Alternative to multiple if/else for specific values.
Syntax:
javascriptlet grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good job!");
    break;
  default:
    console.log("Needs improvement");
}

break: Stops the switch from running further cases.
Why: Cleaner for multiple fixed options (e.g., grades).




Practical (1 hour):

In script.js:
javascriptlet traineeScore = 85;
if (traineeScore >= 90) {
  console.log("Grade: A");
} else if (traineeScore >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: Fail");
}
Test different scores (e.g., 95, 60). Try rewriting with switch.
Repetition: Conditionals (if/else, switch) make decisions, like assigning grades based on scores, essential for ReactJS logic.

5. Loops (for, while, forEach)

What are Loops?

Code that repeats tasks, like listing all trainees’ scores.
For Loop:

Syntax:
javascriptfor (let i = 0; i < 3; i++) {
  console.log("Trainee", i + 1);
}

let i = 0: Starts counter at 0.
i < 3: Repeats while i is less than 3.
i++: Increments i by 1 each loop.
Outputs: Trainee 1, Trainee 2, Trainee 3.




While Loop:

Runs while a condition is true.
javascriptlet i = 0;
while (i < 3) {
  console.log("Trainee", i + 1);
  i++;
}



forEach:

Loops over arrays (covered next).
javascriptlet scores = [85, 90, 75];
scores.forEach(function(score) {
  console.log("Score:", score);
});



Practical: Add to script.js:
javascriptfor (let i = 0; i < 3; i++) {
  console.log("Processing trainee", i + 1);
}
Test it, then try with while.
Repetition: Loops (for, while, forEach) repeat tasks, like listing trainee scores, crucial for handling data in ReactJS.


Afternoon Session: Data Structures (4 hours)
6. Arrays: Methods, Iteration, Manipulation

What is an Array?

A list of items, like a grocery store’s inventory or trainee scores.
javascriptlet scores = [85, 90, 75];

Access items: scores[0] is 85 (0-based indexing).


Array Methods:

push: Add to end.
javascriptscores.push(95); // Adds 95

pop: Remove from end.
javascriptscores.pop(); // Removes 95

length: Number of items.
javascriptconsole.log(scores.length); // 3



Iteration:

Use for or forEach to process each item.
javascriptscores.forEach(function(score, index) {
  console.log("Trainee", index + 1, "Score:", score);
});

Practical (1 hour):
javascriptlet trainees = ["John", "Jane", "Bob"];
trainees.push("Alice");
console.log("Trainees:", trainees);
trainees.forEach(function(name, index) {
  console.log("Trainee", index + 1, ":", name);
});
Test adding/removing trainees.
Repetition: Arrays store lists (e.g., trainee names). Methods like push and forEach manage and process them, key for ReactJS lists.

7. Objects: Properties, Methods, Destructuring

What is an Object?

A collection of key-value pairs, like a trainee’s profile.
javascriptlet trainee = {
  name: "John",
  score: 85,
  passed: true
};

Access: trainee.name (dot notation) or trainee["name"] (bracket notation).


Methods:

Functions inside objects.
javascriptlet trainee = {
  name: "John",
  score: 85,
  calculateGrade: function() {
    return this.score >= 70 ? "Pass" : "Fail";
  }
};
console.log(trainee.calculateGrade()); // Outputs: Pass

this: Refers to the object (here, trainee).


Destructuring:

Extract values easily.
javascriptlet { name, score } = trainee;
console.log(name, score); // Outputs: John 85

Practical:
javascriptlet trainee = {
  name: "Jane",
  score: 90,
  calculateGrade: function() {
    return this.score >= 70 ? "Pass" : "Fail";
  }
};
let { name, score } = trainee;
console.log(name, "Grade:", trainee.calculateGrade());

Repetition: Objects store related data (e.g., trainee details). Methods add functionality, destructuring simplifies access, vital for ReactJS components.

8. JSON Format and Parsing

What is JSON?

JavaScript Object Notation, a format for data exchange, like a grocery store’s product list sent to a server.
javascriptlet jsonString = '{"name": "John", "score": 85}';

Parsing:

JSON.parse: Convert JSON string to object.
javascriptlet trainee = JSON.parse(jsonString);
console.log(trainee.name); // John

JSON.stringify: Convert object to JSON string.
javascriptlet json = JSON.stringify(trainee);
console.log(json); // {"name":"John","score":85}



Why: JSON is used in APIs (e.g., fetching trainee data), common in ReactJS.
Practical: Test parsing and stringifying the trainee object.

9. Scope, Hoisting, this Keyword

Scope:

Where variables are accessible.

Global: Outside functions, accessible everywhere.
javascriptlet globalScore = 100;

Local: Inside functions, only accessible there.
javascriptfunction test() {
  let localScore = 50;
  console.log(localScore); // 50
}
// console.log(localScore); // Error: Not defined



Hoisting:

JavaScript moves declarations to the top of their scope.
javascriptconsole.log(x); // Undefined
var x = 5;

var is hoisted, let and const are not. Avoid var to prevent bugs.


this Keyword:

Refers to the current object or context.
javascriptlet trainee = {
  name: "John",
  getName: function() {
    return this.name;
  }
};
console.log(trainee.getName()); // John

Practical: Test this in an object method and scope with a function.


Final Project: Grade Calculator with Student Management (2 hours)

Goal: Build a program to manage trainee grades.
In script.js:
javascriptconst trainees = [
  { name: "John", score: 85 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 65 }
];

function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 70) return "B";
  else return "Fail";
}

trainees.forEach(function(trainee, index) {
  let grade = calculateGrade(trainee.score);
  console.log(`Trainee ${index + 1}: ${trainee.name}, Score: ${trainee.score}, Grade: ${grade}`);
});

let newTrainee = JSON.stringify({ name: "Alice", score: 95 });
let parsedTrainee = JSON.parse(newTrainee);
trainees.push(parsedTrainee);
console.log("Updated trainees:", trainees);

Test with Live Server, check console output.
Experiment: Add a new trainee, change score thresholds.


Wrap-Up

What You Learned:

Variables (let, const), data types, operators, conditionals, loops.
Arrays, objects, JSON, scope, hoisting, this.
Built a grade calculator for a training program.


Why It Matters: These are the core of JavaScript, used in ReactJS for state, props, and logic.
Best Practices: Use const by default, descriptive names, avoid var.

Homework: Add a feature to list only passing trainees (score >= 70).