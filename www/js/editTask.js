function fillBoxes()
{
    var currentTask = JSON.parse(window.localStorage.getItem('currentEditJob'));
    var loginToken = window.localStorage.getItem('token');
    var assignedUser = window.localStorage.getItem('user');
    var boxPlace = $('#TaskDiv');

    var toAppend = document.createElement('div');
    toAppend.id = 'RoutineInfo';
    toAppend.innerHTML = `<center>
							  Title: <input type='text' id='routineTitle' value='`+currentRoutine.routineTitle +`' /><br/> 
							  Timed: <input type='checkbox' id='jobTimed' value='`+currentRoutine.isTimed +`' /> <br/> 
							  Expected Duration: <input type='time' id='expectedDuration' value='`+currentRoutine.expectedDuration+`' /> <br/>
							  Email on Job Completion: <input type='checkbox' id='isNotifiable' value'`+ currentRoutine.isNotifiable +`' /> <br/>
							   </center>
							  <h1> Tasks </h1>`;






}