import { Injectable } from '@angular/core';
import { ItemService } from '../../features/domains/Item/interfaces/item.service';
import { Observable } from 'rxjs';
import { Item } from '../../features/domains/Item/models/item.model';
import { CustomerService } from '../../features/domains/customer/interfaces/customer.service';
import {
  Customer,
  CustomerDetail,
} from '../../features/domains/customer/models/customer.model';
import { CustomerRepository } from '../../features/domains/customer/repositories/customer.repository';
import { ItemRepository } from '../../features/domains/Item/repositories/item.repository';

@Injectable({
  providedIn: 'root',
})
export class DataService implements ItemService, CustomerService {
  constructor(
    protected customerRepository: CustomerRepository,
    protected itemRepository: ItemRepository
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
