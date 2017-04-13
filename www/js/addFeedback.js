function back()
{
	window.history.back(); 
}

function addFeedback()
{
	
	
	var feedBack = {
		'feedName' : document.getElementById('feedName').value,
		'feedMessage' : document.getElementById('feedMessage').value,
		'feedMedia' : document.getElementById('feedMedia').value,
		'feedType' : document.getElementById('feedType').value
		
	}
	
	
	var arrOfFeedBack = JSON.parse(localStorage.getItem('arrOfFeedBack'));
	if (typeof(arrOfFeedBack)== 'string') 
	{
		arrOfFeedBack = [arrOfFeedBack];
	}
	console.log(typeof(arrOfFeedBack));
	console.log(arrOfFeedBack); 
	
	
	arrOfFeedBack.push(feedBack);
	localStorage.setItem('arrOfFeedBack', JSON.stringify(arrOfFeedBack)); 
	window.history.back(); 

	
}