var i = 0 
var progress = 0
document.getElementById("row1divtext").innerHTML = ""


function row1divtextPrint(){
    var textToPrint = "Hi! I am Hong Yi, a student currently undertaking the Common ICT Programme in Singapore Polytechnic. I am aged 16, and am a alumni of Swiss Cottage Secondary. I also have a passion for history and technology, and dream of being a data scientist in the future. Furthermore, I also have interests in photography and tanks. I would describe myself as passionate about my work, using it as a steady source of motivation to push me to do my best in anything I undertake."
    if(i < textToPrint.length){
        document.getElementById("row1divtext").innerHTML += textToPrint.charAt(i)
        i++
    }
}

function row1selfportrait(){
    document.getElementById("row1selfportrait").style.opacity = progress
    console.log(document.getElementById("row1selfportrait").style.right)
    progress += 0.05
}

setInterval(row1divtextPrint, 10)
setInterval(row1selfportrait, 50)