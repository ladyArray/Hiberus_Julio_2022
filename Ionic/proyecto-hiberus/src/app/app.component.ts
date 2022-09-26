import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Catalogo', url: '/catalogo', icon: 'beer' },
    { title: 'Equipo', url: '/equipo', icon: 'people' },
    { title: 'Ubicacion', url: '/folder/Ubicacion', icon: 'location' }
  ];

  
  constructor() {}
}
