
function newLoginInfo(newUser, newPass, repeatPass) {
    if (privacy == false) {
        alert("Must accept terms & privacy permissions");
        openForm();
        return false;
    }
    else if (newPass != repeatPass) {
        alert("passwords don't match");
        return false;
    }

    console.log("user = " + newUser);
    console.log("pass = " + newPass);
    console.log("pass repeat = " + repeatPass);

    var passes = false;

    $.ajax({
        type: 'POST',
        url: "/newUsers",
        data: {
            "user": newUser,
            "pass": newPass
        },
        async: false
    });

    console.log("username = " + newUser);
    console.log("theme = " + "1");
    console.log("tracker = " + "0");
    setCookie("username", newUser, .042);
    setCookie("theme", "1", .042);
    setCookie("tracker", "0", .042);
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome " + username);
        return true;
    }
    return false;
}
/*
 if (passes == false) {
        alert("Oops. Something went wrong :/");
        return false;
    }*/


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}