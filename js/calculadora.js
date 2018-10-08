var numero = document.getElementsByClassName("numero");


var visor = document.getElementById("resultado");

var lista = []

var aux = 0

function berrar(){alert("porra")}

function mostrar() {
    visor.value += (0);
    
}
function mostrar1() {
    visor.value += (1);
    
}
function mostrar2() {
    visor.value += (2);
    
}
function mostrar3() {
    visor.value += ("3");
    
}
function mostrar4() {
    visor.value += ("4");
    
}
function mostrar5() {
    visor.value += ("5");
    
}
function mostrar6() {
    visor.value += ("6");
    
}
function mostrar7() {
    visor.value += ("7");
    
}
function mostrar8() {
    visor.value += ("8");
    
}
function mostrar9() {
    visor.value += ("9");
    
}
function mostrar_() {
    visor.value += (".");
    
}
function mostrarsoma() {
    visor.value += ("+")
    aux = 1;
}
function mostrarsub() {
    visor.value += ("-")
    aux = 1;
}
function mostrarmult() {
    visor.value += ("x")
    aux = 1 ;
}
function mostrardiv() {
    visor.value += ("/")
    aux = 1; 
}

var somar = document.getElementsByClassName("operacao somar")
var sub = document.getElementsByClassName("operacao subtrair")
var mult = document.getElementsByClassName("operacao multiplicar")
var div = document.getElementsByClassName("operacao dividir")

somar[0].onclick = mostrarsoma
sub[0].onclick = mostrarsub
mult[0].onclick = mostrarmult
div[0].onclick = mostrardiv

if (aux == 1) {
        lista.push = visor.value
        somar[0].onclick =0
        sub[0].onclick =0
        mult[0].onclick =0
        div[0].onclick = 0
        
}

for (var i = 0 ; i < (numero.length); i++) {
    if (numero[i].innerText == 0) {
        numero[i].onclick = mostrar
    }

    else if (numero[i].innerText == 1) {
        numero[i].onclick = mostrar1
    }
    else if (numero[i].innerText == 2) {
        numero[i].onclick = mostrar2
    }
    else if (numero[i].innerText == 3) {
        numero[i].onclick = mostrar3
    }
    else if (numero[i].innerText == 4) {
        numero[i].onclick = mostrar4
    }
    else if (numero[i].innerText == 5) {
        numero[i].onclick = mostrar5
    }
    else if (numero[i].innerText == 6) {
        numero[i].onclick = mostrar6
    }
    else if (numero[i].innerText == 7) {
        numero[i].onclick = mostrar7
    }
    else if (numero[i].innerText == 8) {
        numero[i].onclick = mostrar8
    }
    else if (numero[i].innerText == 9) {
        numero[i].onclick = mostrar9
    }
    else if (numero[i].innerText == "." ) {
        numero[i].onclick = mostrar_
    }
}
