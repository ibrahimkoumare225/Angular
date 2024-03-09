import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
  import {POKEMONS} from "./mock-pokemons"

@Component({
  selector: "app-root",
  templateUrl:"app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonsList:Pokemon[]= POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonsList);
    this.selectPokemon(this.pokemonsList[3])
  }

  selectPokemon(pokemonName:Pokemon){
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName.name}`)
  };
}
