import { Injectable, Signal, inject } from '@angular/core';
import { httpResource, HttpClient } from '@angular/common/http';
import { PokemonsPage, PokemonDetail, Pokemon } from '../models/pokemon.model';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  #baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  #http = inject(HttpClient);

  /* TODO: define a resource */
  pokemonsResource = httpResource<PokemonsPage>(this.#baseUrl);

  getPokemonDetailResource(pokemon: Signal<Pokemon | undefined>) {
    /* TODO: return a resource, using rxResource */
    return rxResource({
      request: () => pokemon()?.url,
      loader: ({ request }) => this.#http.get<PokemonDetail>(request),
    });
  }
}
