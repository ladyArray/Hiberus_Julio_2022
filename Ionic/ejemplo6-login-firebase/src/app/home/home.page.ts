import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  registro: boolean = false;   // registro=true modo registro; registro=false modo login
  email:string = '';
  pw: string = '';

  constructor() {}

}
