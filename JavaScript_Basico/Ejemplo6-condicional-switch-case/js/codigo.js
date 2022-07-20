function cambiarColor() {
    // Tengo que saber que boton se ha pulsado
    var boton = event.target.id;

    switch (boton) {
        case "btn1":
            document.getElementById(boton).className = "rojo";
            break;

        case "btn2":
            document.getElementById(boton).className = "verde";
            break;

        case "btn3":
            document.getElementById(boton).className = "azul";
            break;
    }
}