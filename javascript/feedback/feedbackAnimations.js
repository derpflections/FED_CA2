function centersocials(){
    if(window.innerWidth > 1200){
        document.getElementById("instagram").classList.add("fullwidth")
        document.getElementById("youtube").classList.add("fullwidth")
        document.getElementById("twitter").classList.add("fullwidth")
        document.getElementById("reddit").classList.add("fullwidth")
        document.getElementById("email").classList.add("fullwidth")
        document.getElementById("address").classList.add("fullwidth")
        document.getElementById("phone").classList.add("fullwidth")
    } else if(window.innerWidth < 1200){
        document.getElementById("instagram").classList.remove("fullwidth")
        document.getElementById("youtube").classList.remove("fullwidth")
        document.getElementById("twitter").classList.remove("fullwidth")
        document.getElementById("reddit").classList.remove("fullwidth")
        document.getElementById("email").classList.remove("fullwidth")
        document.getElementById("address").classList.remove("fullwidth")
        document.getElementById("phone").classList.remove("fullwidth")
    }
}


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

function pillfont(){
    if(window.innerWidth < 400){
        document.getElementById("instagramtext").classList.add("visually-hidden")
        document.getElementById("youtubetext").classList.add("visually-hidden")
        document.getElementById("twittertext").classList.add("visually-hidden")
        document.getElementById("reddittext").classList.add("visually-hidden")
        document.getElementById("phonetext").classList.add("visually-hidden")
        document.getElementById("emailtext").classList.add("visually-hidden")
        document.getElementById("addresstext").classList.add("visually-hidden")
        document.getElementById("pleatext").classList.add("visually-hidden")
    } else if(window.innerWidth > 400){
        document.getElementById("instagramtext").classList.remove("visually-hidden")
        document.getElementById("youtubetext").classList.remove("visually-hidden")
        document.getElementById("twittertext").classList.remove("visually-hidden")
        document.getElementById("reddittext").classList.remove("visually-hidden")
        document.getElementById("phonetext").classList.remove("visually-hidden")
        document.getElementById("emailtext").classList.remove("visually-hidden")
        document.getElementById("addresstext").classList.remove("visually-hidden")
        document.getElementById("pleatext").classList.remove("visually-hidden")
    }
}


setInterval(centerText,50)
setInterval(width, 50)
setInterval(centersocials,50)
setInterval(pillfont,50)