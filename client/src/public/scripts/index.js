let buffer = "0";
let total = 0;
let previosOperator;

const barCal = document.querySelector("#barCal");

function clickButtom(value){
    if(isNaN(value)){
        handleSybols(value);
    } else {
        handleNumbers(value);
    }
    barCal.innerText = buffer;
}

function handleSybols(symbol) {
    switch (symbol) {
        case "C":
            buffer = "0";
            total = 0;
            break;
        case "-":
            buffer += "-";
            break;
    }
}


/*document.getElementById("btn1").addEventListener("click", function() {
    let btn = document.getElementById("btn1").value;
    barCal.innerText += btn;
});
document.getElementById("btn2").addEventListener("click", function() {
    let btn = document.getElementById("btn2").value;
    barCal.innerText += btn;
});

document.getElementById("btn3").addEventListener("click", function() {
    let btn = document.getElementById("btn3").value;
    barCal.innerText += btn;
});

document.getElementById("btn4").addEventListener("click", function() {
    let btn = document.getElementById("btn4").value;
    barCal.innerText += btn;
});

document.getElementById("btn5").addEventListener("click", function() {
    let btn = document.getElementById("btn5").value;
    barCal.innerText += btn;
});

document.getElementById("btn6").addEventListener("click", function() {
    let btn = document.getElementById("btn6").value;
    barCal.innerText += btn;
});

document.getElementById("btn7").addEventListener("click", function() {
    let btn = document.getElementById("btn7").value;
    barCal.innerText += btn;
});

document.getElementById("btn8").addEventListener("click", function() {
    let btn = document.getElementById("btn8").value;
    barCal.innerText += btn;
});

document.getElementById("btn9").addEventListener("click", function() {
    let btn = document.getElementById("btn9").value;
    barCal.innerText += btn;
});
document.getElementById("btn0").addEventListener("click", function() {
    let btn = document.getElementById("btn0").value;
    barCal.innerText += btn;
});
document.getElementById("btnDelAll").addEventListener("click", function() {
    barCal.innerText = "0";
});
document.getElementById("btnDel").addEventListener("click", function() {
    if (barCal.innerText.legnth > 1) {
        barCal.innerText = barCal.innerText.slice(0, -1);
    } else {
        barCal.innerText = "0";
    }
});
document.getElementById("btnIgu").addEventListener("click", function() {
    let resoult = eval(barCal.innerText);
    barCal.innerHTML = resoult;
});
document.getElementById("btnSum").addEventListener("click", function() {
    let btn = document.getElementById("btnSum").value;
    barCal.innerHTML += btn;
});
*/