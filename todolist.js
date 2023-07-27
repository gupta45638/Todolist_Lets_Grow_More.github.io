function addTask() {
  const inputElement = document.getElementById("taskInput");
  const taskText = inputElement.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="done-button" onclick="toggleTaskComplete(this.previousElementSibling)">Task Completed</button>
      <button onclick="removeTask(this)">Remove Task</button>
    `;
    taskList.appendChild(newTaskItem);
    inputElement.value = "";
  }
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}

function toggleTaskComplete(span) {
  span.classList.toggle("completed");
}
