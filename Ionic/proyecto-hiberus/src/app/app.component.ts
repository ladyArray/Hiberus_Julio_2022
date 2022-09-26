import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Catalogo', url: '/catalogo', icon: 'paper-plane' },
    { title: 'Equipo', url: '/folder/Equipo', icon: 'heart' },
    { title: 'Ubicacion', url: '/folder/Ubicacion', icon: 'archive' }
  ];

  
  constructor() {}
}
