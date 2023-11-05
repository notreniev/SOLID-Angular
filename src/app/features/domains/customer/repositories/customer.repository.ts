import { Injectable } from '@angular/core';
import { Customer, CustomerDetail } from '../models/customer.model';
import { customerListMock } from '../../../../shared/mocks/customer-list.mock';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { customerDetailsMock } from '../../../../shared/mocks/customer-details.mock';

@Injectable()
export class CustomerRepository {
  public getCustomers(): Observable<Customer[]> {
    return of(customerListMock());
  }

  public getCustomer(uid: string): Observable<Customer> {
    const [customerMock] = customerListMock().filter(
      (customer) => customer.uid === uid
    );
    return of(customerMock).pipe(catchError(handleError));
  }

  public getCustomerDetails(uid: string): Observable<CustomerDetail> {
    const [customerMock] = customerDetailsMock().filter(
      (customer) => customer.customerId === uid
    );
    return of(customerMock).pipe(catchError(handleError));
  }
}

const handleError = (error: HttpErrorResponse) => {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
  }
  return throwError(() => errorMessage);
};
