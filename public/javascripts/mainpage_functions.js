
//External Citation: https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page-->

//Allows changes of theme
function changeCSS(cssFile, cssLinkIndex) {
if(getCookie("theme")==1 && cssFile == "/stylesheets/design.css")
{
  return;
}
else if(getCookie("theme")==2 && cssFile == "/stylesheets/design2.css")
{
  return;
}
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);
 var tnumber;
  if (getCookie("theme") == 1) {
    setCookie("theme", 2, .042);
    tnumber = 2;
  }
  else {
    setCookie("theme", 1, .042);
    tnumber = 1;
  }

  user = getCookie("username");

  $.ajax({
    type: 'POST',
    url: "/insert_theme",
    data: {
      "tnumber": tnumber,
      "user": user
    },
    success: null
  });
  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
location.reload();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

console.log("cookie = " + getCookie("theme"));

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
