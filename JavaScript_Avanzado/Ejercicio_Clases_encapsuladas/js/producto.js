class Producto{

    // Propiedades privadas
    #id;
    #descripcion;
    #precio;

    // Constructor
    constructor(id, descripcion, precio){
        this.setId(id);
        this.setDescripcion(descripcion);
        this.setPrecio(precio);
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