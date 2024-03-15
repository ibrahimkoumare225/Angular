import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounce, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-search-pokemon',
    templateUrl: './search-pokemon.component.html',
    styles: [],
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class SearchPokemonComponent implements OnInit {
  
  searchTerms = new Subject<string>();
  pokemons$:Observable<Pokemon[]>;
  constructor(private router : Router,
    private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term)=> this.pokemonService.searchPokemonList(term))
    );
  }
  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon){
    const link = ['pokemon',pokemon.id];
    this.router.navigate(link);
  }
}
