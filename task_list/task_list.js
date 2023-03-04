window.onload = setTasks;
function setTasks() {
    if(localStorage.tasks != undefined) document.getElementById("task_list").innerHTML = localStorage.tasks;
}
function addTask() {
    localStorage.tasks = localStorage.tasks != undefined ? localStorage.tasks + document.getElementById("task").value + "\n" : document.getElementById("task").value + "\n";
    document.getElementById("task").value = "";
    document.getElementById("task_list").innerHTML = localStorage.tasks;
}
function clearTasks() {
    localStorage.removeItem("tasks");
    document.getElementById("task_list").innerHTML = "";
}