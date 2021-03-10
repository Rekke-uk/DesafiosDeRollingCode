let opciones = [`Piedra`, `Papel`, `Tijera`];
let jugador = null;
let bot = null;

function playGame() {
    seleccionBot();
    seleccionJugador();
}

// Funcion para que el bot elija una opcion.
function seleccionBot() {
    return bot = Math.round(Math.random() * 2)
}

function seleccionJugador() {
    jugador = parseInt(prompt(`Ingrese su opción: 0 = Piedra | 1 = Papel | 2 = Tijera`));

    if (!isNaN(jugador)) {
        if (jugador >= 0 && jugador <= 2) {
            switch (true) {
                case jugador === bot:
                    mensajeAlert(`Empate`)
                    break;
                case jugador === 0 && bot === 2:
                    mensajeAlert(`Ganaste`)
                    break;
                case jugador === 1 && bot === 0:
                    mensajeAlert(`Ganaste`)
                    break;
                case jugador === 2 && bot === 1:
                    mensajeAlert(`Ganaste`)
                    break;
                default:
                    mensajeAlert(`Perdiste`);
                    break;
            }
        } else {
            mensajeAlert("noOpcion");
        }
    } else {
        mensajeAlert("noNumero");
    }
}

function mensajeAlert(resultado) {
    if (resultado === "noOpcion") {
        swal("Error", `No existe la opción elegida`, "error");
    }
    if (resultado === "noNumero") {
        swal("Error", `Debe ingresar un número entre 0 y 2`, "error");
    }
    if (resultado === `Ganaste`) {
        swal("Ganaste", `Elegiste ${opciones[jugador]} y el bot elegió ${opciones[bot]}`, "success");
    }
    if (resultado === `Empate`) {
        swal("Empataste", `Elegiste ${opciones[jugador]} y el bot elegió ${opciones[bot]}`, "warning");
    }
    if (resultado === `Perdiste`) {
        swal("Perdiste", `Elegiste ${opciones[jugador]} y el bot elegió ${opciones[bot]}`, "error");
    }
}

function ingresoJugador(ingreso) {
    if (condition) {

    }
}