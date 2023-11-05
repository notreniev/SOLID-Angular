import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { itemListMock } from '../../../../shared/mocks/item-list.mock';

@Injectable()
export class ItemRepository {
  getItems(): Observable<Item[]> {
    return of(itemListMock());
  }
}
