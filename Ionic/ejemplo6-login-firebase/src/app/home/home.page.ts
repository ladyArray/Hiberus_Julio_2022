import { LoginService } from '../services/login.service';
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
  conf_pw: string = '';

  constructor(private loginService: LoginService) {}

  login(){
    this.loginService.login(this.email, this.pw)
        .then(()=> {
          alert("Usuario logado")
        })
        .catch((error) => {
          console.log(error);
        })
  }

  registrar(){
    if (this.pw == this.conf_pw){
      this.loginService.registro(this.email, this.pw)
        .then(()=> {
          alert("Usuario registrado")
          this.registro = false;
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      alert("Los password no coinciden");
    }
  }

}
