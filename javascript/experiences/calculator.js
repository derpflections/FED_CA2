function display(val){  //shows numbers
    document.getElementById('result').value += val
    return val
}

function solve(){  //takes value in result div and solves
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen(){
    document.getElementById('result').value = ''
}