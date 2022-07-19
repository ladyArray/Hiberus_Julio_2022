// Asociar eventos a los botones
btnAbrir.onclick = abrir;
btnCerrar.onclick = cerrar;

// Variable que almacene el socket
var ws;

function abrir(){
    // Crear el socket
    ws = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

    // Se ejecuta al abrir el socket
    ws.onopen = function(){
        ws.send("Saludos desde mi socket");
        alert("Mensaje enviado");
    }

    // Que hacemos cuando recibimos un mensaje
    ws.onmessage = function(){
        var mensaje = event.data;
        alert(mensaje);
    }

    // Se ejecuta al cerrar el socket
    ws.onclose = function(){
        alert("Socket cerrado");
    }
}

function cerrar(){
    ws.close();
}