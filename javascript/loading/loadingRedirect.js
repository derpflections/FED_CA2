var initialPage = ""
var destPage = ""
var finalPage = ""
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

//document.getElementById("nextpage").addEventListener("scroll", indexPageRedirect)

function indexPageRedirect(){
    initialPage = "index.html"
    destPage = "experience.html"
    sessionStorage.setItem("initialPage", initialPage)
    sessionStorage.setItem("destPage", destPage)
    window.location.assign("loadingPage.html")
}

function destPageRedirect(){
    window.location.assign(sessionStorage.getItem("destPage"))
}

if (filename == 'loadingPage.html'){
    setTimeout(destPageRedirect, 2500)
}