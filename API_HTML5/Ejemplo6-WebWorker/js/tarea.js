var i=0;

function contador(){

    // Recoger el mensaje recibido desde el hilo principal
    onmessage = (e) => {
        i = parseInt(e.data);
    };

    // Temporizador
    //setTimeout(funcion, tiempo);
    //setTimeout((que_recibo) => {que hago con esos datos}, 500);
    setTimeout(() => {
        i++;
        postMessage(i);   // Enviar el valor de i al hilo principal
        contador();
    }, 500);
}

contador();