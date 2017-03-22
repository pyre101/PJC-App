jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem("token");

    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);

    var listPlace = $("#jobList");

    displayAllUsersJobs();

    function displayAllUsersJobs() {
        // Get a list of users under the logged in job coach
        var jobList = JSON.parse(localStorage.getItem('jobList'));

        // Loop through list of users jobs and create buttons for each
        $.each(jobList, function (key, item) {
            console.log(item.routineTitle);
            $("<div class='ui-block-solo'><a onclick='editJob(\""+item.routineTitle+"\")' href='editJob.html' data-ajax='false' " +
                "class='ui-btn'>" + item.routineTitle +
                "</a></div>").appendTo(listPlace);

            listPlace.collapsibleset('refresh');
        });
        //TODO: Create more of a visual difference between list and add buttons
    $("<div class='ui-block-solo'><a href='addJob.html' data-ajax='false'" +
        " class='ui-btn ui-icon-plus ui-btn-icon-top' style='background-color: #1d873b'>Add Job</a></div>").appendTo(listPlace);

        listPlace.collapsibleset('refresh');
    }
});



/*
<div class="ui-block-solo"><a href="editJob.html" data-ajax="false" class="ui-btn ui-icon-clock ui-btn-icon-top">Tools</a></div>
 */