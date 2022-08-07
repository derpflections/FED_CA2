var windowHeight = 0 , windowWidth = 0
document.getElementById("c1pic").style.width = 420
document.getElementById("c1pic").style.height = 320

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

function imageScale(){
    if(window.innerWidth > 1600){
        document.getElementById("c1pic").width = (window.innerWidth * 0.21875)
        document.getElementById("c1pic").height = (window.innerWidth * 0.21875) / 1.3125
        document.getElementById("c2pic").width = (window.innerWidth * 0.21875)
        document.getElementById("c2pic").height = (window.innerWidth * 0.21875) / (460/360)
        document.getElementById("c3pic").width = (window.innerWidth * 0.21875)
        document.getElementById("c3pic").height = (window.innerWidth * 0.21875) / (460/300)
    } else if (window.innerWidth < 1200){
        document.getElementById("c1pic").width = 0.8 * window.innerWidth
        document.getElementById("c1pic").height = (0.8 * window.innerWidth)/ 1.3125
        document.getElementById("c2pic").width = 0.8 * window.innerWidth
        document.getElementById("c2pic").height = (0.8 * window.innerWidth)/ (460/360)
        document.getElementById("c3pic").width = 0.8 * window.innerWidth
        document.getElementById("c3pic").height = (0.8 * window.innerWidth)/ (460/300)
    }
}

function cardChange(){
    if(window.innerWidth < 1200){
        document.getElementById("card1").classList.remove("w-50")
        document.getElementById("card2").classList.remove("w-50")
        document.getElementById("card3").classList.remove("w-50")
    }else if(window.innerWidth > 1200){
        document.getElementById("card1").classList.add("w-50")
        document.getElementById("card2").classList.add("w-50")
        document.getElementById("card3").classList.add("w-50")
    }
}


setInterval(pollViewport, 50)
setInterval(imageReplace, 50)
setInterval(imageScale, 50)
setInterval(cardChange,50)
