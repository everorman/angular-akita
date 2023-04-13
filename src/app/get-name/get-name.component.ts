import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NameQuery } from '../state/name.query';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.scss'],
})
export class GetNameComponent {
  name$!: Observable<string | null>;

  constructor(private nameQuery: NameQuery) {}

  ngOnInit() {
    this.name$ = this.nameQuery.getName$;
  }
}
