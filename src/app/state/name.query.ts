import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { NameState, NameStore } from './name.storage';

@Injectable({
  providedIn: 'root',
})
export class NameQuery extends Query<NameState> {
  getName$ = this.select((state) => state.name);

  constructor(protected override store: NameStore) {
    super(store);
  }
}
