/**
 * Created by Tanner_2 on 2/14/2017.
 */
jQuery(document).ready(function () {
    localStorage.removeItem('routineList');
    localStorage.removeItem('userList');
    localStorage.removeItem('jobList');
    document.getElementById("userName").innerHTML = "Hello " + localStorage.getItem('userName') + "!";
    document.getElementById("userName").value = localStorage.getItem('name');

    var loginToken = window.localStorage.getItem("token");
    var uri = 'http://pjcdbrebuild.gear.host/api/';


    $.getJSON(uri + "Routine",
        {token: loginToken},
        function (data) {
            localStorage.setItem('routineList', JSON.stringify(data));
        }
    ).error(function() {
        console.log("ROUTINE LIST IS NOT SET");
    });

    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);


    // TODO: use the correct API call, I just guessed (pseudo-code)
    $.getJSON(uri + "Users",
        {token: loginToken},
        function (data) {
            localStorage.setItem('userList', JSON.stringify(data));
        }
    ).error(function() {
        console.log("USER LIST IS NOT SET");
    });


    // TODO: use the correct API call, I just guessed (pseudo-code)
    $.getJSON(uri + "Jobs",
        {token: loginToken},
        function (data) {
            localStorage.setItem('jobList', JSON.stringify(data));
        }
    ).error(function() {
        console.log("JOB LIST IS NOT SET");
    });


    function keepAlive(tempToken) {
        var keepAliveUri = 'http://pjcdbrebuild2.gear.host/api/Login';
        var token = tempToken;
        $.getJSON(keepAliveUri,
            {token: token},
            function (data) {
                // On success, the token is valid, has not expired, and has been renewed.
                console.log("kept alive");
            }
        ).error(function() {
            //error goes here
            alert("failed to keep alive");
        });
    }
});