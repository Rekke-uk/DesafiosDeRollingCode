// Parte 1
let numero1 = 18;
let numero2 = 36;
let numero3 = 29;

console.log("El número máximo es " + Math.max(numero1, numero2, numero3));
console.log("El número minimo es " + Math.min(numero1, numero2, numero3));
console.log(`La raiz cuadrada de ${numero2} es ` + Math.sqrt(numero2));

// Parte 2
let valor = prompt("¿Es este objeto suyo? Recuerda que solo puedes responder con SI y NO");

if(valor !== null){
    if(valor.toUpperCase().trim() === "Si"){
        console.log(`No quiero recibir el reaglo`);
    }  else if(valor.toUpperCase().trim() === "false") {
        console.log(`Quiero recibir el reaglo`);
    }  else {
        console.log("No respondió bien, solo se permite responder con SI y NO");
    }
}

// Parte 3
let numero4 = prompt("Ingrese un número");
let numero4Entero = (parseInt(numero4));
let numero4Redondeado = (Math.round(numero4Entero));
console.log (`El número ingresado fue ${numero4Redondeado}`);

let numero5 = prompt("Ingrese otro número");
let numero5Entero = (parseInt(numero5));
let numero5Redondeado = (Math.round(numero5Entero));
console.log (`El número ingresado fue ${numero5Redondeado}`);

if (numero4Redondeado > numero5Redondeado){
    console.log(`El numero ${numero4Redondeado} es igual que ${numero5Redondeado}, por lo que al sumar los dos terminos el resultado es `+ (numero4Redondeado + numero5Redondeado));
} else if (numero4Redondeado < numero5Redondeado){
    console.log(`El numero ${numero4Redondeado} es igual que ${numero5Redondeado}, por lo que al restar los dos terminos el resultado es `+ (numero4Redondeado - numero5Redondeado));
} else if (numero4Redondeado = numero5Redondeado){
    console.log(`El numero ${numero4Redondeado} es igual que ${numero5Redondeado}, por lo que al multiplicar los dos terminos el resultado es `+ (numero4Redondeado * numero5Redondeado));
}