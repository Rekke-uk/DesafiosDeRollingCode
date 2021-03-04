// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenasDeTexto = [];

function ingresoDeTextos() {
    let nuevosTextos = prompt(`Ingresar una cadena de texto.`).trim().toLowerCase();
    while (nuevosTextos) {
        if (nuevosTextos) {
            cadenasDeTexto.push(nuevosTextos);
            nuevosTextos = prompt(`Ingresar una cadena de texto.`);
        }
    }
    // console.log(`Las cadenas de texto ingresadas son: ${cadenasDeTexto}`);
    console.log(`Las cadenas de texto ingresadas son: ` + cadenasDeTexto.join('  -  '))
}

ingresoDeTextos()