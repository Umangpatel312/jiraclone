import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  searchText = '     ';
  constructor() { }

  ngOnInit(): void {
  }

  setText($event: any): void {
    console.log('Event', $event);
    $event.preventDefault();
    this.searchText = this.searchText + $event.key;
  }

}
