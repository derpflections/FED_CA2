var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);


if(page == "index.html"){
    var timeSpentOnPage = 0
    var globalTime = 0
} else {
    var timeSpentOnPage = 0 
    var globalTime = parseInt(sessionStorage.getItem("sitetime"))
}


function timeTracker(){
    timeSpentOnPage++
    sessionStorage.setItem("sitetime", (globalTime + timeSpentOnPage))
    console.log(sessionStorage.getItem("sitetime"))
}

function timeCalculator(){
    if(page == "feedback.html"){
        var minutes = Math.floor(sessionStorage.getItem("sitetime") / 60)
        var seconds = sessionStorage.getItem("sitetime") % 60
        document.getElementById("timeonSite").textContent = "You have been on the site for " + minutes +" minutes and " + seconds + " second(s)!"
    }
}


setInterval(timeTracker, 1000)
setInterval(timeCalculator, 500)