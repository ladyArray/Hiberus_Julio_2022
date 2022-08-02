import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPintar]'
})
export class PintarDirective implements OnInit{

  @Input('appPintar')
  valoracion: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
      if (this.valoracion == 'alta'){
        // Renderizamos el elemento recibido  modificando su estilo
        // (letra:azul, letra grande: color-fondo: gris)
        /*
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
        this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', 'x-large');
        this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'silver');
        */

        //this.renderer.setAttribute(this.elRef.nativeElement,'class', 'resaltar');
        this.renderer.addClass(this.elRef.nativeElement, 'resaltar');

        
      }
  }

 

}
