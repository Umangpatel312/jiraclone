import { Component, OnInit } from '@angular/core';
import { faPlus, faSearch, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;
  faQuestion = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
