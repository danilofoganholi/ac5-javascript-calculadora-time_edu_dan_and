//VARIAVEL QUE TEM UMA LISTA COM OBJETOS COM A CLASS= NUMERO
var numero = document.getElementsByClassName("numero")
//VARIAVEL COM O ID= RESULTADO
var visor = document.getElementById("resultado")
//VARIAVEIS COM CLASS DE OPERADORES
var somar = document.getElementsByClassName("operacao somar")
var subtrair = document.getElementsByClassName("operacao subtrair")
var multiplicar = document.getElementsByClassName("operacao multiplicar")
var dividir = document.getElementsByClassName("operacao dividir")
//VARIAVEL DA CLASS IGUA (=)
var resultar = document.getElementsByClassName("resultar")


//FUNCOES QUE MOSTRA NA TELA O DIGITADO
function mostrar0() {
    visor.value += ('0');  
}
function mostrar1() {
    visor.value += ('1');
    
}
function mostrar2() {
    visor.value += ('2');
    
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
    if (validar() == true){
        visor.value += (".");
    }
}
//FUNCAO QUE MOSTRA NA TELA E VALIDA SE JÁ EXISTE OUTRO OPERADOR
function mostrarsoma() {
    resultado = document.getElementById("resultado").value;
    if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
    && resultado.indexOf("/")<=0){
    visor.value += "+";

    }
}
//FUNCAO QUE MOSTRA NA TELA E VALIDA SE JÁ EXISTE OUTRO OPERADOR
function mostrarsub() {
    resultado = document.getElementById("resultado").value;
    if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
    && resultado.indexOf("/")<=0){
    visor.value += "-";
    }
    
}
//FUNCAO QUE MOSTRA NA TELA E VALIDA SE JÁ EXISTE OUTRO OPERADOR
function mostrarmult() {
    resultado = document.getElementById("resultado").value;
    if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
    && resultado.indexOf("/")<=0){
    visor.value += "*";
    }
}
//FUNCAO QUE MOSTRA NA TELA E VALIDA SE JÁ EXISTE OUTRO OPERADOR
function mostrardiv() {
    resultado = document.getElementById("resultado").value;
    if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
    && resultado.indexOf("/")<=0){
    visor.value += "/";
    }
}
//FUNCAO VALIDA PONTO
function validar () {
    resultado = visor.value
    var str = resultado;
    var cont = 0 
    pos = str.indexOf(".");

    while ( pos != -1 ) {
        cont++;
        pos = str.indexOf( ".",pos + 1 );
    }

    if (resultado.indexOf(".")>=0){
        if (resultado != "" && resultado.indexOf("*")<=0 && resultado.indexOf("-")<=0 && resultado.indexOf("+")<=0 
            && resultado.indexOf("/")<=0 || cont >=2) {
            return false
        }
    }
    return true
}
//FUNCAO CALCULADORA 
function calcular(){
    var resultado = 0;
    resultado = document.getElementById("resultado").value;
    
    if (resultado.indexOf("/") >=0 ){
        array = resultado.split("/"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x / y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;

        }
    }

    else if(resultado.indexOf("*")>=0){
        array = resultado.split("*"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x * y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }

    else if(resultado.indexOf("+")>=0){
        array = resultado.split("+"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x + y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }

    else if(resultado.indexOf("-")>=0){
        array = resultado.split("-"); 
        x = array[0];
        y = array[1];
        x = parseFloat(x,10);
        y = parseFloat(y,10);
        resultado = x - y;
        
        if(isNaN(resultado)){
            document.getElementById("resultado").value = "Erro de operação";
        }else{
            document.getElementById("resultado").value = resultado;
    
        }
    }
    
}

//COLOCANDO AS FUNCOES NOS BOTOES NUMEROS  
numero[0].onclick = mostrar9;
numero[1].onclick = mostrar8;
numero[2].onclick = mostrar7;
numero[3].onclick = mostrar6;
numero[4].onclick = mostrar5;
numero[5].onclick = mostrar4;
numero[6].onclick = mostrar3;
numero[7].onclick = mostrar2;
numero[8].onclick = mostrar1;
numero[9].onclick = mostrar0;
numero[10].onclick = mostrar_;

//COLOCANDO A FUNCAO CALCULAR NO BOTAO (=)
resultar[0].onclick = calcular

//COLOCANDO A FUNCAO NOS BOTOES DE OPERACAO
somar[0].onclick = mostrarsoma
subtrair[0].onclick = mostrarsub
dividir[0].onclick = mostrardiv
multiplicar[0].onclick = mostrarmult

        
