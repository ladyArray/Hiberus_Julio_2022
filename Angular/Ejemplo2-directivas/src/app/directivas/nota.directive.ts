import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNota]'
})
export class NotaDirective implements OnInit {

  @Input('appNota')
  alum: any;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      if (this.alum.nota >= 5){
         this.renderer.setProperty(this.elRef.nativeElement, "innerHTML", 
             `${this.alum.nombre} ${this.alum.apellido}: Aprobado`);
      } else {
         this.renderer.setProperty(this.elRef.nativeElement, "innerHTML", 
             `${this.alum.nombre} ${this.alum.apellido}: Suspenso`);
      }
  }
}
