import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'customers',
    loadComponent: () =>
      import('./features/domains/customer/customer.component').then(
        (m) => m.CustomerComponent
      ),
  },
  {
    path: 'customer-detail/:id',
    loadComponent: () =>
      import(
        './features/domains/customer-details/customer-details.component'
      ).then((m) => m.CustomerDetailsComponent),
  },
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'customers', pathMatch: 'full' },
];
