import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  cervezas: any[] = [
    {id:1, graduacion: 5.1, cantidad:'330ml', imagen:'https://cdn.iconscout.com/icon/free/png-256/mahou-283650.png', nombre:'Mahou', precio: 1.20 , descripcion:'Buena, bonita y barata'},
    {id:2, graduacion: 4.7, cantidad:'200ml', imagen:'https://www.indupavi.es/wp-content/uploads/2018/09/gniwCeYw_400x400.jpg', nombre:'Ambar', precio: 1.75 , descripcion:'Nectar de dioses'},
    {id:3, graduacion: 3.9, cantidad:'330ml', imagen:'https://http2.mlstatic.com/D_NQ_NP_627222-MCO43484162269_092020-O.jpg', nombre:'Heineken', precio: 1.70 , descripcion:'Verde que te quiero verde'},
    {id:4, graduacion: 4.3, cantidad:'250ml', imagen:'https://quecarta.com/uploads/2020/05/30/201601397047.256x256.png', nombre:'1906', precio: 1.90, descripcion:'Mi preferida'},
    {id:5, graduacion: 5.6, cantidad:'500ml', imagen:'https://img.favpng.com/6/18/13/san-miguel-beer-logo-cervezas-san-miguel-brand-png-favpng-3zFRetWQ6dGn26h4xaj0Xs7JJ.jpg', nombre:'San Miguel', precio: 1.00, descripcion:'Agua con burbujas'},
    {id:6, graduacion: 4.2, cantidad:'330ml', imagen:'https://pbs.twimg.com/profile_images/378800000806740360/293899f5f0302ceea4a26091112daa1a.jpeg', nombre:'Virtus', precio: 2.10, descripcion:'Cerveza artesanal de Burgos, no sabe a morcilla'},
  ];

  constructor() { }

  getAll(): any[]{
    return this.cervezas;
  }

  buscarCerveza(id: number): any{
    return this.cervezas.find((item) => {
      return item.id == id;
    })

    //return this.cervezas.find(cerveza => cerveza.id == id);
  }

}
