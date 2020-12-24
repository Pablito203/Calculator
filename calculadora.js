var screen = document.querySelector('input#screen');
var on = false;
var n1 = 0;
var n2 = 0;
var tot = 0;
var operation = "";
var dot = false;

if (Number(screen.value) % 1 != 0)
    dot = true

function keyPressed(key){
    var screen = document.querySelector('input#screen');
    if (on == true) {
        switch (key) {
            case 0:
                if (screen.value == "0") {
                    screen.value = "0";
                }else {
                    screen.value += "0";
                }
                break;
            case 1:
                if (screen.value == "0") {
                    screen.value = "1";
                }else {
                    screen.value += "1";
                }
                break;
            case 2:
                if (screen.value == "0") {
                    screen.value = "2";
                }else {
                    screen.value += "2";
                }
                break;
            case 3:
                if (screen.value == "0") {
                    screen.value = "3";
                }else {
                    screen.value += "3";
                }
                break;
            case 4:
                if (screen.value == "0") {
                    screen.value = "4";
                }else {
                    screen.value += "4";
                }
                break;
            case 5:
                if (screen.value == "0") {
                    screen.value = "5";
                }else {
                    screen.value += "5";
                }
                break;
            case 6:
                if (screen.value == "0") {
                    screen.value = "6";
                }else {
                    screen.value += "6";
                }
                break;
            case 7:
                if (screen.value == "0") {
                    screen.value = "7";
                }else {
                    screen.value += "7";
                }
                break;
            case 8:
                if (screen.value == "0") {
                    screen.value = "8";
                }else {
                    screen.value += "8";
                }
                break;
            case 9:
                if (screen.value == "0") {
                    screen.value = "9";
                }else {
                    screen.value += "9";
                }
                break;
            case 'off':
                screen.value = "";
                on = false;
                break;
            case 'sum':
                n1 = Number(screen.value);
                screen.value = "0";
                operation = "sum";
                break;
            case 'subtraction':
                n1 = Number(screen.value);
                screen.value = "0";
                operation = "subtraction";
                break;
            case 'multiplication':
                n1 = Number(screen.value);
                screen.value = "0";
                operation = "multiplication";
                break;
            case 'division':
                n1 = Number(screen.value);
                screen.value = "0";
                operation = "division";
                break;
            case 'rootSquare':
                n1 = Number(screen.value);
                tot = n1 ** (1/2);
                screen.value = tot;
                break;
            case 'dot':
                if (dot == false) {
                    screen.value += ".";
                }
                dot = true;
                break;
            case 'result':
                n2 = Number(screen.value);
                switch (operation) {
                    case "sum":
                        tot = n1 + n2;
                        operation == "";
                        break;
                    case "subtraction":
                        tot = n1 - n2;
                        operation == "";
                        break;
                    case "multiplication":
                        tot = n1 * n2;
                        operation == "";
                        break;
                    case "division":
                        tot = n1 / n2;
                        operation == "";
                        break;
                }
                screen.value = tot;
                n1 = 0;
                n2 = 0;
                break;
            case 'ce':
                screen.value = "0";
                break; 
            case 'percent':
                screen.value = "0";
                break;   
        }
    }
    if (key == 'on') {
        screen.value = "0";
        on = true;  
    }
}

/*
function ligar(){
    var screen = document.querySelector('input#screen');
    screen.value = "0"
    on = true
}

function desligar(){
    var screen = document.querySelector('input#screen');
    screen.value = ""
    on = false
}

function zero(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "0";
        else 
            screen.value += "0";
    }
}

function um(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "1";
        else 
            screen.value += "1";
    }
}

function dois(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "2";
        else 
            screen.value += "2";
    }
}

function tres(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "3";
        else 
            screen.value += "3";;
    }
}

function quatro(){
    if (on == true) {    
        if (screen.value == "0")
            screen.value = "4";
        else 
            screen.value += "4";
    }
}

function cinco(){
    if (on == true) {    
        if (screen.value == "0")
            screen.value = "5";
        else 
            screen.value +=+ "5";
    }
}

function seis(){
    if (on == true) {    
        if (screen.value == "0")
            screen.value = "6";
        else 
            screen.value += "6";
    }
}

function sete(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "7";
        else 
            screen.value += "7";
    }
}

function oito(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "8";
        else 
            screen.value += "8";
    }
}

function nove(){
    if (on == true) {
        if (screen.value == "0")
            screen.value = "9";
        else 
            screen.value += "9";
    }
}

function soma(){
    if (on == true) {
            n1 = Number(screen.value);
            screen.value = "0";
            operation = "soma";
    }
}

function subtrai(){
    if (on == true) {
            n1 = Number(screen.value);
            screen.value = "0";
            operation = "subtracao";
    }
}

function multiplica(){
    if (on == true) {
            n1 = Number(screen.value);
            screen.value = "0";
            operation = "multiplicacao";
    }
}

function divide(){
    if (on == true) {
            n1 = Number(screen.value);
            screen.value = "0";
            operation = "divisao";
    }
}

function igual(){
    n2 = Number(screen.value);
    switch (operation) {
        case "sum":
            tot = n1 + n2;
            operation == "";
            break;
        case "subtraction":
            tot = n1 - n2;
            operation == "";
            break;
        case "multiplication":
            tot = n1 * n2;
            operation == "";
            break;
         case "division":
            tot = n1 / n2;
            operation == "";
            break;
    }
    screen.value = tot;
    n1 = 0;
    n2 = 0;
}

function ponto(){
    if (on == true) {
        if (dot == false)
            screen.value += ".";
        dot = true;
    }
}

function raiz(){
    if (on == true) {
        n1 = Number(screen.value);
        tot = n1 ** (1/2)
        screen.value = tot;
    }    
}
function zera(){
    if (on == true) {
        screen.value = "0";
    }  
}
*/

