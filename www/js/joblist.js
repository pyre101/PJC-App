jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem("token");

    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);

    displayAllUsersJobs();

    function displayAllUsersJobs() {
        // Get a list of users under the logged in job coach
        var jobList = JSON.parse(localStorage.getItem('jobList'));

        // Loop through list of users jobs and create buttons for each
        $.each(jobList, function (key, item) {
            console.log(item.userJob);
            $("<div class='ui-block-solo'><a href='editJob.html' data-ajax='false' +" +
                "class='ui-btn ui-icon-clock ui-btn-icon-top'>" + item.userJob +
                "</a></div>").appendTo($("jobList"));

            $('#jobList').collapsibleset('refresh');
        });

    }
});



/*
<div class="ui-block-solo"><a href="editJob.html" data-ajax="false" class="ui-btn ui-icon-clock ui-btn-icon-top">Tools</a></div>
 */