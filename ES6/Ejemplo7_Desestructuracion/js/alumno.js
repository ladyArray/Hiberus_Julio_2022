class Alumno{
    // Propiedades
    nombre;
    apellido;
    nota;

    // Constructor
    constructor(nombre, apellido, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }

    // Metodos
    mostrarInformacion(){
        return "Nombre: " + this.nombre + 
            " Apellido: " + this.apellido +
            " Nota: " + this.nota;
    }
}