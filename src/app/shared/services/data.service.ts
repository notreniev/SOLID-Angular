import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../features/domains/Item/models/item.model';
import {
  Customer,
  CustomerDetail,
} from '../../features/domains/customer/models/customer.model';
import { CustomerRepository } from '../../features/domains/customer/repositories/customer.repository';
import { ItemRepository } from '../../features/domains/Item/repositories/item.repository';
import { ICustomerRepository } from '../../features/domains/customer/interfaces/icustomer.repository';
import { IItemRepository } from '../../features/domains/Item/interfaces/iitem.repository';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject(CustomerRepository) private customerRepository: ICustomerRepository,
    @Inject(ItemRepository) private itemRepository: IItemRepository
  ) {}

  public getCustomers(): Observable<Customer[]> {
    return this.customerRepository.getCustomers();
  }

  public getCustomer(uid: string): Observable<Customer> {
    return this.customerRepository.getCustomer(uid);
  }

  public getCustomerDetails(uid: string): Observable<CustomerDetail> {
    return this.customerRepository.getCustomerDetails(uid);
  }

  public getItems(): Observable<Item[]> {
    return this.itemRepository.getItems();
  }
}
