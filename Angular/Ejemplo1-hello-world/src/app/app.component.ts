import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = "Mi primera web con Angular";
  nombre: string = 'Anabel';
  apellido: string = 'Vegas';
  edad: number = 52;

  deshabilitado: boolean = true;

  estilo: string = '';

  constructor(){
    // crear un temporizador que cuando transcurran 3 segundos 
    // se habilite el boton
    setTimeout(() => {
      this.deshabilitado = false;
    }, 3000);
  }

  saludar():void{
    alert('Hola');
  }
}
