import { Component, Input, OnInit } from '@angular/core';
import {  faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowUp, faCheckSquare, faSquare, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Issue, IssuePriority, IssueStatus } from './issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  faBookmark1 = faBookmark;
  faArrowUP = faArrowUp;
  faArrowDown = faArrowDown;
  faCheckSquare = faCheckSquare;
  faSquare = faSquare;
  constructor() { }

  ngOnInit(): void {
  }

  getIssueStatus(): IconDefinition {
    let icon: IconDefinition = null;
    switch (this.issue.status) {
      case IssueStatus.BOOKMARKED:
        icon = this.faBookmark1;
        break;
      case IssueStatus.COMPLETED:
        icon = this.faCheckSquare;
        break;
      case IssueStatus.DELAYED:
        icon = this.faSquare;
        break;
      default:
        break;
    }
    return icon;
  }
  getIssuePriority(): IconDefinition {
    let icon: IconDefinition = null;
    switch (this.issue.priority) {
      case IssuePriority.HIGH:
        icon = this.faArrowUP;
        break;
      case IssuePriority.LOW:
        icon = this.faArrowDown;
        break;
      default:
        break;
    }
    return icon;
  }
}
