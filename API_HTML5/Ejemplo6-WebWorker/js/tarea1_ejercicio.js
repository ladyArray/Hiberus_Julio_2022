var numero = 100;

function contador(){
    setTimeout(() =>  {
        numero+=5;
        postMessage("Hola, " + numero + " desde la tarea 1");
        contador();
    }, 500);
}

contador();