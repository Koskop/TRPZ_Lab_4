function btn0Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "0";
}
function btn1Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "1";
}
function btn2Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "2";
}
function btn3Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "3";
}
function btn4Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "4";
}
function btn5Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "5";
}
function btn6Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "6";
}
function btn7Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "7";
}
function btn8Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "8";
}
function btn9Click() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "9";
}

function btnCClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value = "";
}

function btnMinusClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "-";
}

function btnPlusClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "+";
}

function btnDotClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += ".";
    calculation();
}

function btnDivClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "/";
    calculation();
}

function btnMultiplClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "*";
    calculation();
}

function btnCalcClick() {
    (<HTMLInputElement>document.getElementById("var_number")).value += "=";
    calculation();
}

function calculation() {

}