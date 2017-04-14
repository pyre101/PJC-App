

// ************************************
// *  Copied structure from notes.js  *
// ************************************
/*
jQuery(document).ready(function () {

});

$(document).on("pagecreate", function(){
    var uri = 'http://pjcdbrebuild2.gear.host/api/';
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
jQuery(document).ready(function () {
 displayFeedback(); 
});

 function displayFeedback(){
	
	var addToDiv = document.getElementById('feedBacks');
	var arrOfFeedBack = JSON.parse(localStorage.getItem('arrOfFeedBack')); 
	for(var i = 0; i < arrOfFeedBack.length; i++)
	{
		var FeedBack = arrOfFeedBack[i];
		
		if(FeedBack != null)
		{
			console.log(FeedBack); 
			var toAdd = document.createElement('div'); 
		    toAdd.innerHTML = 'Feedback Name: '+ FeedBack.feedbackTitle + '</br>';
			addToDiv.append(toAdd); 
		}
 	}
}
function addFeedback(){
	//localStorage.removeItem('arrOfFeedBack'); 
	if(localStorage.getItem('arrOfFeedBack') == null)
	{
		arrOfFeedBack = [];
		localStorage.setItem('arrOfFeedBack', JSON.stringify(arrOfFeedBack)); 
	}

	var currentTask = document.getElementById("taskName").value; 
	console.log(currentTask); 
	localStorage.setItem("feedbackParams",JSON.stringify(currentTask)); 
	window.location.href = 'addFeedback.html';
}


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
        //document.getElementById("taskTimed").value == null && #will never be null
        document.getElementById("taskExpected").value == null))
    {
		var jobExpected= document.getElementById("taskExpected").value;
		
		
        var task = {"sequenceNo": sequenceNum,
            "taskName": document.getElementById("taskName").value,
            "taskDescription": document.getElementById("taskDesc").value,
            "TaskCategory": {"categoryName":document.getElementById("taskCat").value},
            "isTimed": document.getElementById("taskTimed").checked,
            "expectedDuration": jobExpected,
			"arrOfFeedBack" : localStorage.getItem('arrOfFeedBack') 
        };
        sequenceNum++;
        localStorage.setItem("sequence", sequenceNum);

        arrOfTask.push(task);

        var currentRoutine = JSON.parse(window.localStorage.getItem('currentRoutine'));
        if (currentRoutine != null)
        {
            currentRoutine.Tasks = arrOfTask;
            localStorage.setItem('currentRoutine',JSON.stringify(currentRoutine));
        }

        localStorage.setItem('currentTasks',JSON.stringify(arrOfTask));
		localStorage.removeItem('arrOfFeedBack'); 
        window.history.back();
    }
    else
    {
        console.log("Cannot have empty list");
    }
}