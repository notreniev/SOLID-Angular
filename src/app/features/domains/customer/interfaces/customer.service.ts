import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

export interface CustomerService {
  getCustomers(): Observable<Customer[]>;
  getCustomer(uid: string): Observable<Customer | undefined>;
}
