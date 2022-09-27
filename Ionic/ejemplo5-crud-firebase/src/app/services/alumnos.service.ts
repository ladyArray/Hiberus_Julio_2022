import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private angularFirestore: AngularFirestore) { }

  public todos(): Observable<DocumentChangeAction<unknown>[]>{
    return this.angularFirestore
      .collection('alumnos', (ref) => ref.orderBy('nota', 'desc'))
      .snapshotChanges();
  }

  public buscarPorId(id: string): Observable<any>{
    return this.angularFirestore.collection('alumnos').doc(id).snapshotChanges();
  }

  public buscarPorNombre(nombre: string): Observable<DocumentChangeAction<unknown>[]>{
    return this.angularFirestore
      .collection('alumnos', (ref) => ref.where('nombre', "==", nombre))
      .snapshotChanges();
  }

  public eliminar(id: string):any{
    return this.angularFirestore.collection('alumnos').doc(id).delete();
  }

  public add(nuevo: any): any{
    return this.angularFirestore.collection('alumnos').add(nuevo);
  }

  public modificarAlumno(id:string, data:any){
    return this.angularFirestore.collection('alumnos').doc(id).update(data);
  }
}
