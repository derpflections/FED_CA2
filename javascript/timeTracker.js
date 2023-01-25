var path = window.location.pathname;
var page = path.split("/").pop(); //identifies name of file
console.log(page); //prints in console for troubleshooting


if(page == "index.html"){  //initalizes time for index page
    var timeSpentOnPage = 0
    var globalTime = 0
} else {
    var timeSpentOnPage = 0 
    var globalTime = parseInt(sessionStorage.getItem("sitetime"))
}


function timeTracker(){  //adds a second to total time
    timeSpentOnPage++
    sessionStorage.setItem("sitetime", (globalTime + timeSpentOnPage))
    console.log(sessionStorage.getItem("sitetime"))
}

function timeCalculator(){ //breaks the total time into mins and sec + prints
    if(page == "feedback.html"){
        var minutes = Math.floor(sessionStorage.getItem("sitetime") / 60)
        var seconds = sessionStorage.getItem("sitetime") % 60
        document.getElementById("timeonSite").textContent = "You have been on the site for " + minutes +" minutes and " + seconds + " second(s)!"
    }
}


setInterval(timeTracker, 1000)
setInterval(timeCalculator, 500)