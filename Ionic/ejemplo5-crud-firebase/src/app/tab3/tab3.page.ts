import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from './../services/alumnos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombretxt: string = null;
  alumno: any = null;
  editar: boolean = false;

  alumnoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  constructor(private alumnosService: AlumnosService) {}

  public get nombre(){
    return this.alumnoForm.get('nombre');
  }

  public get nota(){
    return this.alumnoForm.get('nota');
  }

  modificar(){
    this.editar = true;
    this.alumnoForm.setValue({
      nombre: this.alumno.nombre,
      nota: this.alumno.nota
    });  
  }

  guardarCambios(){
    this.alumnosService.modificarAlumno(this.alumno.id, this.alumnoForm.value).then(() => {
      alert("Alumno actualizado");
      this.alumnoForm.reset();
      this.editar = false;
    }, (error) => {
      console.log(error);
    });
  }

  borrar(){
     if (window.confirm('Estas seguro de eliminarlo? ')){
        this.alumnosService.eliminar(this.alumno.id).then(() => {
          alert("Alumno eliminado");
        }, (error: any) => {
          console.log(error);
        });

        // Limpiar el formulario
        this.nombretxt= null;
        this.alumno= null;
     } else {
        alert('Operacion cancelada');
     }
  }

  buscar(){
    this.alumnosService.buscarPorNombre(this.nombretxt).subscribe((datos) => {

        datos.forEach(item => {
          let info: any = item.payload.doc.data()
          this.alumno = {
            id: item.payload.doc.id,
            nombre: info.nombre,
            nota: info.nota}
        });
        
    });
  }

}
