import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer, CustomerDetail } from '../customer/models/customer.model';
import { RouterLink } from '@angular/router';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Observable, of, combineLatest } from 'rxjs';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CustomerDetailsComponent],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
  @Input() public customers!: Customer[];

  public customerDetails$: Observable<CustomerDetail>;
  public customerWithDetails$: Observable<[Customer, CustomerDetail]>;
  public uid!: string;

  constructor(protected dataService: DataService) {
    this.customerDetails$ = new Observable();
    this.customerWithDetails$ = new Observable();
  }

  public showDetails(customer: Customer): void {
    this.uid = customer.uid;
    this.customerDetails$ = this.dataService.getCustomerDetails(this.uid);
    this.customerWithDetails$ = combineLatest([
      of(customer),
      this.customerDetails$,
    ]);
  }

  public closeDetails(close: boolean): void {
    if (close) this.uid = '';
  }
}
