var windowHeight = 0 , windowWidth = 0

function pollViewport (){
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth
}

function imageReplace (){
    if (windowWidth < 900){
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/feedback/parallax1_crop.jpg')"
    } else if (windowWidth > 900){
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/feedback/parallax1.jpg')"
    }
}

setInterval(pollViewport, 50)
setInterval(imageReplace, 50)
