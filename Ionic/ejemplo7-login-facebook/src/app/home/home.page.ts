import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: string = '';

  constructor(private loginService: LoginService) {}

  login(){
    this.loginService.login().then((info) => {
      this.usuario = info.lastName;
    });
  }

  salir(){
    this.loginService.logout().then(() => {
      alert("Session cerrada");
      this.usuario = '';
    });
  }

}
