class Producto{

    // Propiedades de instancia privadas
    // Cada instancia u objeto mantiene una copia de estas variables
    #id;
    #descripcion;
    #precio;

    // Propiedades de clase
    // Solo existe una variable y reside en la clase
    // La informacion de los recursos estaticos se comparte en los objetos
    static #contador=0

    // Constructor
    constructor(descripcion, precio){
        Producto.#contador++;
        this.#id = Producto.#contador;

        //this.#id = ++Producto.#contador;

        this.setDescripcion(descripcion);
        this.setPrecio(precio);
    }

    static getContador(){
        return Producto.#contador;
    }

    getId(){
        return this.#id;
    }

    getDescripcion(){
        return this.#descripcion;
    }

    getPrecio(){
        return this.#precio;
    }

    setId(id){
        this.#id = id;
    }

    setDescripcion(descripcion){
        this.#descripcion = descripcion;
    }

    setPrecio(precio){
        // condicion ? si es true : si es false
        (precio > 0) ? this.#precio = precio :  alert("El precio debe ser positivo");
    }

    mostrarInfo(){
        return "Id: " + this.#id + " Descripcion: " + this.#descripcion
            + "Precio: " + this.#precio;
    }
}