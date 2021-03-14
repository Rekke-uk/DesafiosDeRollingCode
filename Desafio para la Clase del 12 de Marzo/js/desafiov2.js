class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    get imprimeDatos() {
        console.log(`Código: ${this.codigo}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
    }
}

let productos = [];

function ingresarProducto() {
    let veces = parseInt(prompt("¿Cuantos productos va a ingresar?"));

    if (isNaN(veces) || veces <= 0) {
        console.error("Debe ingresar un número mayor que cero");
        return;
    }

    for (let i = 0; i < veces; i++) {
        let codigo = i + 1;
        let nombre = prompt(`Ingrese el nombre del producto #${i + 1}`);

        if (nombre === "" || nombre === null) {
            console.error("Faltaron datos o se canceló");
            return;
        } else {
            let precio = parseFloat(prompt("Ingrese el precio"));
            if (isNaN(precio)) {
                console.error("No se ingresó un número o se canceló");
                return;
            }
            productos.push(
                new Producto(codigo, nombre.toUpperCase(), precio.toFixed(2))
            );
        }
    }

    for (let index = 0; index < productos.length; index++) {
        productos[index].imprimeDatos;
    }
}

// function eliminarProducto(producto = prompt("Ingrese el producto a eliminar")) {
//     if (producto) {
//         let index = productos.indexOf(producto.trim().toUpperCase());

//         if (index != -1) {
//             let validar = confirm(
//                 `Está seguro que quiere eliminar el producto ${producto
//                     .trim()
//                     .toUpperCase()}`
//             );

//             if (validar) {
//                 carrito.splice(index, 1);
//                 console.log(`Se eliminó ${producto.trim().toUpperCase()} del carrito`);
//             }
//         } else {
//             console.error("El producto no existe en el carrito");
//         }
//     }
// }