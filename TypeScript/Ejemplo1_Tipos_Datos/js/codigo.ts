// string
let nombre: string = "Anabel";
let apellido: string = 'Vegas';
let email:string;   //undefined

// number
let edad: number = 52;
let numero: number = 6.2;
let hex: number = 0xf00d;
let binario:number = 0b1001;
let octal: number = 0o123;

// boolean
let soltero: boolean = true;
let trabajador: boolean;   // undefined
let activo = true;   // No se recomienda

// any
let algo: any = true;
algo = 'Hola';
algo = 6;
let variable;   // por defecto es de tipo any

// arrays
let lista = [1,2,3,4,5,6,7];
let lista2: number[] = [1,2,3,4];
let lista3: Array<number> = [1,2,3,4];
let letras: string[] = ["a", "b", "c"];
// letras.push(5);   error

// tuplas
let producto = ["Melocotones", 1.50];
let producto2: [string, number] = ["Melocotones", 1.50];
console.log(producto2[0]);
console.log(producto2[1]);

// enum
//enum PuntoCardinal{NORTE, SUR, ESTE, OESTE};
//enum PuntoCardinal{NORTE=1, SUR, ESTE, OESTE};
enum PuntoCardinal{NORTE=2, SUR=5, ESTE=6, OESTE=10};
let punto: PuntoCardinal = PuntoCardinal.OESTE;
console.log(PuntoCardinal[2]); // ESTE

// null y undefined
// en tsconfig.json   ->    "strictNullChecks": false,  
let n: number = undefined;
let texto:string|undefined = null;

// aserciones -> assertion
let num1: unknown = 5;
let num2: unknown = 6;
//let suma: number = num1 + num2;
let suma: number = (<number>num1) + (<number>num2);
console.log(`Suma: ${suma}`);

let cadena: unknown = "Hola, que tal?"
//let longitud: number = cadena.length;
let longitud: number = (cadena as string).length;
console.log(`Longitud: ${longitud}`);

// void
function mostrarInfo(): void{
    alert(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`);
}

mostrarInfo();