export function toDoList() {
  let tasks = [
    { name: "clean dishes", done: true },
    { name: "Go for a walk", done: false },
    { name: "Complete React practical", done: true },
  ];

  localStorage.setItem("newTasks", JSON.stringify(["Restock Apples"]));
  let newTasks = JSON.parsw(localStorage.getItem("newTasks"));
  console.log(newTasks);

  let indexedTasks = tasks.map(
    (task, index) => `task ${index + 1}: ${task.name}`
  );

  let completedTasks = tasks.filter((task) => task.done);

  let totalTasksDone = tasks.reduce(
    (sum, task) => (task.done ? sum + 1 : sum),
    0
  );

  let specificTask = tasks.find((task) => task.name === "Go for a walk");

  console.log(indexedTasks);
  console.log(completedTasks);
  console.log(totalTasksDone);
  console.log(specificTask);
}
