import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'OFFICE 99 — Portfolio',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
