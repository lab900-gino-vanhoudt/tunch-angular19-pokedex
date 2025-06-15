import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  computed,
  linkedSignal,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonDetail } from '../../models/pokemon.model';
import { PokemonDetailComponent } from '../../ui-components/pokemon-detail/pokemon-detail.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex',
  imports: [PokemonDetailComponent, FormsModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent {
  #pokemonService = inject(PokemonService);
  selectedPokemon = signal<Pokemon | undefined>(undefined);

  /* TODO: use the pokemons resource from the service to get your pokemons */
  pokemonsResource = this.#pokemonService.pokemonsResource;
  pokemons = signal<Pokemon[]>([]);
  loadingPokemons = signal(false);

  /* TODO: load the pokemon detail, based on the selected pokemon */
  selectedPokemonDetailResource =
    this.#pokemonService.getPokemonDetailResource();
  selectedPokemonDetail = signal(undefined);
  loadingPokemonDetail = signal(false);

  /* TODO: *Gino-15 Jun 2025* calculate the last selected pokemon */
  lastSeenPokemon = signal<PokemonDetail | undefined>(undefined);

  reloadPokemons(): void {
    this.selectedPokemon.set(undefined);
    /* TODO: reload all the pokemons from the list */
    // ...
  }

  toggleSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon.update((current) =>
      current?.name !== pokemon.name ? pokemon : undefined,
    );
  }
}
