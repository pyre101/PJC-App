$(document).on('pageshow','#cal',function(e,data){

    $('#calendar').fullCalendar({
        //any options we want here
        height: "auto",
        handleWindowResize: true
    })
});
