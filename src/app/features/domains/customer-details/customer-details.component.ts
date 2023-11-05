import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer, CustomerDetail } from '../customer/models/customer.model';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnChanges {
  @Input() public customerWithDetails: [Customer, CustomerDetail];
  @Output() public closeButtonClicked: EventEmitter<boolean>;

  public customer!: Customer;
  public customerDetails!: CustomerDetail;

  constructor() {
    this.customerWithDetails = [{} as Customer, {} as CustomerDetail];
    this.closeButtonClicked = new EventEmitter();
  }

  public ngOnChanges(): void {
    const [customer, customerDetail] = this.customerWithDetails;
    this.customer = customer;
    this.customerDetails = customerDetail;
  }

  public close(): void {
    this.closeButtonClicked.emit(true);
  }
}
