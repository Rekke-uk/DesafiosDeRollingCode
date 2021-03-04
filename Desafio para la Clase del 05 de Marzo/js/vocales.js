// Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt(`Ingresa texto.`);
let respuesta = 0;
let vocales = [];

if (texto) {
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i).trim().toLowerCase()
        switch (letra) {
            case letra = "a":
                vocales.push(letra)
                break;
            case letra = "e":
                vocales.push(letra)
                break;
            case letra = "i":
                vocales.push(letra)
                break;
            case letra = "o":
                vocales.push(letra)
                break;
            case letra = "u":
                vocales.push(letra)
                break;
            default:
                if (letra === "á" || letra === "é" || letra === "í" || letra === "ó" || letra === "ú") {
                    vocales.push(letra);
                }
                break;
        }
    }
} else {
    console.error("No se ingreso dato...");
    respuesta = 1;
}

if (respuesta === 0) {
    console.log(`El texto "${texto}" tiene ${vocales.length} vocales`);
    console.log(vocales);
}