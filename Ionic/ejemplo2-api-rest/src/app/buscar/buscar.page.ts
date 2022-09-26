import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  nombre: string = '';
  pokemon: {} = null;

  constructor(private pokemonService: PokemonService) { }

  buscarPokemon(){
    this.pokemonService.buscar(this.nombre).subscribe((item) => {
      console.log(item);
      this.pokemon = item;
    })
  }

  ngOnInit() {
  }

}
