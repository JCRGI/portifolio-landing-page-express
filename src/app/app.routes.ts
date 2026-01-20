import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonalTrainerComponent } from './examples/personal-trainer/personal-trainer.component';
import { EsteticaAutomotivaComponent } from './examples/estetica-automotiva/estetica-automotiva.component';
import { EsteticistaComponent } from './examples/esteticista/esteticista.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'exemplos/personal-trainer',
    component: PersonalTrainerComponent
  },
  {
    path: 'exemplos/estetica-automotiva',
    component: EsteticaAutomotivaComponent
  },
  {
    path: 'exemplos/esteticista',
    component: EsteticistaComponent
  }
];
