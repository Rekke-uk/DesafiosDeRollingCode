let producto1 = prompt("Ingrese el producto que desea comprar");
console.log(`El ingreso que usted ingreso es: ${producto1}`);
// let producto2 = prompt("Ingrese el producto que desea comprar");
// console.log(`El ingreso que usted ingreso es: ${producto2}`);
// let producto3 = prompt("Ingrese el producto que desea comprar");
// console.log(`El ingreso que usted ingreso es: ${producto3}`);

// let carritoDeCompras = [`${producto1}`,`${producto2}`,`${producto3}`]

$('#box').click(function buttonAction() {
    $("#dialog-confirm").html("¿Deseas seguir agregando cosas a la lista?");
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        height: 250,
        width: 400,
        buttons: {
            "Si": function () {
                $(this).dialog('close');
                alert("Si, quiero seguir agregando cosas a la lista.");
                let nuevoProduto = prompt ("Ingrese el producto que desea comprar");
            },
            "No": function () {
                $(this).dialog('close');
                alert("No, no quiero seguir agregando cosas a la lista.");
            }
        }
    });
});
$('#box').click(buttonAction);