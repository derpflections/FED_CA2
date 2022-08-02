var i = 0 
var progress = 0
var r1ImgleftPadding = 535
document.getElementById("row1divtext").innerHTML = ""
document.getElementById("row1selfportrait").style.padding = r1ImgleftPadding + "px"
document.getElementById("aboutMeMC2R1").style.opacity = 0
document.getElementById("aboutMeMC2R2").style.opacity = 0
document.getElementById("aboutMeMC2R3").style.opacity = 0


function row1divtextPrint(){
    var textToPrint = "Hi! I am Hong Yi, a student currently undertaking the Common ICT Programme in Singapore Polytechnic. I am aged 16, and am a alumni of Swiss Cottage Secondary. I also have a passion for history and technology, and dream of being a data scientist in the future. Furthermore, I also have interests in photography and tanks. I would describe myself as passionate about my work, using it as a steady source of motivation to push me to do my best in anything I undertake."
    if(i < textToPrint.length){
        document.getElementById("row1divtext").innerHTML += textToPrint.charAt(i)
        i++
    }
}

function row1selfportrait(){
    if (window.innerWidth > 1200){
        document.getElementById("row1selfportrait").style.opacity = progress
        r1ImgleftPadding -= (progress * 100)
        document.getElementById("row1selfportrait").style.paddingLeft = r1ImgleftPadding + "px"
        progress += 0.01
    }
}

function row2fadeIn(){
    function aboutmeRows(){
        if(progress < 100){
            document.getElementById("aboutMeMC2R1").style.opacity = (progress/100)
            document.getElementById("aboutMeMC2R2").style.opacity = (progress/100)
            document.getElementById("aboutMeMC2R3").style.opacity = (progress/100)
            progress++
        }
    }
    if (document.documentElement.scrollTop > 290){
        setInterval(aboutmeRows,50)
    }
}

setInterval(row1divtextPrint, 10)
setInterval(row1selfportrait, 10)
setInterval(row2fadeIn, 50)