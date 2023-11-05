import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

export interface IItemRepository {
  getItems(): Observable<Item[]>;
}
