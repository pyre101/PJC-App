

function addJob()
{
    console.log('hi');
    var list = document.querySelector('#listOfTasks'); 
    var toAdd = document.createElement('li');
    toAdd.innerHTML = `Task Name: <input type="text" name="taskName" width="80%"></input><br/>
				Description: <input type="text" name="description" width="80%"></input><br/>
				Expected Duration:<input type="text" name="expectedDurationTask1" width="80%">`;
    list.appendChild(toAdd)
}