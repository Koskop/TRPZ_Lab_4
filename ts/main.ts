let firstNumberString: string = "";
let signId: number = -1;
let secondNumberString: string = "";
let firstNumber: number = 0;
let secondNumber: number = 0;
let canClear: boolean = false;

function btn0Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "0";
    if (signId == -1){
        firstNumberString += "0";
    } else {
        secondNumberString += "0";
    }
}
function btn1Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "1";
    if (signId == -1){
        firstNumberString += "1";
    } else {
        secondNumberString += "1";
    }
}
function btn2Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "2";
    if (signId == -1){
        firstNumberString += "2";
    } else {
        secondNumberString += "2";
    }
}
function btn3Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "3";
    if (signId == -1){
        firstNumberString += "3";
    } else {
        secondNumberString += "3";
    }
}
function btn4Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "4";
    if (signId == -1){
        firstNumberString += "4";
    } else {
        secondNumberString += "4";
    }
}
function btn5Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "5";
    if (signId == -1){
        firstNumberString += "5";
    } else {
        secondNumberString += "5";
    }
}
function btn6Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "6";
    if (signId == -1){
        firstNumberString += "6";
    } else {
        secondNumberString += "6";
    }
}
function btn7Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "7";
    if (signId == -1){
        firstNumberString += "7";
    } else {
        secondNumberString += "7";
    }
}
function btn8Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "8";
    if (signId == -1){
        firstNumberString += "8";
    } else {
        secondNumberString += "8";
    }
}
function btn9Click() {
    if (canClear){
        btnCClick();
    }
    (<HTMLInputElement>document.getElementById("var_number")).value += "9";
    if (signId == -1){
        firstNumberString += "9";
    } else {
        secondNumberString += "9";
    }
}

function btnDotClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != ""){
        (<HTMLInputElement>document.getElementById("var_number")).value += ".";
        if (signId == -1){
            firstNumberString += ".";
        } else {
            secondNumberString += ".";
        }
    }
}

function btnCClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value = "";
    firstNumber = 0;
    secondNumber = 0;
    firstNumberString = "";
    secondNumberString = "";
    signId = -1;
    canClear = false;
}

function btnMinusClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != "") {
        (<HTMLInputElement>document.getElementById("var_number")).value += "-";
        signId = 0;
    }
}

function btnPlusClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != "") {
        (<HTMLInputElement>document.getElementById("var_number")).value += "+";
        signId = 1;
    }
}

function btnDivClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != "") {
        (<HTMLInputElement>document.getElementById("var_number")).value += "/";
        signId = 2;
    }
}

function btnMultiplClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != "") {
        (<HTMLInputElement>document.getElementById("var_number")).value += "*";
        signId = 3;
    }
}

function btnCalcClick() {
    if (canClear){
        btnCClick();
    }
    if (firstNumberString != "") {
        if (secondNumberString != "") {
            (<HTMLInputElement>document.getElementById("var_number")).value += "=";
            calculation();
        }
    }
}

function calculation() {
    firstNumber = Number(firstNumberString);
    secondNumber = Number(secondNumberString);

    if (signId == 0){
        (<HTMLInputElement>document.getElementById("var_number")).value += (firstNumber-secondNumber).toString();
    }
    if (signId == 1){
        (<HTMLInputElement>document.getElementById("var_number")).value += (firstNumber+secondNumber).toString();
    }
    if (signId == 2){
        (<HTMLInputElement>document.getElementById("var_number")).value += (firstNumber/secondNumber).toString();
    }
    if (signId == 3){
        (<HTMLInputElement>document.getElementById("var_number")).value += (firstNumber*secondNumber).toString();
    }
    canClear = true;
}