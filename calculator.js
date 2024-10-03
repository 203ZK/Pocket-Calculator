const currText = document.querySelector(".display > p");
let operand = "";
let arg1 = null;
let arg2 = null;
let op = "";
let result = 0;

function appendNumber(e) {
    if (op == "") {
        arg1 = null;
    }
    const num = e.currentTarget.textContent;
    operand += num;
    currText.textContent = operand;
}

function clearDisplay() {
    operand = op = "";
    arg1 = arg2 = null;
    currText.textContent = operand;
}

function performOp(e) {
    op = e.currentTarget.textContent;
    if (arg1 === null) {
        arg1 = Number(operand);
    }
    operand = "";
}

function setEquals() {
    arg2 = Number(operand);
    operand = "";

    if (op == "") {
        result = arg1;
    } else if(op == "+") {
        result = arg1 + arg2;
    } else if (op == "-") {
        result = arg1 - arg2;
    } else if (op == "×") {
        result = arg1 * arg2;
    } else {
        if (arg2 == 0) {
            alert("Error: Division by zero");
        } else {
            result = arg1 / arg2;
        }
    }
    operand = result.toString();
    let roundedResult = Math.round(result * 100) / 100
    currText.textContent = roundedResult.toString();

    op = "";
    operand = "";
    arg1 = result;
    arg2 = null;
    result = 0;
}

const buttons = document.querySelectorAll("button");

for (btn of buttons) {
    if (btn.className == "number") {
        btn.addEventListener("click", appendNumber);
    } else if (btn.className == "clear") {
        btn.addEventListener("click", clearDisplay);
    } else if (btn.className == "operation") {
        btn.addEventListener("click", performOp);
    } else {
        btn.addEventListener("click", setEquals);
    }
}