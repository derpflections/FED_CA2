var windowHeight = 0 , windowWidth = 0

function pollViewport (){
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth //checks the height and width of the viewport
}

function imageReplace (){
    if (windowWidth < 1200){ //checks if window width is below 900px, and replaces image if below
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/index/parallax2-crop.jpg')"
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/index/parallax-crop_50.jpg')"
        document.getElementById("parallax-content3").style.backgroundImage = "url('../images/index/parallax2-crop.jpg')"
    } else if (windowWidth > 1200){ //replaces image if viewport is above 900px
        document.getElementById("parallax-content1").style.backgroundImage = "url('../images/index/parallax2.jpg')"
        document.getElementById("parallax-content2").style.backgroundImage = "url('../images/index/parallax.jpg')"
        document.getElementById("parallax-content3").style.backgroundImage = "url('../images/index/parallax2.jpg')"
    }
}

function textReplace (){
    if (windowWidth < 1200){
        document.getElementById("row1div").innerHTML = ""
    } else if(windowWidth > 1200){
        document.getElementById("row1div").innerHTML = '<img src="../images/index/self-portrait-min.jpg"  id="row1selfportrait" class="align-middle" height="320" width="535">'
    }
}

setInterval(pollViewport, 50)
setInterval(imageReplace, 50)
setInterval(textReplace, 50)