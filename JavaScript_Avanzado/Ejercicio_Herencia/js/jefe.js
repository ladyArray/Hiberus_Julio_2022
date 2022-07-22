class Jefe extends Empleado{

    // Propiedades privadas
    #bonus;
    #matricula;

    // Constructor
    constructor(nombre, edad, sexo, sueldo, bonus, matricula){
        super(nombre, edad, sexo, sueldo);
        this.bonus = bonus;
        this.matricula = matricula;
    }

    // Metodos de acceso
    get bonus() {
        return this.#bonus;
    }
    set bonus(value) {
        this.#bonus = value;
    }

    get matricula() {
        return this.#matricula;
    }
    set matricula(value) {
        this.#matricula = value;
    }

    mostrarDetalle(){
        return super.mostrarDetalle() + " Bonus: " + this.bonus + " Matricula: " + this.matricula;
    }
}