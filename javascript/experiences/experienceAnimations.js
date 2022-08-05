function textResizer(){
 if (window.innerWidth < 576){
    document.getElementById("p2row1divtext").style.fontSize = "1em"
 } else if (window.innerWidth > 576){
    document.getElementById("p2row1divtext").style.fontSize = "1.5em"
 }
}

function accordionOpener(){
   if (window.innerWidth > 2000){
      document.getElementById("collapseFour").classList.add("show")
   } else {
      document.getElementById("collapseFour").classList.remove("show")
   }
}

setInterval(textResizer, 50)
accordionOpener()
