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
    var routineName = JSON.parse(localStorage.getItem("currentRoutine")).routineTitle;
    //var loginToken = window.localStorage.getItem('token');
    //var assignedUser = window.localStorage.getItem('user');
    //var boxPlace = $('#TaskDiv');

    console.log(currentTask);
    var toAppend = document.createElement('div');
    toAppend.id = 'RoutineInfo';
    toAppend.innerHTML = "<h1>Editing "+routineName+": "+currentTask.taskName+"</h1>" +
        "Name: <input type='text' id='taskName' value='"+currentTask.taskName +"' /><br/>" +
        "Description: <input type='text' id='taskDesc' value='"+currentTask.taskDescription+"'><br/>" +
        "Category: <select id='taskCat'>" + //TODO: Figure out a way to have the current task's category selected
            "<option value='Custodial'>Custodial</option>" +
            "<option value='Hosting'>Hosting</option>" +
            "<option value='Maintenance'>Maintenance</option>" +
            "<option value='Gardening'>Gardening</option>" +
            "<option value='Help'>Help</option>" +
        "</select><br/>" +
        "Timed: <input type='checkbox' id='taskTimed' checked='"+currentTask.isTimed +"' /> <br/>" +
        "Expected Duration: <input type='time' id='expectDuration' value='"+currentTask.expectedDuration +"' /> <br/>";
    var list = document.getElementById("taskList");
    list.append(toAppend);
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