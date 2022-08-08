import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 41.6369216;
  lng: number = -0.8996619;
  zoom: number = 14;

  /* Para poder compilar es necesario en tsconfig.json 
    en compilerOptions poner
      "skipLibCheck": true,*/
}
