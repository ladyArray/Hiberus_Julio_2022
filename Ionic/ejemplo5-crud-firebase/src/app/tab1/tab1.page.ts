import { AlumnosService } from './../services/alumnos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  alumnos: any[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
      this.alumnosService.todos().subscribe((datos) => {

        // Limpio el array de alumnos
        this.alumnos = [];

        datos.forEach(item => {
          let info: any = item.payload.doc.data();
          this.alumnos.push({
            id: item.payload.doc.id,
            nombre: info.nombre,
            nota: info.nota});
        });
        
      });
  }

}
