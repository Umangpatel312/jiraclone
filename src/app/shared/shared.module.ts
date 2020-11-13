import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TitleComponent } from './title/title.component';
import { ProfileComponent } from './profile/profile.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueComponent } from './issue/issue.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IssueService } from './issue.service';

@NgModule({
  declarations: [
    TitleComponent,
    ProfileComponent,
    IssueListComponent,
    IssueComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, FontAwesomeModule],
  providers: [IssueService],
  exports: [
    TitleComponent,
    ProfileComponent,
    IssueComponent,
    IssueListComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
