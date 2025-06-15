import { Routes } from '@angular/router';
import { PokedexComponent } from '../app/smart-components/pokedex/pokedex.component';

export const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
