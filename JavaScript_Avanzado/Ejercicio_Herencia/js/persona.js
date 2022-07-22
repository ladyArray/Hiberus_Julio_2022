class Persona{

    // Propiedades Privadas
    #nombre;  
    #edad;
    #sexo;

    // Constructor
    constructor(nombre, edad, sexo){
        // Esta llamando a los metodos set
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    // Metodos de acceso
    get nombre() {
        return this.#nombre;
    }
    set nombre(value) {
        this.#nombre = value;
    }
    get edad() {
        return this.#edad;
    }
    set edad(value) {
        this.#edad = value;
    }
    get sexo() {
        return this.#sexo;
    }
    set sexo(value) {
        this.#sexo = value;
    }

    mostrarDetalle(){
        // Sin almoadillas llama a los metodos get
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Sexo: " + this.sexo;
    }

} 