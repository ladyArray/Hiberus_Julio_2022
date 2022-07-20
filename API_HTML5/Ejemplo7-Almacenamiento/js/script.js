btnGuardar.onclick = guardarDatos;
btnRecuperar.onclick = recuperarDatos;

function guardarDatos(){
    // Distintas formas de acceder al valor introducido en la caja de texto
    //document.getElementById("nombre").value;
    //nombre.value;
    localStorage.setItem("nombreUser", nombre.value);

    // otra forma de hacerlo
    //localStorage.nombreUser = nombre.value;
    alert("Nombre guardado");
}

function recuperarDatos(){
    var recuperado = localStorage.getItem('nombreUser');

    // Otra forma de hacerlo
    //var recuperado = localStorage.nombreUser;

    if (recuperado != undefined){
        // asignamos el nombre como value de la caja de texto
        nombre.value = recuperado;
    } else {
        alert("Este valor no esta almacenado");
    }
}