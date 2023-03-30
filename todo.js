let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
	if (taskInput.value !== "") {
		let task = document.createElement("li");
		task.innerHTML = taskInput.value;
		taskList.appendChild(task);
		taskInput.value = "";
	}
}
