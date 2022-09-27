import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from './../services/alumnos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  mostrarErrorNombre = false;

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

  mostrar(){
    this.mostrarErrorNombre = true;
  }

  alta(){
    this.alumnosService.add(this.alumnoForm.value).then(() => {
      alert("Alumno creado");

      // Limpiar el formulario
      this.alumnoForm.reset();
    },(error: any)=> {
      console.log(error);
    });
  }

}
