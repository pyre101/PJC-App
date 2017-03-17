

// ************************************
// *  Copied structure from notes.js  *
// ************************************

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
            var userTask = {
                'Title':taskName,
                'Description':taskDesc,
                'Category':taskCat,
                'Timed':taskTimed,
                'Expected':taskExpected};

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
});

function Submit(){
	var arrOfTask;
		if(localStorage.getItem('current') == null)
		{
			arrOfTask = [];
		}
		else
		{
			arrOfTask = JSON.parse(localStorage.getItem('current')); 
		}			
	if( !(document.getElementById("taskName").value == null &&  
	document.getElementById("taskDesc").value == null && 
	document.getElementById("taskCat").value == null && 
	document.getElementById("taskTimed").value == null &&
	document.getElementById("taskExpected").value == null))
	{
		var task = {"name": document.getElementById("taskName").value,
			"description": document.getElementById("taskDesc").value,
			"category": document.getElementById("taskCat").value,
			"timed": document.getElementById("taskTimed").value,
			"duration": document.getElementById("taskExpected").value
		};
		
		arrOfTask = [ ...arrOfTask, task]; 
		
		//console.log(task);
		localStorage.setItem('current',JSON.stringify(arrOfTask));
		//console.log(JSON.parse(localStorage.getItem('current'))); 
	}
	else
	{
		console.log("Cannot have empty list");
	}
}
