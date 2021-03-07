let persona = {
    nombre: "Miguel Angel Zato Colom",
    edad: 18,
    dni: "44372965",
    domicilio: "Ecuador 4036",
    hijos: 0,
    profesion: "Estudiante",
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

function datos() {
    for (const propiedad in persona) {
        console.log(`${propiedad}: ${persona[propiedad]}`)
    }
}