import { Component, Input, OnInit } from '@angular/core';
import { Issue } from '../issue/issue.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  @Input() title: string;
  @Input() issues: Issue[];
  constructor() { }

  ngOnInit(): void {
  }

}
