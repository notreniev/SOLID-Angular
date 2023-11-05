import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { CustomerRepository } from './features/domains/customer/repositories/customer.repository';
import { ItemRepository } from './features/domains/Item/repositories/item.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    CustomerRepository,
    ItemRepository,
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
  ],
};
