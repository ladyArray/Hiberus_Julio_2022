class Direccion{

    // propiedades
    #calle;
    #numero;
    #poblacion;

    // constructores
    constructor(calle, numero, poblacion){
        this.setCalle(calle);
        this.setNumero(numero);
        this.setPoblacion(poblacion);
    }

    getCalle(){
        return this.#calle;
    }

    getNumero(){
        return this.#numero;
    }

    getPoblacion(){
        return this.#poblacion;
    }

    setCalle(calle){
        if (calle.length < 4 || calle.length > 20){
            alert("Calle debe tener entre 4 y 20 caracteres")
        } else {
            this.#calle = calle;
        }
    }

    setNumero(numero){
        this.#numero = numero;
    }

    setPoblacion(poblacion){
        this.#poblacion = poblacion;
    }

    // metodos
    mostrarInfo(){
        // mayor, 5 (Madrid)
        return this.#calle + ", " + this.#numero + " (" + this.#poblacion + ")";
    }
}