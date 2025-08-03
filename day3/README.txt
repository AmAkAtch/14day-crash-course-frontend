Day 3: JavaScript Fundamentals Part 2
Duration: 8 hours

Objective: Master advanced JavaScript (ES6+ features, array methods, promises, async/await, modules) and DOM manipulation (selection, events, forms, storage). By the end, you’ll build a todo list app for managing employee tasks at a grocery store.

Tools: VS Code, Live Server extension, Chrome browser (for console and DevTools).

Real-World Scenario: You’re building a todo list app for grocery store employees to track tasks (e.g., “Restock apples,” “Clean aisle 3”), with features to add, remove, and save tasks.

Morning Session: Advanced JavaScript (4 hours)
1. ES6+ Features: Template Literals, Destructuring, Spread Operator

What is ES6+?

ES6 (ECMAScript 2015) and later versions introduced modern JavaScript features to make code cleaner and more powerful. Think of it as upgrading your grocery store’s inventory system from a paper ledger to a digital app—more efficient and less error-prone. These features are widely used in ReactJS.
Template Literals:

What: A way to create strings with variables or expressions, using backticks (`) instead of quotes.
Why: Makes strings readable, like generating a task message: “Restock apples at 10 AM.”
Syntax:
javascriptlet task = "Restock apples";
let time = "10 AM";
let message = `${task} at ${time}`; // Template literal
console.log(message); // Outputs: Restock apples at 10 AM

Compare to old way: "Restock " + task + " at " + time. Template literals are cleaner.


Details:

Use ${} to embed variables or calculations (e.g., ${2 + 3}).
Supports multiline strings:
javascriptlet multiline = `
  Task: ${task}
  Time: ${time}
`;
console.log(multiline);



Why for React: Template literals simplify dynamic text in components (e.g., displaying user data).


Destructuring:

What: Extract parts of arrays or objects into variables in one line.
Why: Simplifies code, like grabbing a trainee’s name and score from an object.
Array Destructuring:
javascriptlet tasks = ["Restock apples", "Clean aisle"];
let [firstTask, secondTask] = tasks;
console.log(firstTask); // Restock apples

Object Destructuring:
javascriptlet employee = { name: "John", role: "Cashier" };
let { name, role } = employee;
console.log(name, role); // John Cashier

Why for React: Destructuring is common for props and state in React components.


Spread Operator:

What: Expands arrays or objects (using ...), like copying a grocery list or merging inventories.
Array Example:
javascriptlet tasks = ["Restock apples"];
let newTasks = [...tasks, "Clean aisle"];
console.log(newTasks); // ["Restock apples", "Clean aisle"]

Object Example:
javascriptlet employee = { name: "John" };
let updatedEmployee = { ...employee, role: "Cashier" };
console.log(updatedEmployee); // { name: "John", role: "Cashier" }

Why: Prevents modifying original data (immutability), a key React principle.


Practical (1 hour):

Open VS Code, go to my-learning folder, open script.js.
Write:
javascriptlet task = "Restock apples";
let time = "10 AM";
let message = `Task: ${task} at ${time}`;
console.log(message);

let tasks = ["Restock apples", "Clean aisle"];
let [first, second] = tasks;
console.log("First task:", first);

let employee = { name: "John", role: "Cashier" };
let { name, role } = employee;
console.log("Employee:", name, role);

let newTasks = [...tasks, "Check inventory"];
console.log("Updated tasks:", newTasks);

Open index.html with Live Server, check console. Experiment: Add a new task or property.


Repetition: Template literals (`${task}`) make strings easy. Destructuring (let { name } = employee) simplifies data access. Spread operator (...tasks) copies or merges data, crucial for React’s immutability.

2. Array Methods: map, filter, reduce, find

What are Array Methods?

Built-in functions to process arrays, like managing a list of employee tasks. These are heavily used in React for rendering lists.
map:

What: Transforms each array item, returning a new array.
Example: Format tasks with numbers.
javascriptlet tasks = ["Restock apples", "Clean aisle"];
let formattedTasks = tasks.map((task, index) => `Task ${index + 1}: ${task}`);
console.log(formattedTasks); // ["Task 1: Restock apples", "Task 2: Clean aisle"]

(task, index) =>: Arrow function (shorter function syntax, covered next).


Why: Used in React to render lists (e.g., display all tasks).


filter:

What: Creates a new array with items that pass a test.
Example: Get completed tasks.
javascriptlet tasks = [
  { name: "Restock apples", done: true },
  { name: "Clean aisle", done: false }
];
let completedTasks = tasks.filter(task => task.done);
console.log(completedTasks); // [{ name: "Restock apples", done: true }]



reduce:

What: Combines array items into a single value.
Example: Count total tasks.
javascriptlet scores = [85, 90, 75];
let total = scores.reduce((sum, score) => sum + score, 0);
console.log("Total score:", total); // 250

0: Starting value for sum.




find:

What: Returns the first item that matches a condition.
Example: Find a specific task.
javascriptlet task = tasks.find(task => task.name === "Restock apples");
console.log(task); // { name: "Restock apples", done: true }



Practical (1 hour):
javascriptlet tasks = [
  { name: "Restock apples", done: true },
  { name: "Clean aisle", done: false },
  { name: "Check inventory", done: true }
];
let formatted = tasks.map((task, index) => `Task ${index + 1}: ${task.name}`);
let completed = tasks.filter(task => task.done);
let totalDone = tasks.reduce((count, task) => count + (task.done ? 1 : 0), 0);
let specificTask = tasks.find(task => task.name === "Restock apples");
console.log("Formatted:", formatted);
console.log("Completed:", completed);
console.log("Total done:", totalDone);
console.log("Found:", specificTask);
Test in console. Experiment: Filter incomplete tasks.
Repetition: Array methods (map, filter, reduce, find) process lists efficiently, essential for React’s list rendering and data handling.

3. Promises, async/await, Error Handling

What is a Promise?

A Promise represents a future value, like waiting for a grocery delivery. It has three states:

Pending: Waiting (e.g., delivery on the way).
Fulfilled: Success (e.g., delivery arrived).
Rejected: Failure (e.g., delivery canceled).


Syntax:
javascriptlet promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
promise
  .then(result => console.log(result)) // Task completed
  .catch(error => console.log(error));

resolve: Success path.
then: Handles success.
catch: Handles errors.


async/await:

What: A cleaner way to handle Promises.
Syntax:
javascriptasync function checkTask() {
  try {
    let result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Task done"), 1000);
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
checkTask(); // Waits 1 second, then: Task done

async: Marks a function as asynchronous.
await: Pauses until the Promise resolves.
try/catch: Handles errors.




Why: Promises and async/await are used in React for fetching data (e.g., task lists from a server).
Practical:
javascriptasync function fetchTask() {
  try {
    let task = await new Promise(resolve => {
      setTimeout(() => resolve("Restock apples"), 1000);
    });
    console.log("Fetched:", task);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchTask();

Repetition: Promises handle async tasks (e.g., fetching data). async/await makes it readable, try/catch handles errors, key for React data fetching.

4. Modules (import/export)

What are Modules?

Splitting code into separate files for organization, like keeping inventory and tasks in different folders.
Syntax:

In utils.js:
javascriptexport function calculateGrade(score) {
  return score >= 70 ? "Pass" : "Fail";
}

In script.js:
javascriptimport { calculateGrade } from "./utils.js";
console.log(calculateGrade(85)); // Pass

Note: Add type="module" to <script> in index.html:
html<script type="module" src="script.js"></script>



Why: Modules keep code modular, a React standard.
Practical: Create utils.js, export a function, import it in script.js.


Afternoon Session: DOM & Events (4 hours)
5. DOM Selection and Manipulation

What is the DOM?

The Document Object Model (DOM) is a tree of HTML elements the browser creates, letting JavaScript modify the webpage. Think of it as the grocery store’s display shelves you can rearrange.
Selecting Elements:

document.querySelector: Selects one element.
javascriptlet heading = document.querySelector("h1");
console.log(heading.textContent); // My Grocery Store

document.querySelectorAll: Selects all matching elements.
javascriptlet buttons = document.querySelectorAll("button");
buttons.forEach(button => console.log(button.textContent));



Manipulation:

Change content: heading.textContent = "New Store Name";
Add element:
javascriptlet newTask = document.createElement("p");
newTask.textContent = "New task";
document.querySelector("main").appendChild(newTask);



Practical (1 hour):

In script.js:
javascriptlet taskList = document.createElement("ul");
let tasks = ["Restock apples", "Clean aisle"];
tasks.forEach(task => {
  let li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
});
document.querySelector("main").appendChild(taskList);
Test: Tasks appear as a list.

6. Event Handling, Event Delegation

What are Events?

User actions like clicks or typing.
Event Handling:
javascriptlet button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

Event Delegation:

Attach one listener to a parent for multiple children.
javascriptdocument.querySelector(".container").addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});

Practical: Add click listeners to your “Add to Cart” buttons.

7. Form Handling and Validation

What: Handle form submissions.
javascriptlet form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault(); // Stop page reload
  let name = form.querySelector("#name").value;
  console.log("Submitted:", name);
});

Practical: Log form inputs on submit.

8. Local Storage, Session Storage

What: Save data in the browser.

localStorage: Persists until cleared.
javascriptlocalStorage.setItem("tasks", JSON.stringify(["Restock apples"]));
let tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks);



Practical: Save tasks to localStorage.


Final Project: Interactive Todo List (2 hours)

Update index.html:
html<main>
  <form id="task-form">
    <label for="task">Task:</label>
    <input type="text" id="task" required>
    <button type="submit">Add Task</button>
  </form>
  <ul id="task-list"></ul>
</main>

In script.js:
javascriptimport { calculateGrade } from "./utils.js";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskList = document.querySelector("#task-list");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.map((task, index) => {
    let li = document.createElement("li");
    li.textContent = `Task ${index + 1}: ${task}`;
    taskList.appendChild(li);
  });
}

document.querySelector("#task-form").addEventListener("submit", async event => {
  event.preventDefault();
  let taskInput = document.querySelector("#task");
  let newTask = taskInput.value;
  tasks = [...tasks, newTask];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  taskInput.value = "";
});

renderTasks();

Test: Add tasks, refresh, see them persist.


Wrap-Up

What You Learned: ES6+ (template literals, destructuring, spread), array methods, promises, modules, DOM, events, storage.
Why: Prepares you for React’s dynamic rendering and data fetching.
Homework: Add a “Delete” button for tasks.