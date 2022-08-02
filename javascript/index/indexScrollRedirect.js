function nextpage1(){
    console.log(document.documentElement.scrollTop)
    console.log(document.getElementById("nextpage").scrollTop)
    if (document.getElementById("nextpage").scrollTop >= 104){
        window.location.replace("experience.html")
    }
}
currentPage = (window.location.pathname)
//setInterval(nextpage, 50)