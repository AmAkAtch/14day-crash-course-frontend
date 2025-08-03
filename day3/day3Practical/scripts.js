let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let submit = document
  .querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    let task = document.querySelector("#task").value;
    if (task !== "") {
      tasks.push(task);
      console.log(tasks);
      updatelist();
    }
    document.querySelector("#task").value = "";
  });

function updatelist() {
  let main = document.querySelector(".to-do");
  main.innerHTML = "";

  let todo = document.createElement("ol");

  tasks.forEach((task, index) => {
    let item = document.createElement("li");
    item.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1); // Remove the task at this index
      updatelist(); // Re-render the list
    });

    item.appendChild(deleteBtn);
    todo.appendChild(item);
  });
  main.appendChild(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

updatelist();
