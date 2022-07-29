// Funciones basicas
function saludar(nombre) {
    alert("Hola");
}
function sumar(num1, num2) {
    return num1 + num2;
}
// Parametros opcionales
function mostrar(nombre, apellido) {
    if (apellido) {
        return "".concat(nombre, " ").concat(apellido);
    }
    else {
        return "".concat(nombre);
    }
}
// Parametros por defecto
function datos(nombre, soltero) {
    if (soltero === void 0) { soltero = true; }
    if (soltero) {
        return "".concat(nombre, " esta soltero");
    }
    else {
        return "".concat(nombre, " esta casado");
    }
}
// Numero variable de argumentos
function concatenar() {
    var datos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        datos[_i] = arguments[_i];
    }
    console.log(datos[0]);
    return datos.join("-");
}
saludar("Pepito");
console.log("Suma: " + sumar(7, 4));
console.log(mostrar("Pepito"));
console.log(mostrar("Pepito", "Perez"));
console.log(datos("Pepito"));
console.log(datos("Pepito", false));
console.log(datos("Pepito", true));
console.log(concatenar());
console.log(concatenar(1, 2));
console.log(concatenar("Pera", "Naranja", "Fresa", "Sandia"));
