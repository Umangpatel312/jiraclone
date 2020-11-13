import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs/operators';
// const faker = require('faker');
// import * as faker from 'faker';
// import { fake } from 'faker';
// const faker = require('ng-faker');
import { BoardSection, IssuePriority, IssueStatus } from './issue/issue.model';

// @Injectable({
//   // providedIn: 'root',
// })
@Injectable()
export class IssueService {
  // fake = new faker();
  // faker.fake.boardSections
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
  constructor() {
    // fake = new faker();
    // this.boardSections = [
    //   {
    //     title: faker.name.title(),
    //     issues: [{
    //       title: faker.name.title(),
    //       description: faker.name.jobDescriptor(),
    //       taskTypeAndId:faker.database.
    //     }
    //     ],
    //   },
    // ];
  }
  getIssues(): BoardSection[] {
    return this.boardSections;
  }

  getProjectSections(): Observable<BoardSection[]> {
    return of(this.boardSections);
  }
}
