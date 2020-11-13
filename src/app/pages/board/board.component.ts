import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {
  BoardSection,
  Issue,
  IssuePriority,
  IssueStatus,
} from 'src/app/shared/issue/issue.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft;
  faTwitter = faTwitter;
  faGithub = faGithub;
  canFilterResolved = false;
  projectMemberUrls: string[] = [
    '../../../assets/Images/siling.png',
    '../../../assets/Images/captainAmerica.jpeg',
    '../../../assets/Images/sharingan.png',
    '../../../assets/Images/escanor.png',
  ];
  boardSections: BoardSection[] = [
    {
      title: 'BACKLOG',
      issues: [
        {
          title: 'Something',
          description: 'Something',
          memberList: [
            '../../../assets/Images/siling.png',
            '../../../assets/Images/captainAmerica.jpeg',
            '../../../assets/Images/sharingan.png',
            '../../../assets/Images/escanor.png',
          ],
          taskTypeAndId: 'Something',
          status: IssueStatus.BOOKMARKED,
          priority: IssuePriority.HIGH,
        },
        {
          title: 'Preparing backend API with GraphQL',
          description: '',
          memberList: [
            '../../../assets/Images/siling.png',
            '../../../assets/Images/captainAmerica.jpeg',
            '../../../assets/Images/sharingan.png',
            '../../../assets/Images/escanor.png',
          ],
          taskTypeAndId: 'STORY 9451',
          status: IssueStatus.COMPLETED,
          priority: IssuePriority.HIGH,
        },
      ],
    },
    {
      title: 'SELECTED FOR DEVELOPMENT',
      issues: [],
    },
    {
      title: 'IN PROGRESS',
      issues: [],
    },
    {
      title: 'DONE',
      issues: [],
    },
  ];

  filteredSections: BoardSection[] = this.boardSections;

  constructor() {}

  ngOnInit(): void {}

  onIgnoreResolved(): void {
    this.canFilterResolved = !this.canFilterResolved;
    if (this.canFilterResolved) {
      const sections = JSON.parse(JSON.stringify(this.boardSections));
      sections.map((s) => this.eliminateResolved(s));
      this.filteredSections = sections;
    } else {
      console.log(
        'this.canFilterResolved?',
        this.canFilterResolved,
        this.boardSections
      );
      this.filteredSections = this.boardSections;
    }
  }

  eliminateResolved(section: BoardSection): void {
    section.issues = section.issues.filter(
      (i) => i.status !== IssueStatus.COMPLETED
    );
  }
}
