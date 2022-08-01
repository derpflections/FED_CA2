"use strict"
var windowHeight = 0 , windowWidth = 0

function pollViewport (){
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth //checks  the height and width of the viewport
}

function imageReplace (){
    if (windowWidth < 900){
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/career/parallax2-crop.jpg')"
    } else if (windowWidth > 900){
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/career/parallax2.jpg')"
    }
}

setInterval(pollViewport, 50)
setInterval(imageReplace, 50)
