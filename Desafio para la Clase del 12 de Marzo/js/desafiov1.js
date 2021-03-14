class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos() {
        console.log(`Codigo: ${this.codigo}`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Precio: ${this.precio}`)
    }
}

let productos = [banana = new Producto("001", "Banana", 25), manzana = new Producto("002", "Manzana", 30), pera = new Producto("003", "Pera", 20)];