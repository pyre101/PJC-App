function editTask(taskToEdit)
{
    var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));

    var jobList = JSON.parse(localStorage.getItem('jobList'));

    console.log(currentRoutine.Tasks[taskToEdit].taskName);
    localStorage.setItem("currentEditJob", JSON.stringify(currentRoutine.Tasks[taskToEdit]));
    document.location.href = "editTask.html";
}

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
            console.log("JOB WAS NOT DELETED");
        }
    });

    console.log(data);
    window.location.href = "joblist.html";
}


jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem('token');
    setTimeout(function () {
        keepAliveTwo(loginToken);
    }, 500);

    editJob();
});


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
function editJob()
{
    var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));
    console.log(currentRoutine);
    var loginToken = window.localStorage.getItem('token');
    var assignedUser = window.localStorage.getItem('user');
    /*var listPlace = $('#RoutineDiv');
    //breaks JSON into list

    //console.log('Working');
    //console.log(JSON.parse(localStorage.getItem('jobList'))); 
    // Get a list of users under the logged in job coach
    var jobList = JSON.parse(localStorage.getItem('jobList'));
    //console.log(jobList); 

    // Loop through list of users jobs and create buttons for each
    for(var i = 0; i < jobList.length; i++)
    {

        //console.log(jobList[i].routineTitle + " " + currentRoutine);
        if(jobList[i].routineTitle == currentRoutine)
        {
            currentRoutine = jobList[i];
        }
    }
    window.localStorage.setItem("currentRoutine", JSON.stringify(currentRoutine));*/
    //console.log(currentRoutine); 
    var toAppend = document.createElement('div');
    toAppend.id = 'RoutineInfo';
    toAppend.innerHTML = "<div style='align-self: center'>" +
        "Title: <input type='text' id='routineTitle' value='"+currentRoutine.routineTitle +"' /><br/> " +
        "Timed: <input type='checkbox' id='jobTimed' value='"+currentRoutine.isTimed +"' /> <br/>" +
        "Expected Duration: <input type='time' id='expectedDuration' value='"+currentRoutine.expectedDuration+"' /> <br/>" +
        "Email on Job Completion: <input type='checkbox' id='isNotifiable' value'"+ currentRoutine.isNotifiable +"' /> <br/>" +
        "</div>" +
        "<h1> Tasks </h1>";

    //center this section(?)


    listPlace.append(toAppend);
    for(var i = 0; i < currentRoutine.Tasks.length; i++)
    {
        console.log(currentRoutine.Tasks[i]);
        toAppend = document.createElement('div');
        toAppend.id = 'Task' + i;
        toAppend.innerHTML = '<div class="ui-block-solo"><a  id="task'+ i +'" class="ui-btn" onclick="editTask('+i+')"> Edit Task: '+ currentRoutine.Tasks[i].taskName+'</a></div>';
        var listPlace = document.getElementById('RoutineInfo');
        listPlace.append(toAppend);

    }




    /*
     $.each(jobList, function (key, item) {

     console.log(item.routineTitle +" " + routineName); 
     if(item.routineTitle == routineName) {
     console.log(item.routineTitle);

     toAppend = document.createElement('div');
     toAppend.innerHTML =
     '<div>hello</div>'; 
     /*
     "<div class='ui-block-solo'>"+
     "<label for='JobName'>Job Name: </label>"+
     "<input type='text' name='JobName' id='JobName' placeholder='JobName' value=\""+item.routineTitle+"\">"+

     "<label for='EstimatedTime'>Estimated Time:</label>"+
     "<input type='time' name='EstimatedTime' id='EstimatedTime' placeholder='EstimatedTime' value=\""+item.expectedDuration+"\">"+

     "<label for='NumberTasks'># of tasks: </label>"+
     "<input type='text' name='NumberTasks' id='NumberTasks' placeholder='NumberTasks' value='0'>"+

     "<label for='RoutineID'>RoutineID: </label>"+
     "<input type='text' name='RoutineID' id='RoutineID' placeholder='RoutineID' value=\""+item.routineID+"\">"+

     "<label for='CreatorUserName'>Creator UserName: </label>"+
     "<input type='text' name='CreatorUserName' id='CreatorUserName' placeholder='CreatorUserName' value=\""+item.creatorUserName+"\">"+

     "<label for='AssigneeUserName'>Assignee UserName: </label>"+
     "<input type='text' name='AssigneeUserName' id='AssigneeUserName' placeholder='AssigneeUserName' value=\""+item.assigneeUserName+"\">"+

     "<label for='isTimed'>Timed: </label>"+
     "<input type='text' name='isTimed' id='isTimed' placeholder='isTimed' value=\""+item.isTimed+"\">"+

     "<label for='updatedDate'>Updated Date: </label>"+
     "<input type='text' name='updatedDate' id='updatedDate' placeholder='updatedDate' value=\""+item.updatedDate+"\">"+

     "<label for='isDisabled'>Disabled Status: </label>"+
     "<input type='text' name='isDisabled' id='isDisabled' placeholder='isDisabled' value=\""+item.isDisabled+"\">"+

     "<label for='isNotifiable'>Notifiable: </label>"+
     "<input type='text' name='isNotifiable' id='isNotifiable' placeholder='isNotifiable' value=\""+item.isNotifiable+"\">"+

     "</div>";

     listPlace.append(toAppend);

     }
     */



    /*
     $.getJSON('http://pjcdbrebuild2.gear.host/api/Routine',
     {
     token: loginToken,
     username: assignedUser
     },
     function(data) // put data into text boxes    userinfo.js
     {
     console.log('Attempting to load data from GetRoutineListForUser:')
     console.log(data);
     });


     //need to create text boxes filled with data

     */
}



/*
 $('<div data-role='collapsible' class='individualTask' stepnumber='' + (i+1) + '' id='task' + i + ''>' +
 '<h3 id='taskName'>' + taskNames[i] + '</h3>' +
 '<a href='#verification' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-btn finishTask'>Finish Task</a>' +
 '<table style='width:100%'>' +
 '<tr>' +
 '<td><b>Task Time</b></td>' +
 '<td id='taskTime' + i + ''>00:00:00</td>' +
 '</tr>' +
 '<tr>' +
 '<td><b>Estimated Time</b></td>' +
 '<td id='expectedDuration' + i + ''>' + expectedDurations[i] + '</td>' +
 '</tr>' +
 '</table>' +
 '<br/>' +
 '<div class='ui-grid-a ui-responsive'>' +
 '<div class='ui-block-a'><b>Description</b></div>' +
 '<div class='ui-block-b' id='description'><p>' + taskDescriptions[i] + '</p></div>' +
 '<div class='ui-block-a'></div>' +
 '</div>' +
 '<a href='#makeNote' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-btn make-note'>Make Note</a>' +
 '</div>').appendTo($('#tasksList'));
 */
