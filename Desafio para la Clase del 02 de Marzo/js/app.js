// $('#box').click(function buttonAction() {
//     $("#dialog-confirm").html("¿Deseas seguir agregando cosas a la lista?");
//     $("#dialog-confirm").dialog({
//         resizable: false,
//         modal: true,
//         height: 250,
//         width: 400,
//         buttons: {
//             "Si": function () {
//                 $(this).dialog('close');
//                 alert("Si, quiero seguir agregando cosas a la lista.");
//                 let nuevoProduto = prompt ("Ingrese el producto que desea comprar");
//             },
//             "No": function () {
//                 $(this).dialog('close');
//                 alert("No, no quiero seguir agregando cosas a la lista.");
//             }
//         }
//     });
// });
// $('#box').click(buttonAction);

let salida = ""
let carritoDeCompras = [];

function ingreso() {
    while (salida != null) {
        let producto = prompt('Ingrese el producto que desea comprar, si ya termino de click en cancelar.');
        if (producto !== null && producto !== "") {
            carritoDeCompras.push(producto.trim().toLowerCase());
        }
        salida = producto;
    }
}

function listado() {
    console.log('Listado de productos en el carrito')
    for (let i = 0; i < carritoDeCompras.length; i++) {
        console.log(`Producto número ${i + 1} = ${carritoDeCompras[i]}`)
    }
}

console.log("Carrito de Compras nashe");

ingreso();
listado();