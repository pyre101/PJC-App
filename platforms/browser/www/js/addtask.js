

// ************************************
// *  Copied structure from notes.js  *
// ************************************
/*
jQuery(document).ready(function () {

});

$(document).on("pagecreate", function(){
    var uri = 'http://localhost:43393/api/';
    var loginToken = window.localStorage.getItem("token");
    Submit();
    $("#save").click(function(){
        var taskName = document.getElementById("taskName").value;
        var taskDesc = document.getElementById("taskDesc").value;
        var taskCat = document.getElementById("taskCat").value;
        var taskTimed = document.getElementById("taskTimed").value;
        var taskExpected = document.getElementById("taskExpected").value;

        if(taskName == ""){
            $("#emptyTask #message")[0].innerText = "*** TODO: addtask.js ***";
            $("#emptyTask").popup("open");
        } else if(taskDesc == ""){
            $("#emptyTask #message")[0].innerHTML = "*** TODO: addtask.js ***";
            $("#emptyTask").popup("open");
        }

        if (taskName != "" && taskDesc !== "") {
            console.log(uri);
            console.log(loginToken);
            var job = window.localStorage.getItem("job");
            var userTask = {
                'Title':taskName,
                'Description':taskDesc,
                'Category':taskCat,
                'Timed':taskTimed,
                'Expected':taskExpected
            };
            job = job + userTask;
            window.localStorage.setItem("job", job);
            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: userTask,
                url: uri + "Task?token=" + loginToken,
                success: function(data){
                    document.getElementById("taskForm").reset();
                    window.location.href = "addJob.html";
                },
                error: function(){
                    console.log("TASK DID NOT UPLOAD");
                }
            });
        }

    });

    $("#cancel").click(function(){
        document.getElementById("taskForm").reset();
        location.href="addJob.html";
    });
    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);
});*/

function Submit(){
    var arrOfTask;
    var sequenceNum = localStorage.getItem("sequence");
    if(localStorage.getItem('current') == null)
    {
        arrOfTask = [];
        sequenceNum = 1;
    }
    else
    {
        arrOfTask = JSON.parse(localStorage.getItem('current'));
    }
    if( !(document.getElementById("taskName").value == null &&
        document.getElementById("taskDesc").value == null &&
        document.getElementById("taskCat").value == null &&
        //document.getElementById("taskTimed").value == null && #will never be null
        document.getElementById("taskExpected").value == null))
    {
        var task = {"sequenceNo": sequenceNum,
            "taskName": document.getElementById("taskName").value,
            "taskDescription": document.getElementById("taskDesc").value,
            "TaskCategory": {"categoryName":document.getElementById("taskCat").value},
            "isTimed": document.getElementById("taskTimed").checked,
            "expectedDuration": document.getElementById("taskExpected").value
        };
        sequenceNum++;
        localStorage.setItem("sequence", sequenceNum);

        arrOfTask.push(task);

        //console.log(task);
        localStorage.setItem('current',JSON.stringify(arrOfTask));
        //console.log(JSON.parse(localStorage.getItem('current')));
        location.href="addJob.html";
    }
    else
    {
        console.log("Cannot have empty list");
    }
}