import { calculateGrade } from "./utils.js";
import { toDoList } from "./toDoList.js";

// toDoList();
let status = calculateGrade(80);
console.log(status);

//query selector
// let heading = document.querySelector("h1");
// console.log(heading.textContent);

// let newTask = document.createElement("p");
// newTask.textContent = "this input is generated form ethe script";
// document.querySelector("main").appendChild(newTask);

// let list = document.createElement("ul");
// let todo = ["Buy apples", "Go for a walk", "Drink Tea"];
// todo.forEach((item) => {
//   let li = document.createElement("li");
//   li.textContent = item;
//   list.appendChild(li);
// });
// document.querySelector("main").appendChild(list);

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  console.log(`name: ${name}`);
});

localStorage.setItem(
  "newTasks",
  JSON.stringify(["Restock Apples", "Buy Nuts"])
);
let newTasks = JSON.parse(localStorage.getItem("newTasks"));
console.log(newTasks);
