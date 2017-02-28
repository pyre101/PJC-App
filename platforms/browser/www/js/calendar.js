jQuery(document).on('pageshow','#cal',function(e,data){
    if(e == null || data == null){
        console.log("Error loading calendar");
        return;
    }
    $('#calendar').fullCalendar({
        //any options we want here
        height: "auto",
        handleWindowResize: true
    })
});
