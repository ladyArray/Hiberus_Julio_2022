import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  registro: boolean = false;   // registro=true modo registro; registro=false modo login
  email:string = '';
  pw: string = '';
  conf_pw: string = '';
  usuario: string = null;

  constructor(private loginService: LoginService) {}

  salir(){
    this.loginService.logout()
      .then(()=>{
        this.usuario = null;
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  usuarioLogado(){
    this.loginService.comprobarLogado().subscribe((info) => {
      if (info != null){
        this.usuario = info.email;
      }
    });
  }

  login(){
    this.loginService.login(this.email, this.pw)
        .then(()=> {
          alert("Usuario logado")
          this.usuarioLogado();
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

  ngOnInit(): void {
      this.usuarioLogado();
  }

}
