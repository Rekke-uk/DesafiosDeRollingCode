class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre
        this.telefono = telefono
    }
}

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

function añadirContacto() {
    let nombre = prompt(`Ingrese el nombre del nuevo contacto`)
    if (nombre) {
        console.error("Faltaron datos o se canceló");
        return;
    } else {
        let telefono = parseFloat(prompt(`Ingrese el número de telefono del nuevo contacto`))
        if (isNaN(telefono)) {
            console.error("No se ingresó un número o se canceló");
            return;
        }
        agenda.push(new Contacto(nombre.toUpperCase(), telefono))
    }
}

function existeContacto() {
    console.warn(`El contacto que se quiere ingresar ya existe.`)
}

function listarContactos() {
    for (let i = 0; i < agenda.length; i++) {
        console.log(`Nombre: ${agenda[i].nombre}`);
        console.log(`Telefono: ${agenda[i].telefono}`);
        console.log("============================");
    }
}

function buscarContacto() {

}

function eliminarContacto() {

}

function agendaLlena() {

}

function huecosLibres() {

}