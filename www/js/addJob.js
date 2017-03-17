

// ****************************************
// *  Copied structure from loginPage.js  *
// ****************************************
function displayTasks()
{
	var list = document.querySelector('#listOfTasks'); 
	var taskList = JSON.parse(localStorage.getItem("current"));
	if(taskList != null)
	{
		for(var i = 0; i < taskList.length; i++)
		{
			var information = taskList[i]; 
			console.log(information);
			
			var toAdd = document.createElement('ul');
			toAdd.innerHTML = `<li>Title: `+ information.name +`</li>
							   <li>Description: ` + information.description + `</li>
							   <li>Category: ` + information.category + `</li>
							   <li>Timed: ` + information.timed + `</li> 
							   <li>Duration: ` + information.duration + `</li>`;
			list.append(toAdd); 
		}
	}
	else
	{
		console.log("tasks is empty"); 
	}
}

function resetTasks()
{
	localStorage.removeItem("current"); 
}

function addJob() {
    jQuery(document).ready(function () {
        // TODO: update api url
        var uri = 'http://pjcdbrebuild2.gear.host/api/';
        var loginToken = window.localStorage.getItem("token");
        var jobTitle=$('#jobTitle').val();
        var jobTimed=$('#jobTimed').val();
        var jobExpected=$('#jobExpected').val();
        var jobEmail=$('#jobEmail').val();

        var job = {
            'Title': jobTitle,
            'Timed': jobTimed,
            'Expected': jobExpected,
            'Email': jobEmail};


        setTimeout(function() {
            keepAliveTwo(loginToken);
        }, 500);


        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: job,
            url: uri,
            success: function (data) {
                // TODO: make it do stuff?
                //window.localStorage.setItem("job", data);
            },
            error: function () {
                console.log("JOB WAS NOT ADDED");
            }
        });
    });
}