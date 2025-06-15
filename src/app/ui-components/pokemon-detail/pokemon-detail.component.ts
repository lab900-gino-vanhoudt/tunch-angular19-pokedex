import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  imports: [NgOptimizedImage],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  pokemon = input.required<PokemonDetail>();

  types = computed(() =>
    this.pokemon()
      .types.map((type) => type.type.name)
      .join(', '),
  );

  cryUrl = computed(() => this.pokemon().cries.latest);
}
