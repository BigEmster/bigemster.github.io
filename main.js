document.GetElementsByTagName("body").onload = function checkLoggedIn() {
  if (getCookie("nick") != "") {
    document.getElementsByClassName("nick").innerHTML = getCookie("nick");
    document.getElementsByClassName("dependsOnNoNick").style.display = "none";
  } else {
    document.getElementsByClassName("dependsOnNick").style.display = "none";
  }
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
