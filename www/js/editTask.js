jQuery(document).ready(function () {
    var loginToken = window.localStorage.getItem('token');
    setTimeout(function () {
        keepAliveTwo(loginToken);
    }, 500);
    console.log("loading tasks");
   fillBoxes();
});


function fillBoxes()
{
    var currentTask = JSON.parse(window.localStorage.getItem('currentEditJob'));

    console.log(currentTask);

    // Fix populating the task category. You can see that the value is correctly changing
    // because it is selected in the dropdown. Just need to get the UI to load it.
    document.getElementById("taskName").value = currentTask.taskName;
    document.getElementById("taskDesc").value = currentTask.taskDescription;
    document.getElementById("taskCat").value = currentTask.TaskCategory.categoryName;
    document.getElementById("taskTimed").checked = currentTask.isTimed;
    document.getElementById("expectDuration").value = currentTask.expectedDuration;
}

function deleteTask() {
    var routine = JSON.parse(localStorage.getItem("currentRoutine"));
    var arrOfTasks = routine.Tasks;
    arrOfTasks.splice(localStorage.getItem("taskNum"),1);//removes the task from the tasks array
    localStorage.setItem("currentRoutine", JSON.stringify(routine));//sets the edited routine back
    location.href = "editJob.html";
}

function editTask() {
    var currentTask = JSON.parse(window.localStorage.getItem('currentEditJob'));
    currentTask.taskName = document.getElementById("taskName").value;
    currentTask.taskDescription = document.getElementById("taskDesc").value;
    currentTask.TaskCategory.categoryName = document.getElementById("taskCat").value;
    currentTask.isTimed = document.getElementById("taskTimed").checked;
    currentTask.expectedDuration = document.getElementById("expectDuration").value;

    var routine = JSON.parse(localStorage.getItem("currentRoutine"));//get routine we are working on
    routine.Tasks[localStorage.getItem("taskNum")] = currentTask;//replace task
    localStorage.setItem("currentRoutine", JSON.stringify(routine));//set routine back
    location.href = "editJob.html"
}