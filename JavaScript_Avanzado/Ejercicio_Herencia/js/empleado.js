class Empleado extends Persona{

    // Propiedades privadas
    #sueldo;

    // Constructor
    constructor(nombre, edad, sexo, sueldo){
        super(nombre, edad, sexo);
        this.sueldo = sueldo; // se esta llamando al metodo set
    }

    // Metodos de acceso
    get sueldo() {
        return this.#sueldo;
    }
    set sueldo(value) {
        this.#sueldo = value;
    }

    mostrarDetalle(){
        // Esta llamando a get sueldo()
        return super.mostrarDetalle() + " Sueldo: " + this.sueldo;
    }
}