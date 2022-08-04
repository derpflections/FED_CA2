function textResizer(){
 if (window.innerWidth < 576){
    document.getElementById("p2row1divtext").style.fontSize = "1em"
 } else if (window.innerWidth > 576){
    document.getElementById("p2row1divtext").style.fontSize = "1.5em"
 }
}

setInterval(textResizer, 50)
