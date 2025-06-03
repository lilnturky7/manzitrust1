// JavaScript: To-Do List + Variables + Operators + Conditional Statement

// Variables
let taskCount = 0;

// To-do list
function addTask() {
const input = document.getElementById("taskInput");
const taskText = input.value.trim();

if (taskText === "") return;

const li = document.createElement("li");
li.textContent = taskText;
document.getElementById("taskList").appendChild(li);

input.value = "";
taskCount++;
}

// Operators + Conditional
function showLogic() {
let a = 7;
let b = 3;
let result = (a + b > 10) ? "Sum is big enough!" : "Sum is too small.";
document.getElementById("logicOutput").innerText = "Sum: " + (a + b) + " → " + result;
}