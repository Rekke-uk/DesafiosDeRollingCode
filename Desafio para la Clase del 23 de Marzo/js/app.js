let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];

// Agregar productos al carrito.
function agregarProducto() {
    let producto = prompt(`Ingrese un producto. Si quieres comprar otro producto hace click en Cancelar`)
    if (producto) {
        carrito.push(producto.trim().toUpperCase())

        producto = prompt(`Ingrese un producto. Si quieres comprar otro producto hace click en Cancelar`)

        localStorage.setItem(`productos`, JSON.stringify(carrito))
        listarProductos()
    }
}

// Lista de los productos en el carrito.
function listarProductos() {
    console.log(`Su lista de productos es la siguiente`)
    for (let i = 0; i < carrito.length; i++) {
        console.log(`${i + 1} ${carrito[i]}`)
    }
}

// Eliminar productos del carrito.
function eliminarProducto(producto = prompt(`Ingrese el producto a eliminar.`)) {
    if (producto) {
        let index = gorrito.indexOf(producto.trim().toUpperCase())
        if (index != -1) {
            let validar = confirm(`¿Estas seguro que quieres eliminar el producto ${producto.trim().toUpperCase()}?`)
            if (validar) {
                carrito.splice(index, 1);
                console.log(`Se elimino ${producto.trim().toUpperCase()} del carrito.`)
            }
        } else {
            console.warn(`El producto no existe en el carrito.`)
        }
    }
}