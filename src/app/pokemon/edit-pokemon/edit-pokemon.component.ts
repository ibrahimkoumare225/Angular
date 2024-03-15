import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { format } from "path";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-edit-pokemon",
    template: ` <h2 class="center">Editer {{pokemon?.name}}</h2>
  <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture" alt="">
  </p> 
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
    styles: [],
    standalone: true,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
     .subscribe(pokemon => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
  }
}
