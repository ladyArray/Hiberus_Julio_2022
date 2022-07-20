// variable que indica si tenemos el borde puesto o no
var estiloBorde = false;
var estiloColor = false;

var cuadrado = document.getElementById("cuadrado");
var botonColor = document.getElementById("btnColor");
var botonSombra = document.getElementById("btnSombra");


function borde(){
    if (!estiloBorde){
        cuadrado.style.border = "5px solid blue";
        document.getElementById("cuadrado").style.boxSizing = "border-box";
        document.getElementById("btnBorde").innerText = "Quitar borde";
        estiloBorde = true;
    } else {
        document.getElementById("cuadrado").style.border = "none";
        document.getElementById("btnBorde").innerText = "Aplicar borde";
        estiloBorde = false;
    }   
}

function color(){
    if (!estiloColor){
        //cuadrado.style.backgroundColor = "pink";

        // Cambiar dinamicamente el color, ojo el numero debe ser este 
        // 16777215 valor de FFFFFF
        var randomColor = Math.floor(Math.random() * 16777215).toString(16); 
        cuadrado.style.backgroundColor = "#" + randomColor;
        botonColor.innerText = "Restaurar color";
    } else {
        cuadrado.style.backgroundColor = "darkgrey";
        botonColor.innerText = "Cambiar el color";
    }
    estiloColor = !estiloColor;
}

function sombra(){
    cuadrado.classList.toggle("sombra");
    if (cuadrado.classList.contains("sombra")){
    //if (document.getElementsByClassName("sombra").length != 0){
        botonSombra.innerText = "Quitar sombra";
    } else {
        botonSombra.innerText = "Poner sombra";
    }

    //document.getElementsByClassName("sombra").length != 0
}

function restaurarEstilo(){
    // Recarga la pagina
    // location.reload();

    // Aplicar el estilo restaurar
    cuadrado.removeAttribute("style");  // Borrar todos los estilos
    cuadrado.className = "restaurar";  // Aplicamos el estilo restaurar
}