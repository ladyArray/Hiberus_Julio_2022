import { CervezasService } from './../services/cervezas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  cerveza: any = {};

  constructor(private ruta: ActivatedRoute, private cervezasService: CervezasService) {
      this.cerveza = this.cervezasService.buscarCerveza(this.ruta.snapshot.params['id']);
      console.log(this.cerveza);
  }

  ngOnInit() {
  }

}
