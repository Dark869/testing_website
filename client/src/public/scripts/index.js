let buffer = "0";
let total = 0;
let previousOperator;

const barCal = document.querySelector("#barCal");

function clickButton(value) {
    console.log(value);
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumbers(value);
    }
    barCal.innerText = buffer;
}

function handleSymbol(symbol){
    switch (symbol) {
        case "C":
            buffer = "0";
            total = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = total;
            break;
        case "←":
            if (buffer.length === 1){
                buffer = "0";
            } else {
                buffer = buffer.slice(0, -1);
            }
            break;
        case "+":
        case "-":
        case "x":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === "0") {
        return;
    }
    const intBuffer = parseInt(buffer);

    if (total === 0) {
        total = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        total += intBuffer;
    } else if (previousOperator === "-") {
        total -= intBuffer;
    } else if (previousOperator === "x") {
        total *= intBuffer;
    } else if (previousOperator === "÷") {
        total /= intBuffer;
    }
}

function handleNumbers(number) {
    if (buffer === "0") {
        buffer = number;
    } else {
        buffer += number;
    }
}

function init() {
    document.querySelectorAll('.btn-cal').forEach(button => {
        button.addEventListener("click", function(event) {
            clickButton(event.target.value);
        });
    });
}

init();
