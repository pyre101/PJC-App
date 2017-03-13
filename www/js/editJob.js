jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem("token");

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
    toAdd.innerHTML = `Task Name: <input type="text" name="taskName" width="80%"/><br/>
				Description: <input type="text" name="description" width="80%"/><br/>
				Expected Duration:<input type="text" name="expectedDurationTask1" width="80%"/>`;
    list.appendChild(toAdd)
    var breakDiv;
    breakDiv.innerHTML = '<br/>';
    list.appendChild(breakDiv);
}

//need to grab data when clicked on jobList to know which job.
    //ajax for localStorage
function editJob(routineName)
    {
        var loginToken = window.localStorage.getItem("token");
        //breaks JSON into list

        Console.log(userjob);

        $.getJSON("http://pjcdbrebuild2.gear.host/api/Routine",
            {
                token: loginToken,
                username: username,
                routineTitle: routineName
            },
            function(data) // put data into text boxes    userinfo.js
            {

            }


            //need to create text boxes filled with data


    }



/*
$("<div data-role='collapsible' class='individualTask' stepnumber='" + (i+1) + "' id='task" + i + "'>" +
    "<h3 id='taskName'>" + taskNames[i] + "</h3>" +
    "<a href='#verification' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-btn finishTask'>Finish Task</a>" +
    "<table style='width:100%'>" +
    "<tr>" +
    "<td><b>Task Time</b></td>" +
    "<td id='taskTime" + i + "'>00:00:00</td>" +
    "</tr>" +
    "<tr>" +
    "<td><b>Estimated Time</b></td>" +
    "<td id='expectedDuration" + i + "'>" + expectedDurations[i] + "</td>" +
    "</tr>" +
    "</table>" +
    "<br/>" +
    "<div class='ui-grid-a ui-responsive'>" +
    "<div class='ui-block-a'><b>Description</b></div>" +
    "<div class='ui-block-b' id='description'><p>" + taskDescriptions[i] + "</p></div>" +
    "<div class='ui-block-a'></div>" +
    "</div>" +
    "<a href='#makeNote' data-rel='popup' data-position-to='window' data-transition='pop' class='ui-btn make-note'>Make Note</a>" +
    "</div>").appendTo($("#tasksList"));
*/

