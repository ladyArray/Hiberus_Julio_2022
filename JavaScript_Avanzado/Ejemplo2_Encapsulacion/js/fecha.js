class Fecha{

    // Propiedades publicas
    dia;
    mes;
    anyo;

    // Constructor
    constructor(dia, mes, anyo){
        this.dia = dia;
        this.mes = mes;
        this.anyo = anyo;
    }

    mostrarFecha(){
        //    21/7/2022
        return this.dia + "/" + this.mes + "/" + this.anyo;
    }
}