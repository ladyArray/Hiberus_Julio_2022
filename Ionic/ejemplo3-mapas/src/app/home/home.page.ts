import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  zoom: number = 14;
  center: google.maps.LatLngLiteral = {
    lat: 41.6369216, 
    lng: -0.8996619
  };
  opciones: google.maps.MapOptions = {
    //hybrid, satellite, terrain, roadmap
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  nombre: string = "Hiberus";

  constructor() {}

}
