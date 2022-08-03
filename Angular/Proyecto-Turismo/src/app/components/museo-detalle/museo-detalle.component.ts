import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';
import { MuseosService } from 'src/app/services/museos.service';

@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css']
})
export class MuseoDetalleComponent implements OnInit {

  id: number = 0;
  museo?: Museo;

  constructor(private ruta: ActivatedRoute, private museosService: MuseosService) {
    this.id = this.ruta.snapshot.params['codigo'];
    this.museo = this.museosService.buscarMuseo(this.id);
  }

  ngOnInit(): void {
  }

}
