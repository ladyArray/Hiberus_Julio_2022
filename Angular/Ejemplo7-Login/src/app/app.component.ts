import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logado: boolean = false;
  registro: boolean = false;   // true -> registro, false -> login
  email:string ='';
  password:string = '';
  confirmPassword:string = '';

  constructor(private loginService: LoginService){}

  login(){
    this.loginService.login(this.email, this.password).then((data) => {
      alert("Usuario autenticado");
      this.logado = true;
    }, (error) => {
      console.log(error);
      alert("Usuario no encontrado");
    });
  }

  registrar(){
    if (this.password == this.confirmPassword){
      this.loginService.registro(this.email, this.password).then((data) => {
        alert("Usuario registrado");
      }, (error) => {
        console.log(error.message);
        alert("Usuario no registrado");
      });
    } else {
      alert("El password y la confirmacion no coinciden");
    }
  }

  logOut(){
    this.loginService.logout().then((data) => {
      alert("Session cerrada");
      this.logado = false;
    }, (error) => {
      console.log(error);
      alert("No se pudo cerrar la session");
    });
  }


}
