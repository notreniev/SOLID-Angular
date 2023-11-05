import { Observable, of } from 'rxjs';
import { Customer, CustomerDetail } from '../models/customer.model';

export interface ICustomerRepository {
  getCustomers(): Observable<Customer[]>;
  getCustomer(uid: string): Observable<Customer>;
  getCustomerDetails(uid: string): Observable<CustomerDetail>;
}
