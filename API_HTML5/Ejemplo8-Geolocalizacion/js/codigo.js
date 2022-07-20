
function mostrar_mapa(){
    // Comprobamos que el navegador soporta geolocalizacion
    if (navigator.geolocation){
        // Obtener la posicion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert("Tu navegador no soporta geolocalizacion");
    }
}

function mostrarLocalizacion(posicion){
    // Obtener las coordenadas y generar el objeto googlemaps
    //alert(posicion.coords.longitude + "\n" + posicion.coords.latitude);
    var pos = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);

    // Configuracion del mapa
    var opciones = {
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    // Crear el mapa
    var mapa = new google.maps.Map(document.getElementById("seccion_mapa"), opciones);

    // Mostrar la ubicacion en el mapa
    new google.maps.InfoWindow({map: mapa, position: pos, content: 'Estas aqui'});

    // Pedir que nos centre el mapa
    mapa.setCenter(pos);

    btnAcercar.onclick = () => {
        mapa.setZoom(++mapa.zoom);
    };

    btnAlejar.onclick = () => {
        mapa.setZoom(--mapa.zoom);
    };

    tipo.onchange = () => {
        //alert(tipo.value);
        mapa.setMapTypeId(google.maps.MapTypeId[tipo.value]);
    }
}

function manejarError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("No tienes permiso del usuario");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("No se puede detectar ubicacion");
            break;
        case error.TIMEOUT:
            alert("Tiempo de espera agotado");
            break;
        case error.UNKNOWN_ERROR:
            alert("Error desconocido");
            break;      
    }
}

// Alternativa al <body onload="mostrar_mapa()">
google.maps.event.addDomListener(window, 'load', mostrar_mapa);

