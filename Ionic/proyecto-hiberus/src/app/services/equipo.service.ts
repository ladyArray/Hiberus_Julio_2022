import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url: string = "https://jsonplaceholder.typicode.com/users";
  cabeceras: HttpHeaders = new HttpHeaders({"Content-type": "applicaton/json"});

  constructor(private http: HttpClient) { }

  pedirUsuarios(): Observable<any>{
    return this.http.get(this.url, {headers: this.cabeceras});
  }
}
