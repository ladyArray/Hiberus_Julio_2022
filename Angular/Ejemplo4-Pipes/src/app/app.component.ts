import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  texto: string = "Bienvenidos al curso de Angular";
  persona:any = {nombre:'Pepito', apellido: 'Perez', edad: 36,
                  telefonos:{tel1: 914561234, tel2: 616123456} };
  numero: number = 4567876.5476789998;
  porcentaje: number = 0.548998;

  // La fecha funciona de estas tres formas:
  // pero siempre mes/dia/año
  //fecha: Date = new Date();
  //fecha: Date = new Date('11/25/2019');
  fecha:string = '11/5/2019';

}
