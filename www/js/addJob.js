

// ****************************************
// *  Copied structure from loginPage.js  *
// ****************************************
window.onload = function displayTasks()
{
    var list = document.querySelector('#listOfTasks');
    var taskList = JSON.parse(localStorage.getItem("current"));
    if(taskList != null)
    {
        for(var i = 0; i < taskList.length; i++)
        {
            var information = taskList[i];
            console.log(information);

            $('<div data-role="collapsible">' +
                '<h4>' + information.name + '</h4>' +
                '<div data-role="listview" class="ui-grid-a ui-responsive">' +
                '<div>Description: ' + information.description + '</div>' +
                '<div>Category: ' + information.category.categoryName + '</div>' +
                '<div>Timed: ' + information.timed + '</div>' +
                '<div>Duration: ' + information.duration + '</div>' +
                '</div>' +
                '</div>').appendTo(list);

            $(list).collapsibleset('refresh');
        }
    }
    else
    {
        console.log("tasks is empty");
    }
};

function resetTasks()
{
    localStorage.removeItem("current");
}

function addTask() {
    var arrOfTasks = JSON.parse(localStorage.getItem("current"));
    var jobTitle=$('#jobTitle').val();
    var jobTimed=$('#jobTimed').val();
    var jobExpected=$('#jobExpected').val();
    var jobEmail=$('#jobEmail').val();
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
        var uri = 'http://localhost:43393/api/';
        var loginToken = window.localStorage.getItem("token");
        var jobTitle=$('#jobTitle').val();
        var jobTimed=$('#jobTimed').checked;
        var jobExpected=$('#jobExpected').val();
        var jobEmail=$('#jobEmail').val();
        var arrOfTasks = JSON.parse(window.localStorage.getItem("current"));
        console.log(arrOfTasks);


        if(window.localStorage.getItem("job") == null){
            var job = {
                'creatorUserName': null, //to be added on backend
                'assigneeUserName': localStorage.getItem("user"),
                'routineTitle': jobTitle,
                'isTimed': jobTimed,
                'expectedDuration': jobExpected,
                'isNotifiable': jobEmail,
                'Tasks': arrOfTasks,
                'Feedbacks' : []};
        }


        setTimeout(function() {
            keepAliveTwo(loginToken);
        }, 500);


        $.ajax({
            type: 'POST',
            dataType: 'json',
            token: loginToken,
            create: "c",
            model: job,
            url: uri,
            success: function (data) {
                // TODO: make it do stuff?
                console.log(data);
                //window.localStorage.setItem("job", data);
            },
            error: function () {
                console.log("JOB WAS NOT ADDED");
            }
        });
    });
    //Uncomment when addJob is working correctly
    //resetTasks(); 
}