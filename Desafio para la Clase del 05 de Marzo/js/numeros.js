// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número 
// deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” 
// deberá indicarse la suma total de los números introducidos.

let numeros = [];
let caja = 0;

function Ingreso() {
    let valores = prompt(`Ingresar un número.`).trim() 
    while (valores) {
        if (isNaN(valores)) {
            alert(`Tiene que ingresar un número valido.`)
            valores = prompt(`Ingresar un número.`).trim() 
        } else {
            numeros.push(parseFloat(valores))
            valores = prompt(`Ingresar un número.`) 
        }
    }
    for (let i = 0; i < numeros.length; i++) {
        caja = caja + numeros[i]
    }
    console.log(`La suma de los numeros introducidos es de ${caja}`)
}

Ingreso()