var numero = 200;

function contador(){
    setTimeout(() =>  {
        numero++;
        postMessage("Adios, " + numero + " desde la tarea 2");
        contador();
    }, 1000);   // 1000 milisegundos = 1 segundo
}

contador();