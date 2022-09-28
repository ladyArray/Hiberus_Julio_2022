import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(email:string, pw:string): Promise<firebase.default.auth.UserCredential>{
    return this.angularFireAuth.signInWithEmailAndPassword(email,pw);
  }

  registro(email:string, pw:string): Promise<firebase.default.auth.UserCredential>{
    return this.angularFireAuth.createUserWithEmailAndPassword(email,pw);
  }

  logout(): Promise<void>{
    return this.angularFireAuth.signOut();
  }

  comprobarLogado(): Observable<firebase.default.User | null>{
    return this.angularFireAuth.authState;  // sin parentesis, es una propiedad
  }
}
