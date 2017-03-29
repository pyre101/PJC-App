

// ************************************
// *  Copied structure from notes.js  *
// ************************************

function Submit(){
    var arrOfTask;
    var sequenceNum = localStorage.getItem("sequence");
    if(localStorage.getItem('currentTasks') == null)
    {
        arrOfTask = [];
        sequenceNum = 1;
    }
    else
    {
        arrOfTask = JSON.parse(localStorage.getItem('currentTasks'));
    }
    if( !(document.getElementById("taskName").value == null &&
        document.getElementById("taskDesc").value == null &&
        document.getElementById("taskCat").value == null &&
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

        localStorage.setItem('currentTasks',JSON.stringify(arrOfTask));
        location.href="addJob.html";
    }
    else
    {
        console.log("Cannot have empty list");
    }
}