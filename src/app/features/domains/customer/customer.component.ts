import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';
import { DataService } from '../../../shared/services/data.service';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, RouterModule, CustomerListComponent],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  public customersList$: Observable<Customer[]>;

  constructor(protected dataService: DataService) {
    this.customersList$ = new Observable();
  }

  public ngOnInit(): void {
    this.customersList$ = this.dataService.getCustomers();
  }
}
