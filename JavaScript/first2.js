const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText + " "; // task ke baad space

  const tickBtn = document.createElement("button");
  tickBtn.textContent = "✔";
  tickBtn.addEventListener("click", function () {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
    } else {
      span.style.textDecoration = "line-through";
    }
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  // 👇 yaha spacing ke liye ek extra text node add kar rahe
  li.appendChild(span);
  li.appendChild(tickBtn);
  li.appendChild(document.createTextNode(" ")); // space between ✔ and Delete
  li.appendChild(delBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}
