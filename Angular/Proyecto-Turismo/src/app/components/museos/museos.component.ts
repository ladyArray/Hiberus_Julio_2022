import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Museo } from 'src/app/models/museo';
import { MuseosService } from 'src/app/services/museos.service';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements AfterViewInit {

  museos: Museo[] = [];
  dataSource: any;
  nombreColumnas = ['nombre', 'telefono', 'precio', 'abierto'];
  dato:string = '';

  @ViewChild(MatSort)
  sort: MatSort | undefined;

  @ViewChild(MatPaginator)
  paginator: MatPaginator | undefined;

  constructor(private museosService: MuseosService) { 
    this.museos = this.museosService.getAll();
    this.dataSource = new MatTableDataSource(this.museos);
  }

  filtrar(){
    this.dataSource.filter = this.dato;
  }

  ngAfterViewInit(): void {
      if (this.sort != undefined){
        this.dataSource.sort = this.sort;
      }

      if (this.paginator != undefined){
        this.dataSource.paginator = this.paginator;
      }
  }

}
