// crear la clase Direccion
// propiedades: calle, numero, poblacion
// mostrarInfo()

class Direccion{

    // propiedades
    calle;
    numero;
    poblacion;

    // constructores
    constructor(calle, numero, poblacion){
        this.calle = calle;
        this.numero = numero;
        this.poblacion = poblacion;
    }

    // metodos
    mostrarInfo(){
        // mayor, 5 (Madrid)
        return this.calle + ", " + this.numero + " (" + this.poblacion + ")";
    }
}