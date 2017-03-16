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
            var $userName = item.userName;
            $("<div data-role='collapsible' >" +
                "<h4 id='user'>" + $userName + "</h4>" +
                "<div data-role='listview' class='ui-grid-a ui-responsive'>" +
                // TODO: Have the jobs/contact button link correctly
                    "<div onclick='getRoutineList(\""+$userName+"\")' class='ui-btn'>Jobs</div>" +
                    "<div onclick='getUserInfo(\""+$userName+"\")' class='ui-btn'>Contact</div>" +
                "</div>" +
                "</div>").appendTo($("#userList"));

            $('#userList').collapsibleset('refresh');
        });

    }
});

// Link to the appropriate joblist.html for the selected user
function getRoutineList(username) {
    var loginToken = window.localStorage.getItem("token");

    window.localStorage.setItem("user", username);

    $.getJSON("http://pjcdbrebuild2.gear.host/api/Routine",
        {
            token: loginToken,
            username: username
        },
        function (data) {
            console.log(JSON.stringify(data));
            localStorage.setItem('jobList', JSON.stringify(data));
            location.href = "joblist.html";
        }
    ).error(function () {
        console.log("ROUTINE LIST IS NOT SET");
    });
}