function deleteJob(){
    var job = JSON.parse(localStorage.getItem('currentRoutine'));
    var token = localStorage.getItem('token');
    console.log(job);
    var uri = 'http://pjcdbrebuild2.gear.host/api/';
    if(job == null) return;
    jQuery.ajax({
        type: 'POST',
        dataType: 'application/json',
        data: {token: token, create: "d", model: JSON.stringify(job)},
        url: uri + "Routine",
        success: function (data) {
            //window.localStorage.setItem("job", data);
        },
        error: function (data) {
            console.log(data);
            if(data.status == 200){
                console.log("JOB DELETED");
                location.href = "joblist.html";
            }else {
                console.log("JOB WAS NOT DELETED");
            }
        }
    });
}

function editTask(taskToEdit) //called by clicking on task
{
    var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));

    //var jobList = JSON.parse(localStorage.getItem('jobList'));

    console.log(currentRoutine.Tasks[taskToEdit].taskName);
    localStorage.setItem("currentEditJob", JSON.stringify(currentRoutine.Tasks[taskToEdit]));
    localStorage.setItem("taskNum", taskToEdit);
    document.location.href = "editTask.html";
}


jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem('token');
    setTimeout(function () {
        keepAliveTwo(loginToken);
    }, 500);

    loadJob();

    //editJob();
});

function loadJob()
{
    var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));
    //var arrOfTasks = JSON.parse(window.localStorage.getItem("currentTasks"));
    //console.log(arrOfTasks);
    //var job;

    if(currentRoutine != null){
        console.log(currentRoutine.Tasks);

        console.log("Attempted to populate fields");
        console.log(currentRoutine);

        document.getElementById("jobTitle").value = currentRoutine.routineTitle;
        document.getElementById("jobTimed").checked = currentRoutine.isTimed;
        document.getElementById("jobExpected").value = currentRoutine.expectedDuration;
        document.getElementById("jobEmail").checked = currentRoutine.isNotifiable;
        var list = document.getElementById("listOfTasks");
        var taskList = currentRoutine.Tasks;
        for(var i = 0; i < taskList.length; i++){
            var toAdd = document.createElement('ul');
            toAdd.style.cssText = 'list-style:none';
            toAdd.innerHTML = '<li>Title: '+ taskList[i].taskName +'</li>' +
                '<li>Description: ' + taskList[i].taskDescription + '</li>' +
                '<li>Category: ' + taskList[i].TaskCategory.categoryName + '</li>' +
                '<li>Timed: ' + taskList[i].isTimed + '</li>' +
                '<li>Duration: ' + taskList[i].expectedDuration + '</li>';
            toAdd.setAttribute("onclick", "editTask("+i+")");//.onclick = editTask(i);
            list.append(toAdd);
        }
    }
    else {
        console.log("JOB NOT FOUND");
    }
}


function addTask()
{
    console.log('hi');
    var list = document.querySelector('#listOfTasks');
    var toAdd = document.createElement('div');
    toAdd.innerHTML = "Task Name: <input type='text' name='taskName' width='80%'/><br/>" +
        "Description: <input type='text' name='description' width='80%'/><br/>" +
        "Expected Duration:<input type='text' name='expectedDurationTask1' width='80%'/>";
    list.appendChild(toAdd);
    var breakDiv;
    breakDiv.innerHTML = '<br/>';
    list.appendChild(breakDiv);
}



//need to grab data when clicked on jobList to know which job.
//ajax for localStorage
function editJob() {
    var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));
    var uri = 'http://pjcdbrebuild2.gear.host/api/';
    console.log(currentRoutine);

    var jobTitle = document.getElementById("jobTitle").value;
    var jobTimed = document.getElementById("jobTimed").checked;
    var jobExpected = document.getElementById("jobExpected").value;
    var jobEmail = document.getElementById("jobEmail").checked;

    var loginToken = window.localStorage.getItem('token');
    var assignedUser = window.localStorage.getItem('user');

    var editedRoutine = {
        'creatorUserName': null, //to be added on backend
        'assigneeUserName': localStorage.getItem("user"),
        'routineTitle': jobTitle,
        'isTimed': jobTimed,
        'expectedDuration': jobExpected,
        'isNotifiable': jobEmail,
        'Tasks': currentRoutine.Tasks,
        'Feedbacks': []
    };

    var data = {token: loginToken, create: "m", model: JSON.stringify(editedRoutine)};   //use 'm' to modify and 'd' to delete
    //console.log(job);
    $.ajax({
        type: 'POST',
        dataType: 'application/json',
        data: data,
        url: uri + "Routine",
        success: function (data) {
            console.log(data);
            console.log("success");

            localStorage.removeItem("job");
            localStorage.removeItem("currentSequence");
            window.location.href = "joblist.html";
        },
        error: function (data) {
            console.log(data);
            if(data.status == 201){
                console.log("JOB ADDED");
                localStorage.removeItem("currentRoutine");
                location.href = "joblist.html";
            }else {
                console.log("JOB WAS NOT ADDED");
            }
        }
    });
}