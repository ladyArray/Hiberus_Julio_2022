class Circulo extends Figura{

    // propiedades
    radio;

    constructor(x, y, radio){
        // Estamos pasando x e y al constructor de la superclase
        // En ese momento se crea el objeto de Figura
        super(x,y);
        this.radio = radio;
    }

    // Sobreescribimos los metodos heredados
    area(){
        return Math.PI * Math.pow(this.radio, 2);
    }

    mostrarDatos(){
        // MALA PRACTICA
        //return "x:" + this.x + ", y: " + this.y + " radio: " + this.radio;
        
        // super.mostrarDatos() llamamos al metodo de la superclase
        return super.mostrarDatos() + " radio: " + this.radio;
        
    }
}