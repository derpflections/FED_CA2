let carouselArray = []
carouselArray.push("<p>Represented the school for the Pixel Perfect Competition!</p>")
carouselArray.push("<p>Fun with classmates.</p>")
carouselArray.push("<p>Delegate of Russia during Model United Nations.</p>")

var currentCaption = ""

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

function carouselCaption(){
   if(window.innerWidth < 768){
      document.getElementById("expCarouselCap").classList.remove("visually-hidden")
      if(document.getElementById("img1").classList.contains("active")){
         currentCaption = carouselArray[0]
      }
      if(document.getElementById("img2").classList.contains("active")){
         currentCaption = carouselArray[1]
      }
      if(document.getElementById("img3").classList.contains("active")){
         currentCaption = carouselArray[2]
      }
      document.getElementById("expCarouselCap").innerHTML = currentCaption
   } else if(window.innerWidth > 768){
      document.getElementById("expCarouselCap").classList.add("visually-hidden")
   }
}


setInterval(textResizer, 50)
accordionOpener()
setInterval(carouselCaption,100)