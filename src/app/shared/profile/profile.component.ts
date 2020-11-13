import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <img src="{{ image }}" alt="" [ngStyle]="{
    'width': isLarge ? '30px' : '20px',
    'height': isLarge ? '30px' : '20px'
  }" style="border: 2px solid white;" class="rounded-circle align-self-center "
  *ngFor="let image of imageList">
  `,
  styleUrls: []
})
export class ProfileComponent implements OnInit {
  @Input() isLarge = true;
  @Input() imageList: string[] = [];
  // @Input() width = '30px';
  constructor() { }

  ngOnInit(): void {
  }

}
