let products = JSON.parse(localStorage.getItem("products")) || []
class Product {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }
}


function comprar(name, price) {
    let product = new Product(name, price)
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
    listar()
}


function listar() {
    let lista = document.querySelector("#list")
    lista.innerText = " "
    products.map((item) => {
        let div = document.createElement("div")
        div.classList.add("card-body")
        div.innerText = `${item.name} $ ${item.price}`
        lista.appendChild(div, lista)
    })
}
listar()