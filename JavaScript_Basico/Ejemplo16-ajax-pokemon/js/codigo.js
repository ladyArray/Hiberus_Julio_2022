var xhr;

// Funcion para obtener el objeto del navegador
function obtenerObjeto(){
    xhr = new XMLHttpRequest();   // readyState = 0;
}

function traerTodos(){
    obtenerObjeto();

    // Preparar la peticion
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);  // readyState = 1;

    // El formato de respuesta es JSON
    xhr.setRequestHeader("accept","application/json");

    // Informar de la funcion que procesara la respuesta
    xhr.onreadystatechange = procesarTodos;  // SIN PARENTESIS

    // Enviar la peticion
    xhr.send();     // readyState = 2;
}

function procesarTodos(){
    // Solo se ejecuta si hemos recibido la respuesta por completo
    if (xhr.readyState == 4){
        //console.log(JSON.parse(xhr.responseText));
        var datos = JSON.parse(xhr.responseText);
        var array = datos.results;
        //console.log(array);

        var lista = document.createElement("ul");
        
        for(var i in array){
            //console.log(array[i].name);
            var item = document.createElement("li");
            item.innerText = array[i].name;
            lista.appendChild(item);
        }

        document.getElementById("todos").appendChild(lista);
    }
}

function buscarPokemon(){
    obtenerObjeto();

    // Recoger el nombre escrito por el usaurio
    var dato = nombre.value;

    // Preparar la peticion
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/"+dato, true);  

    // El formato de respuesta es JSON
    xhr.setRequestHeader("accept","application/json");

    // Informar de la funcion que procesara la respuesta
    xhr.onreadystatechange = procesarPokemon;  // SIN PARENTESIS

    // Enviar la peticion
    xhr.send();    
}

function procesarPokemon(){
    if (xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText));  
   
        var datos = JSON.parse(xhr.responseText);

        // lista de los nombres de los atributos o propiedades del JSON
        console.log(Object.keys(datos)); 
        // Acceder al valor de cada atributo
        console.log(datos['id'] + "---------------");

        document.getElementById("resultado").innerText = ""; 
        document.getElementById("resultado").innerText += 
            "Nombre: " + datos.name + "\n";
        resultado.innerText += "Altura: " + datos.height+ "\n";
        resultado.innerText += "Peso: " + datos.weight+ "\n";
        resultado.innerText += "Base experience: " + datos.base_experience+ "\n";

        for(var habilidad of datos.abilities){
            resultado.innerText += "Habilidad: " + habilidad.ability.name + "\n";
        }
        var id = datos.id;
        var URL = "https://media.redadn.es/poke/i/pokedex/ken/" + id + ".png"; 

            var img = document.createElement("img");
            img.src = URL;

            document.getElementById("imagen").appendChild(img);
    }
}

// es lo mismo que <body onload="traerTodos()">
addEventListener("load", traerTodos);

// asociar evento a la caja de texto
document.getElementById("nombre").addEventListener("blur", buscarPokemon);