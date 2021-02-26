// Tarea de la Clase
// - Recibir dos valores y la operacion a realizar (+, -, *, /)
// - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
// - Con una estructura switch verificar la operacion y devolver un mensaje con el resultado de la misma.
// - Si se ingresa una operación que no está contemplada devolver un mensaje de error.

let num1 = parseInt(prompt("Ingresar un número"))
console.log(`El número ingresado es ${num1}`)
let num2 = parseInt(prompt("Ingresar otro número"))
console.log(`El segundo número ingresado es ${num2}`)
let operacion = (prompt("Ingresar el tipo de operación que quiere realizar (+, -, * o /)"))
console.log(`La operación que quiere realizar ${operacion}`)

if ((isNaN(num1)) || (isNaN(num2))) {
    console.error("No ingreso ningun número valido. Vuelva a Intentarlo...");
} else {
    switch (operacion) {
        case "+":
            console.log("La suma de los dos números es " + (num1 + num2))
            break;
        case "-":
            console.log("La restar de los dos números es " + (num1 - num2))
            break;
        case "*":
            console.log("La multiplicación de los dos números es " + (num1 * num2))
            break;
        case "/":
            console.log("La división de los dos números es " + (num1 / num2))
            break;
        default:
            console.error("No se pudo realizar la operación deseada")
            break;
    }
}