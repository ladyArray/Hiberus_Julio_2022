import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alumnos: any = [
      {valoracion: 'alta', repetidor: false, nombre: 'Juan', apellido: 'Lopez', nota: 7.5},
      {valoracion: 'media', repetidor: false, nombre: 'Maria', apellido: 'Sanchez', nota: 5.8},
      {valoracion: 'baja', repetidor: true, nombre: 'Elena', apellido: 'Arias', nota: 3.2},
      {valoracion: 'media', repetidor: true, nombre: 'Roberto', apellido: 'Rodriguez', nota: 6.4},
      {valoracion: 'baja', repetidor: false, nombre: 'Javier', apellido: 'Martin', nota: 4.1},
      {valoracion: 'alta', repetidor: false, nombre: 'Marta', apellido: 'Gonzales', nota: 8.3},
  ];

}
