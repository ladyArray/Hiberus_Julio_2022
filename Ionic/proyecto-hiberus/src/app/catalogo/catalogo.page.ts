import { CervezasService } from './../services/cervezas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  cervezas: any[] = [];

  constructor(private cervezasService: CervezasService) { 
    this.cervezas = this.cervezasService.getAll();
  }

  ngOnInit() {
  }

}
