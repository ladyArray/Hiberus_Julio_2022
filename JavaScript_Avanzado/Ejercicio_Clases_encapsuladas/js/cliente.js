class Cliente{

    // propiedades privadas
    #nombre;
    #cif;
    #direccion;

    // constructor
    constructor(nombre, cif, direccion){
        this.setNombre(nombre);
        this.setCif(cif);
        this.setDireccion(direccion);
    }

    // metodos de acceso get y set
    getNombre(){
        return this.#nombre;
    }

    getCif(){
        return this.#cif;
    }

    getDireccion(){
        return this.#direccion;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    setCif(cif){
        this.#cif = cif;
    }

    setDireccion(direccion){
        this.#direccion = direccion;
    }

    mostrarInfo(){
        return "Nombre: " + this.#nombre + " Cif: " + this.#cif
            + "Direccion: " + this.#direccion?.mostrarInfo();
    }
}