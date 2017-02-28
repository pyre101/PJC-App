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
                "<ul data-role='listview'>" +
                    // TODO: Have the jobs/contact button link correctly
                    "<li><a href='joblist.html'>Jobs</a></li>" +
                    "<li onclick='getUserInfo(\""+$userName+"\")'><a href='#'>Contact</a></li>" +
                "</ul>" +
            "</div>").appendTo($("#userList"));

            $('#userList').collapsibleset('refresh');
        });

    }
});
