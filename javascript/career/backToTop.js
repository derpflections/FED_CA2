function btnViz(){
    if(document.documentElement.scrollTop >  400){ //if >400px from top the scroll to top button shows
        document.getElementById("topBtn").classList.remove("visually-hidden")
    } else if(document.documentElement.scrollTop < 400){
        document.getElementById("topBtn").classList.add("visually-hidden")
    }
}

function topFunction(){
    document.documentElement.scrollTop = 212
}

setInterval(btnViz, 50)