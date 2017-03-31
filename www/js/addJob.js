

// ****************************************
// *  Copied structure from loginPage.js  *
// ****************************************
window.onload = function displayTasks()
{
    var list = document.querySelector('#listOfTasks');
    var taskList = JSON.parse(localStorage.getItem("currentTasks"));
    if(taskList != null)
    {
        for(var i = 0; i < taskList.length; i++)
        {
            var information = taskList[i];
            console.log(information);

            var toAdd = document.createElement('ul');
            toAdd.style.cssText = 'list-style:none';
            toAdd.innerHTML = '<li>Title: '+ information.taskName +'</li>' +
                '<li>Description: ' + information.taskDescription + '</li>' +
                '<li>Category: ' + information.TaskCategory.categoryName + '</li>' +
                '<li>Timed: ' + information.isTimed + '</li>' +
                '<li>Duration: ' + information.expectedDuration + '</li>';
            list.append(toAdd);
        }
    }
    else
    {
        console.log("tasks is empty");
    }
    var job = JSON.parse(localStorage.getItem("job"));
    if(job != null){
        document.getElementById("jobTitle").value = job.routineTitle;
        document.getElementById("jobTimed").checked = job.isTimed;
        document.getElementById("jobExpected").value = job.expectedDuration;
        document.getElementById("jobEmail").checked = job.isNotifiable;
    }
};

function resetTasks()
{
    localStorage.removeItem("currentTasks");
}

function addTask() {
    var arrOfTasks = JSON.parse(localStorage.getItem("currentTasks"));
    var jobTitle=$('#jobTitle').val();
    var jobTimed=document.getElementById('jobTimed').checked;
    var jobExpected=$('#jobExpected').val();
    var jobEmail=document.getElementById('jobEmail').checked;
    if(arrOfTasks == null || arrOfTasks[0] == null){
        var job = {
            'creatorUserName': null, //to be added on backend
            'assigneeUserName': localStorage.getItem("user"),
            'routineTitle': jobTitle,
            'isTimed': jobTimed,
            'expectedDuration': jobExpected,
            'isNotifiable': jobEmail,
            'Tasks': [],
            'Feedbacks': []};
        localStorage.setItem("job", JSON.stringify(job));
    }
    else {
        arrOfTasks.routineTitle = jobTitle;
        arrOfTasks.isTimed = jobTimed;
        arrOfTasks.expectedDuration = jobExpected;
        arrOfTasks.isNotifiable = jobEmail;
        localStorage.setItem("job", JSON.stringify(arrOfTasks));
    }
    window.location.href = "addTask.html";
}

function addJob() {
    jQuery(document).ready(function () {
        // TODO: update api url
        var uri = 'http://pjcdbrebuild2.gear.host/api/';
        var loginToken = window.localStorage.getItem("token");
        var jobTitle=$('#jobTitle').val();
        var jobTimed=document.getElementById('jobTimed').checked;
        var jobExpected=$('#jobExpected').val();
        var jobEmail=document.getElementById('jobEmail').checked;
        var arrOfTasks = JSON.parse(window.localStorage.getItem("currentTasks"));
        console.log(arrOfTasks);
        var job;

        if(window.localStorage.getItem("job") == null){
            job = {
                'creatorUserName': null, //to be added on backend
                'assigneeUserName': localStorage.getItem("user"),
                'routineTitle': jobTitle,
                'isTimed': jobTimed,
                'expectedDuration': jobExpected,
                'isNotifiable': jobEmail,
                'Tasks': arrOfTasks,
                'Feedbacks' : []};
        }
        else {
            job = JSON.parse(window.localStorage.getItem("job"));
            job.Tasks = arrOfTasks;
        }


        setTimeout(function() {
            keepAliveTwo(loginToken);
        }, 500);

        var data = {token: loginToken, create: "c", model: JSON.stringify(job)};
        console.log(job);
        $.ajax({
            type: 'POST',
            dataType: 'application/json',
            data: data,
            url: uri + "Routine",
            success: function (data) {
                // TODO: make it do stuff?
                console.log(data);
                localStorage.removeItem("job");
                localStorage.removeItem("currentTasks");
                localStorage.removeItem("sequence");

                //window.localStorage.setItem("job", data);
            },
            error: function (data) {
                console.log(data);
                if(data.status = 201){
                    console.log("JOB ADDED");
                    resetTasks();
                    location.href = "joblist.html";
                }
                console.log("JOB WAS NOT ADDED");
            }
        });

        /*$.post(uri+"Routine",{token: loginToken, create: "c", model: JSON.stringify(job)}, function (data) {
            console.log(data);
        })*/
    });
    //Uncomment when addJob is working correctly
    //window.location.href = "joblist.html";
    //resetTasks();
}