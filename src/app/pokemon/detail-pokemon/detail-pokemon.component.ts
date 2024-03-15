import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemons";
import { PokemonService } from "../pokemon.service";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { LoaderComponent } from "../loader/loader.component";
import { NgIf, NgFor, DatePipe } from "@angular/common";

@Component({
    selector: "app-detail-pokemon",
    templateUrl: "./detail-pokemon.component.html",
    styles: [],
    standalone: true,
    imports: [NgIf, NgFor, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
     .subscribe(pokemon => this.pokemon = pokemon);
    }
  }
  deletePokemon(pokemon:Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id).
    subscribe(()=> this.goToPokemonList());

  }
  goToPokemonList(){
    this.router.navigate(['pokemons'])

  }
  goToEditPokemon(pokemon:Pokemon){
    this.router.navigate(['edit/pokemon',pokemon.id])
  }
}
