let peliculas = [
    { titulo: "Bastardos Sin Gloria", genero: "Acción y Aventuras", annio: "2009", sinopsis: "En París, la dueña jugida de un cine es obligada a dar un estreno nazi, donde un grupo de soldados estadounidenses llamados los Bastardos planean un ataque.", },
    { titulo: "The post", genero: "Peliculas basadas en la vida real", annio: "2017", sinopsis: "The New York Times consiguió una primicia explosiva sobre Vietnam que compromete al presidente, pero tuvo que dejarla. Ahora, The Washington Post está en una encucijada.", },
    { titulo: "Avengers Infinity War", genero: "Ciencia Ficción", annio: "2018", sinopsis: "El poderos Thanos está a punto de hacer que la destruccion reine en el universo. Los vengadores y sus aliados superhéroes arriesgarán todo en la mejor batalla de todos los tiempos.", }
]

function datosDeLasPelis() {
    peliculas.forEach(function (pelicula) {
        console.log(`Nombre: ${pelicula.titulo}  -  Genero: ${pelicula.genero}  -  Año: ${pelicula.annio}  -  Sinopsis: ${pelicula.sinopsis}`)
    })
}