

// ****************************************
// *  Copied structure from loginPage.js  *
// ****************************************


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