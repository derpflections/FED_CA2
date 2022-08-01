var windowHeight = 0 , windowWidth = 0

function pollViewport (){
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth //checks the height and width of the viewport
}

function imageReplace (){
    if (windowWidth < 900){ //checks if window width is below 900px, and replaces image if below
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/index/parallax2-crop.jpg')"
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/index/parallax-crop_50.jpg')"
        document.getElementById("parallax-content3").style.backgroundImage = "url('../images/index/parallax2-crop.jpg')"
    } else if (windowWidth > 900){ //replaces image if viewport is above 900px
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/index/parallax2.jpg')"
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/index/parallax.jpg')"
        document.getElementById("parallax-content3").style.backgroundImage = "url('../images/index/parallax2.jpg')"
    }
}

function textReplace (){
    if (windowWidth < 1080){
        document.getElementById("row1selfportrait").src = " "
    } else if(windowWidth > 1080){
        document.getElementById("row1selfportrait").src = "../images/index/self-portrait-min.jpg"
    }
}

setInterval(pollViewport, 50)
setInterval(imageReplace, 50)
setInterval(textReplace, 50)