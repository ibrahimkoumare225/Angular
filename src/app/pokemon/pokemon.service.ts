import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
import { error } from "console";

@Injectable()
export class PokemonService {
  constructor(private htpp: HttpClient) {}
  getPokemonList(): Observable<Pokemon[]> {
    return this.htpp.get<Pokemon[]>("api/pokemons").pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.htpp.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.htpp.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.htpp.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.htpp.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Vol",
      "Poison",
      "Normal",
      "Fée",
      "Combat",
      "Psy",
    ];
  }
}
