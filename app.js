let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        //El usuarió no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número es menor');
        } else {
            asignarTextoElemento('p', 'el número es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value='';
    
} 


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // Si ya sorteamos todo los numeros
    if(listaNumerosSorteados.length==10){
        asignarTextoElemento("p", "Ya se sortearon todos los números Posibles");
    }else{

    //Si el número generado está incluido en la lista   
       console.log(numeroGenerado);
       console.log(listaNumerosSorteados); 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    }

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio    
    //generar el número aleatorio    
    //desahbilitar el botón
    condicionesIniciales();
    //inicianilizar el número de intentos
    document.querySelector("#reiniciar").setAttribute('disabled','true');
}

condicionesIniciales();

