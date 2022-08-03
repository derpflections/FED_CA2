var windowHeight = 0 , windowWidth = 0

function pollViewport (){
    windowHeight = window.innerHeight
    windowWidth = window.innerWidth //checks the height and width of the viewport
}

function tableImage(){
    if(windowWidth > 1200){
        document.getElementById("r2c1").width = (windowWidth*0.2546)
        document.getElementById("r2c1").height = ((windowWidth*0.2546)*.7505)
        document.getElementById("r2c2").width = (windowWidth*0.2546)
        document.getElementById("r2c2").height = ((windowWidth*0.2546)*.7505)
    } else if (windowWidth < 1200){
        document.getElementById("r2c1").width = ((1200 * 0.2546) * 1.7) + 16
        document.getElementById("r2c1").height = (((1200 * 0.2546) *.7505) * 1.7) + 16
        document.getElementById("r2c2").width = ((1200 * 0.2546) * 1.7) + 16
        document.getElementById("r2c2").height = (((1200 * 0.2546) * .7505) * 1.7) + 16
    }
}




setInterval(pollViewport,50)
setInterval(tableImage,50)