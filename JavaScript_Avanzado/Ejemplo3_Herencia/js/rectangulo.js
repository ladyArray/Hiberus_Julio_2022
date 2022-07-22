class Rectangulo extends Figura{

    // Propiedades
    base;
    altura;

    constructor(x,y,base,altura){
        super(x,y);
        this.base = base;
        this.altura = altura;
    }

    area(){
        return this.base * this.altura;
    }

    mostrarDatos(){
        return super.mostrarDatos() + " base: " + 
            this.base + " altura: " + this.altura;
        
    }
}