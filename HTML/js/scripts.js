/*Efecto fade para todas las paginas.
Solo funciona en caso de que los elementos
ya esten ocultos.*/

$(document).ready(function(){
    $("html").fadeIn(2000);
})

//Funcion para mandar un mensaje

/*function mensajeError() {
    alert("Lo sentimos, en estos momentos tenemos problemas con nuestra página de Facebook.");
}*/

/*La diferencia entre esta forma y
la de arriba es que la de arriba
sólo funciona si se coloca el evento
al elemento html.*/

/*En esta forma sólo basta con colocar
el atributo del elemento sin ir al html*/

$(document).ready(function(){
    $("#iconoFb").click(function(){
        alert("Lo sentimos, en estos momentos tenemos problemas con nuestra página de Facebook.");
    })
})