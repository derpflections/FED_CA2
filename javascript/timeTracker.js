
if(filename == "index.html"){
    var timeSpentOnPage = 0
    var globalTime = 0
    var filename = url.substring(url.lastIndexOf('/')+1);
} else {
    var timeSpentOnPage = 0 
    var globalTime = parseInt(sessionStorage.getItem("sitetime"))
    var filename = url.substring(url.lastIndexOf('/')+1);
}


function timeTracker(){
    timeSpentOnPage++
    sessionStorage.setItem("sitetime", (globalTime + timeSpentOnPage))
    console.log(sessionStorage.getItem("sitetime"))
}

function timeCalculator(){
    if(filename == "feedback.html"){
        var minutes = Math.floor(sessionStorage.getItem("sitetime") / 60)
        var seconds = sessionStorage.getItem("sitetime") % 60
        document.getElementById("timeonSite").textContent = "You have been on the site for " + minutes +" minutes and " + seconds + " second(s)!"
    }
}


setInterval(timeTracker, 1000)
setInterval(timeCalculator, 500)