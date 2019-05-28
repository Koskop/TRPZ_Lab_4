var firstNumber = "";
var signId = -1;
var secondNumber = "";
function btn0Click() {
    document.getElementById("var_number").value += "0";
    if (signId == -1) {
        firstNumber += "0";
    }
    else {
        secondNumber += "0";
    }
}
function btn1Click() {
    document.getElementById("var_number").value += "1";
    if (signId == -1) {
        firstNumber += "1";
    }
    else {
        secondNumber += "1";
    }
}
function btn2Click() {
    document.getElementById("var_number").value += "2";
    if (signId == -1) {
        firstNumber += "2";
    }
    else {
        secondNumber += "2";
    }
}
function btn3Click() {
    document.getElementById("var_number").value += "3";
    if (signId == -1) {
        firstNumber += "3";
    }
    else {
        secondNumber += "3";
    }
}
function btn4Click() {
    document.getElementById("var_number").value += "4";
    if (signId == -1) {
        firstNumber += "4";
    }
    else {
        secondNumber += "4";
    }
}
function btn5Click() {
    document.getElementById("var_number").value += "5";
    if (signId == -1) {
        firstNumber += "5";
    }
    else {
        secondNumber += "5";
    }
}
function btn6Click() {
    document.getElementById("var_number").value += "6";
    if (signId == -1) {
        firstNumber += "6";
    }
    else {
        secondNumber += "6";
    }
}
function btn7Click() {
    document.getElementById("var_number").value += "7";
    if (signId == -1) {
        firstNumber += "7";
    }
    else {
        secondNumber += "7";
    }
}
function btn8Click() {
    document.getElementById("var_number").value += "8";
    if (signId == -1) {
        firstNumber += "8";
    }
    else {
        secondNumber += "8";
    }
}
function btn9Click() {
    document.getElementById("var_number").value += "9";
    if (signId == -1) {
        firstNumber += "9";
    }
    else {
        secondNumber += "9";
    }
}
function btnDotClick() {
    document.getElementById("var_number").value += ".";
    if (signId == -1) {
        firstNumber += ".";
    }
    else {
        secondNumber += ".";
    }
}
function btnCClick() {
    document.getElementById("var_number").value = "";
    signId = -1;
    firstNumber = "";
    secondNumber = "";
}
function btnMinusClick() {
    document.getElementById("var_number").value += "-";
    signId = 0;
}
function btnPlusClick() {
    document.getElementById("var_number").value += "+";
    signId = 1;
}
function btnDivClick() {
    document.getElementById("var_number").value += "/";
    signId = 3;
}
function btnMultiplClick() {
    document.getElementById("var_number").value += "*";
    signId = 4;
}
function btnCalcClick() {
    document.getElementById("var_number").value += "=";
    calculation();
}
function calculation() {
    console.log(firstNumber);
    console.log(signId);
    console.log(secondNumber);
}
//# sourceMappingURL=script.js.map