jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem("token");

    setTimeout(function () {
        keepAliveTwo(loginToken);
    }, 500);

    editJob();
//need to grab data when clicked on jobList to know which job.
    //ajax for localStorage
    function editJob()
    {
        //breaks JSON into list
        var job = JSON.parse(localStorage.getItem('jobList'));
        Console.log(userjob);

    }
});


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