import { PokemonService } from '../../app/services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemons: any[] = [];
  rutaSiguiente: string = '';
  rutaAnterior: string = '';

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos) => {
      this.pokemons = datos.results;
      this.rutaSiguiente = datos.next;
      this.rutaAnterior = datos.previous;
      console.log(datos);
    });
  }

  solicitar(ruta: string){
    this.pokemonService.pedirPokemons(ruta).subscribe((datos) => {
      this.pokemons = datos.results;
      this.rutaSiguiente = datos.next;
      this.rutaAnterior = datos.previous;
      console.log(datos);
    });
  }

}
