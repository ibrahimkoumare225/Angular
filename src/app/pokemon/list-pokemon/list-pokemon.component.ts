import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonsList:Pokemon[] = POKEMONS;
  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['pokemon',pokemon.id])
  }
}
