class Factura{

    // Propiedades privadas
    #cliente;
    #importe;
    #fecha;
    #productos;

    // Constructor
    constructor(cliente, importe, fecha, productos){
        this.setCliente(cliente);
        this.setImporte(importe);
        this.setFecha(fecha);
        this.setProductos(productos);
    }

    // Metodos de acceso
    getCliente(){
        return this.#cliente;
    }

    getImporte(){
        return this.#importe;
    }

    getFecha(){
        return this.#fecha;
    }

    getProductos(){
        return this.#productos;
    }

    setCliente(cliente){
        this.#cliente = cliente;
    }

    setImporte(importe){
        (importe > 0) ? this.#importe = importe : alert("El importe debe ser positivo");
    }

    setFecha(fecha){
        this.#fecha = fecha;
    }

    setProductos(productos){
        this.#productos = productos;
    }


}