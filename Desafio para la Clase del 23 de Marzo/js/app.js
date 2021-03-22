let products = JSON.parse(localStorage.getItem(`products`)) || [];
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
}

function buyProduct(name, price) {
    let product = new Product(name, price)
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    productList()
}

function productList() {
    let list = document.querySelector("#list")
    list.innerText = " "
    products.map((item) => {
        let div = document.createElement("div")
        div.classList.add("card-body")
        div.innerText = `${item.name} $ ${item.price}`
        list.appendChild(div, list)
    })
}
productList()

// // Eliminar productos del carrito.
// function eliminarProducto(producto = prompt(`Ingrese el producto a eliminar.`)) {
//     if (producto) {
//         let index = gorrito.indexOf(producto.trim().toUpperCase())
//         if (index != -1) {
//             let validar = confirm(`¿Estas seguro que quieres eliminar el producto ${producto.trim().toUpperCase()}?`)
//             if (validar) {
//                 carrito.splice(index, 1);
//                 console.log(`Se elimino ${producto.trim().toUpperCase()} del carrito.`)
//             }
//         } else {
//             console.warn(`El producto no existe en el carrito.`)
//         }
//     }
// }