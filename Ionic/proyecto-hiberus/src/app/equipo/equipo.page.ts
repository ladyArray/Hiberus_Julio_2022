import { EquipoService } from './../services/equipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.page.html',
  styleUrls: ['./equipo.page.scss'],
})
export class EquipoPage implements OnInit {

  usuarios: any = [];

  constructor(private equipoService: EquipoService) {
    this.equipoService.pedirUsuarios().subscribe((resultado) => {
      console.log(resultado);
      this.usuarios = resultado;
    });
  }

  ngOnInit() {
  }

}
