import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alumnos: any = [
      {repetidor: false, nombre: 'Juan', apellido: 'Lopez', nota: 7.5},
      {repetidor: false, nombre: 'Maria', apellido: 'Sanchez', nota: 5.8},
      {repetidor: true, nombre: 'Elena', apellido: 'Arias', nota: 3.2},
      {repetidor: true, nombre: 'Roberto', apellido: 'Rodriguez', nota: 6.4},
      {repetidor: false, nombre: 'Javier', apellido: 'Martin', nota: 4.1},
      {repetidor: false, nombre: 'Marta', apellido: 'Gonzales', nota: 8.3},
  ];

}
