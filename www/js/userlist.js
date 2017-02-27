jQuery(document).ready(function() {
    var loginToken = window.localStorage.getItem("token");

    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);

    displayAllUsersForCoach();

    function displayAllUsersForCoach() {
        // Get a list of users under the logged in job coach
        var userList = JSON.parse(localStorage.getItem('userList'));

        // Loop through list of users and create an accordion menu for each user
        $.each(userList, function (key, item) {
            console.log(item.userName);
            $("<div data-role='collapsible'>" +
                "<h4>" + item.userName + "</h4>" +
                "<ul data-role='listview' data-inset='true'>" +
                    "<li><a href='#' onclick='"+getRoutineList(item.userName)+"'>Jobs</a></li>" +
                    "<li><a href='#'>Contact</a></li>" +
                "</ul>" +
            "</div>").appendTo($("#userList"));

            $('#userList').collapsibleset('refresh');
        });
    }

    function getRoutineList(username) {
        $.getJSON("http://pjcrebuild2.gear.host/api/Routine",
            {
                token: loginToken,
                username: username
            },
            function (data) {
                localStorage.setItem('jobList', JSON.stringify(data));
            }
        ).error(function () {
            console.log("ROUTINE LIST IS NOT SET");
        });
    }
});