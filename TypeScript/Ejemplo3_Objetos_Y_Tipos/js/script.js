// Creamos un objeto
var persona = { nombre: 'Pepe', edad: 37, aficiones: ['cine', 'musica'] };
// Puedo asignar otros valores a las propiedades pero siempre 
// respetando el nombre de las propiedades
//persona = {nombreeeeeee:'Pepe', edad:38, aficiones: ['teatro','musica','futbol']};
persona = { nombre: 'Pepe', edad: 38, aficiones: ['teatro', 'musica', 'futbol'] };
// Crear el objeto con tipo de datos especificos
var persona2 = {
    nombre: 'Pepe',
    edad: 37,
    aficiones: ['cine', 'musica']
};
// Agregar metodos al objeto
var persona3 = {
    nombre: 'Pepe',
    edad: 37,
    aficiones: ['cine', 'musica'],
    getNombre: function () {
        return this.nombre;
    }
};
console.log(persona3.getNombre());
var maria = {
    nombre: 'Maria',
    edad: 25,
    aficiones: ['bailar', 'deporte'],
    getNombre: function () {
        return this.nombre;
    }
};
var juan = {
    nombre: 'Juan',
    edad: 34,
    aficiones: ['comer', 'cine'],
    getNombre: function () {
        return this.nombre;
    }
};
var prod1 = {
    id: 1,
    descripcion: 'Croquetas',
    precio: 2.95,
    getDescripcion: function () {
        return this.descripcion;
    }
};
var prod2 = {
    id: 2,
    descripcion: 'Chuletas',
    precio: 23.50,
    getDescripcion: function () {
        return this.descripcion;
    }
};
console.log(prod1);
console.log(prod2);
console.log(prod1.descripcion);
console.log(prod2.getDescripcion());
var perro = {
    edad: 2,
    lugar: 'China'
};
var sumar = function (a, b) {
    return a + b;
};
var restar = function (a, b) {
    return a - b;
};
console.log(sumar(7, 3));
console.log(restar(7, 3));
var Operacion = /** @class */ (function () {
    function Operacion(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Operacion.prototype.sumar = function (num1, num2) {
        return (num1 + num2);
    };
    return Operacion;
}());
console.log(new Operacion(8, 2).sumar(8, 2));
