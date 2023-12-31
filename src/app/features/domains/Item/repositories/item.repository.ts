import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item.model';
import { itemListMock } from '../../../../shared/mocks/item-list.mock';
import { IItemRepository } from '../interfaces/iitem.repository';

@Injectable()
export class ItemRepository implements IItemRepository {
  getItems(): Observable<Item[]> {
    return of(itemListMock());
  }
}
