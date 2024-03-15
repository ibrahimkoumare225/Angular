import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-add-pokemon',
    template: `<h2 class="center">Ajouter un pokémon</h2>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form> `,
    styles: [],
    standalone: true,
    imports: [NgIf, PokemonFormComponent]
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
