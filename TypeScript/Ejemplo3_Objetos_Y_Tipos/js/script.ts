// Creamos un objeto
let persona = {nombre:'Pepe', edad:37, aficiones: ['cine','musica']};

// Puedo asignar otros valores a las propiedades pero siempre 
// respetando el nombre de las propiedades
//persona = {nombreeeeeee:'Pepe', edad:38, aficiones: ['teatro','musica','futbol']};
persona = {nombre:'Pepe', edad:38, aficiones: ['teatro','musica','futbol']};

// Crear el objeto con tipo de datos especificos
let persona2: {nombre:string, edad:number, aficiones: string[]} = {
    nombre:'Pepe', 
    edad:37, 
    aficiones: ['cine','musica']
};

// Agregar metodos al objeto
let persona3: {nombre:string, edad:number, aficiones: string[], getNombre:() => string} = {
    nombre:'Pepe', 
    edad:37, 
    aficiones: ['cine','musica'],
    getNombre(): string {
        return this.nombre;
    }
};

console.log(persona3.getNombre());

// Crear el tipo Persona y posteriormente crear los objetos
type Persona = {
    nombre:string, 
    edad:number, 
    aficiones: string[], 
    getNombre:() => string
};

let maria: Persona = {
    nombre:'Maria', 
    edad:25, 
    aficiones: ['bailar','deporte'],
    getNombre(): string {
        return this.nombre;
    }
}

let juan: Persona = {
    nombre:'Juan', 
    edad:34, 
    aficiones: ['comer','cine'],
    getNombre(): string {
        return this.nombre;
    }
}

interface Producto{
    id: number,
    descripcion:string,
    precio: number,
    getDescripcion:() => string
}

let prod1: Producto = {
    id:1, 
    descripcion:'Croquetas', 
    precio: 2.95, 
    getDescripcion(): string {
        return this.descripcion;
    }
};
let prod2: Producto = {
    id:2, 
    descripcion:'Chuletas', 
    precio: 23.50,
    getDescripcion(): string {
        return this.descripcion;
    }
};
console.log(prod1);
console.log(prod2);
console.log(prod1.descripcion);
console.log(prod2.getDescripcion());

// Propiedades o metodos opcionales
interface Animal{
    especie?: string,   // Propiedad optativa
    lugar:string,
    edad: number
    getEspecie?:() => string   // Metodo optativo
}

let perro: Animal = {
    edad: 2,
    lugar: 'China'
}

// Interface para funciones
interface DosNumeros{
    (num1: number, num2: number): number
}

let sumar: DosNumeros = (a:number, b: number) => {
    return a + b;
}

let restar: DosNumeros = (a:number, b: number) => {
    return a - b;
}

console.log(sumar(7,3));
console.log(restar(7,3));

interface DosNumeros2{
    sumar(num1: number, num2: number): number
}

class Operacion implements DosNumeros2{
    num1: number;
    num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar(num1: number, num2: number):number {
        return (num1 + num2);
    }    
}

console.log(new Operacion(8,2).sumar(8,2));