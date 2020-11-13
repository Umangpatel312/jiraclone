import { Component, OnInit } from '@angular/core';
import { faMap, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faMap = faMap;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
