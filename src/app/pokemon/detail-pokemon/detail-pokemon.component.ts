import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemons";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  goToPokemonList(){
    this.router.navigate(['pokemons'])

  }
}
