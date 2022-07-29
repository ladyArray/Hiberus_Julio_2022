// Funciones basicas
function saludar(nombre:string):void{
    alert("Hola");
}

function sumar(num1: number, num2: number): number{
    return num1 + num2;
}

// Parametros opcionales
function mostrar(nombre:string, apellido?:string): string{   
    if (apellido){
        return `${nombre} ${apellido}`;
    } else {
        return `${nombre}`;
    }
}

// Parametros por defecto
function datos(nombre:string, soltero:boolean = true): string{   
    if (soltero){
        return `${nombre} esta soltero`;
    } else {
        return `${nombre} esta casado`;
    }
}

// Numero variable de argumentos
function concatenar(...datos:any[]):string{
    console.log(datos[0]);
    return datos.join("-");
}

saludar("Pepito");
console.log("Suma: " + sumar(7,4));
console.log(mostrar("Pepito"));
console.log(mostrar("Pepito", "Perez"));
console.log(datos("Pepito"));
console.log(datos("Pepito", false));
console.log(datos("Pepito", true));
console.log(concatenar());
console.log(concatenar(1,2));
console.log(concatenar("Pera", "Naranja", "Fresa", "Sandia"));