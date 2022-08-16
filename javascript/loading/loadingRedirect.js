var initialPage = ""
var destPage = ""
var finalPage = ""
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);


function indexPageRedirect(){  //redirects for indexpage
    initialPage = "index.html"
    destPage = "experience.html"
    sessionStorage.setItem("initialPage", initialPage)
    sessionStorage.setItem("destPage", destPage)
    window.location.assign("loadingPage.html")
}

function experiencePageRedirect(){
    initialPage = "experience.html"
    destPage = "career.html"
    sessionStorage.setItem("initialPage", initialPage)
    sessionStorage.setItem("destPage", destPage)
    window.location.assign("loadingPage.html")
}

function careerPageRedirect(){
    initialPage = "career.html"
    destPage = "feedback.html"
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