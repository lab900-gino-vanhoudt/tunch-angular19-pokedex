import { Injectable, Signal, inject } from '@angular/core';
import { httpResource, HttpClient } from '@angular/common/http';
import { PokemonsPage, PokemonDetail, Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  #baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  #http = inject(HttpClient);

  /* TODO: define a resource */
  pokemonsResource = undefined;

  getPokemonDetailResource() {
    /* TODO: return a resource, using rxResource */
    return undefined;
  }
}
