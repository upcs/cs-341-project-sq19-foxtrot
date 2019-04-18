
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

    $.post("/newUsers", { 
        user:newUser, 
        pass:newPass 
    })
        .then(
            function success() {
                console.log("username = " + newUser);
                console.log("theme = " + 1);
                console.log("tracker = " + 0);
                setCookie("username", newUser, .042);
                setCookie("theme", 1, .042);
                setCookie("tracker", 0, .042);
                passes = true;
                var username = getCookie("username");
                if (username != "") {
                    alert("Welcome " + username);
                    return passes;
                }
            },
            function fail(data, status) {
                alert('Request failed.  Returned status of ' + status);
            }
        );

    if (passes == false) {
        alert("Oops. Something went wrong :/");
        return false;
    }
    return false;
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}