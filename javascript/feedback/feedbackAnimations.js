function centerText(){ 
 if (window.innerWidth < 576){
        document.getElementById("easerating").classList.add("text-center")
        document.getElementById("navrating").classList.add("text-center")
        document.getElementById("hearsource").classList.add("text-center")
        document.getElementById("feedbackdiv").classList.add("text-center")
        document.getElementById("omegatick").classList.add("text-center")
    } else if(window.innerWidth > 576){
        document.getElementById("easerating").classList.remove("text-center")
        document.getElementById("navrating").classList.remove("text-center")
        document.getElementById("hearsource").classList.remove("text-center")
        document.getElementById("feedbackdiv").classList.remove("text-center")
        document.getElementById("omegatick").classList.remove("text-center")
    }
}

function width(){
    if(window.innerWidth < 576){
        document.getElementById("formsection").classList.remove("formsectionfull")
        document.getElementById("formsection").classList.add('formsectionshrink')
    }else if(window.innerWidth > 576){
        document.getElementById("formsection").classList.remove('formsectionshrink')
        document.getElementById("formsection").classList.add('formsectionfull')
    }
}


setInterval(centerText,50)
setInterval(width, 50)