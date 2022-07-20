// Crear un array con todos los telefonos 
var telefonos = ["+56-2-24215300", "+56 2 24215300", "+56-2 24215300",
    "+56 2-24215300", "+56-2-2421530", "+56-2-242153000",
    "+34-2-24215300", "+56-2-24215A00"];

// Crear la expresion regular
var expresion = /^\+56(-2-| 2 )\d{8}$/;

// recorrer el array de telefonos, aplicar la expresion 
// y generar una fila en la tabla
for(var tfno of telefonos){
    var resultado = expresion.test(tfno);
    
    var fila = document.createElement("tr");
    var columTfno = document.createElement("td");
    columTfno.innerText = tfno;
    var columResultado = document.createElement("td");
    columResultado.innerText = resultado;

    fila.appendChild(columTfno);
    fila.appendChild(columResultado);

    document.getElementById("tabla").appendChild(fila);
}
