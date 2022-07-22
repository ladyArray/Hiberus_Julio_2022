class Figura{

    // propiedades
    x;
    y;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    area(){
        return 0;
    } 
    
    posicion(){
        return "[" + this.x + "," + this.y + "]";
    }

    mostrarDatos(){
        return "x:" + this.x + ", y: " + this.y;
    }
}