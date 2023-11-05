import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

export interface ItemService {
  getItems(): Observable<Item[]>;
}
