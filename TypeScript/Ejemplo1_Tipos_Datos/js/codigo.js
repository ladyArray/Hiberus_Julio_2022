// string
var nombre = "Anabel";
var apellido = 'Vegas';
var email; //undefined
// number
var edad = 52;
var numero = 6.2;
var hex = 0xf00d;
var binario = 9;
var octal = 83;
// boolean
var soltero = true;
var trabajador; // undefined
var activo = true; // No se recomienda
// any
var algo = true;
algo = 'Hola';
algo = 6;
var variable; // por defecto es de tipo any
// arrays
var lista = [1, 2, 3, 4, 5, 6, 7];
var lista2 = [1, 2, 3, 4];
var lista3 = [1, 2, 3, 4];
var letras = ["a", "b", "c"];
// letras.push(5);   error
// tuplas
var producto = ["Melocotones", 1.50];
var producto2 = ["Melocotones", 1.50];
console.log(producto2[0]);
console.log(producto2[1]);
// enum
//enum PuntoCardinal{NORTE, SUR, ESTE, OESTE};
//enum PuntoCardinal{NORTE=1, SUR, ESTE, OESTE};
var PuntoCardinal;
(function (PuntoCardinal) {
    PuntoCardinal[PuntoCardinal["NORTE"] = 2] = "NORTE";
    PuntoCardinal[PuntoCardinal["SUR"] = 5] = "SUR";
    PuntoCardinal[PuntoCardinal["ESTE"] = 6] = "ESTE";
    PuntoCardinal[PuntoCardinal["OESTE"] = 10] = "OESTE";
})(PuntoCardinal || (PuntoCardinal = {}));
;
var punto = PuntoCardinal.OESTE;
console.log(PuntoCardinal[2]); // ESTE
// null y undefined
// en tsconfig.json   ->    "strictNullChecks": false,  
var n = undefined;
var texto = null;
// aserciones -> assertion
var num1 = 5;
var num2 = 6;
//let suma: number = num1 + num2;
var suma = num1 + num2;
console.log("Suma: ".concat(suma));
var cadena = "Hola, que tal?";
//let longitud: number = cadena.length;
var longitud = cadena.length;
console.log("Longitud: ".concat(longitud));
// void
function mostrarInfo() {
    alert("Hola, me llamo ".concat(nombre, " ").concat(apellido, " y tengo ").concat(edad, " a\u00F1os"));
}
mostrarInfo();
