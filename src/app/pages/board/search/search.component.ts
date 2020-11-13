import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  searchInput = '';
  // tslint:disable-next-line:variable-name

  private _clearSearch = false;
  // tslint:disable-next-line:typedef
  public get clearSearch() {
    return this._clearSearch;
  }
  @Input()
  public set clearSearch(value) {
    this._clearSearch = value;
    if (value) {
      this.searchInput = '';
    }
  }
  @Output() titleEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  // setText($event: any): void {
  //   console.log('Event', $event);
  //   $event.preventDefault();
  //   this.searchText = this.searchText + $event.key;
  // }

  search = (text$: Observable<string>) =>
    text$.pipe(debounceTime(200), distinctUntilChanged()).subscribe((text) => {
      this.titleEmitter.emit(text.length >= 2 ? text : '');
    });
}
