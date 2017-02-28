jQuery(document).ready(function () {
    var loginToken = window.localStorage.getItem("token");

    setTimeout(function() {
        keepAliveTwo(loginToken);
    }, 500);

    //TODO: finish function to get info for the selected user, create user object

    function putInfo($user) {
        window.location.href = "../userinfo.html";
        $.getElementById("name").innerHTML = $user.name.toString();
        $.getElementById("phone").innerHTML = $user.phone.toString();
        $.getElementById("address").innerHTML = $user.address.toString();
        $.getElementById("city").innerHTML = $user.city.toString();
        $.getElementById("state").innerHTML = $user.state.toString();
        $.getElementById("zip").innerHTML = $user.zip.toString();
    }
});
