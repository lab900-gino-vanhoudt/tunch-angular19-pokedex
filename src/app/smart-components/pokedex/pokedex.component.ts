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
  pokemons = computed(() => this.pokemonsResource.value()?.results ?? []);
  loadingPokemons = this.pokemonsResource.isLoading;

  /* TODO: load the pokemon detail, based on the selected pokemon */
  selectedPokemonDetailResource = this.#pokemonService.getPokemonDetailResource(
    this.selectedPokemon,
  );
  selectedPokemonDetail = this.selectedPokemonDetailResource.value;
  loadingPokemonDetail = this.selectedPokemonDetailResource.isLoading;

  lastSeenPokemon = linkedSignal<
    PokemonDetail | undefined,
    PokemonDetail | undefined
  >({
    source: this.selectedPokemonDetail,
    computation: (current, previous) => {
      return current != null ? previous?.source : undefined;
    },
  });

  reloadPokemons(): void {
    this.selectedPokemon.set(undefined);
    /* TODO: reload all the pokemons from the list */
    this.pokemonsResource.reload();
  }

  toggleSelectedPokemon(pokemon: Pokemon): void {
    this.selectedPokemon.update((current) =>
      current?.name !== pokemon.name ? pokemon : undefined,
    );
  }
}
