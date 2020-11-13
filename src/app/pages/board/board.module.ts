import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IssueService } from 'src/app/shared/issue.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [BoardComponent, BreadcrumbComponent, SearchComponent],
  // providers: [IssueService],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
  ],
  exports: [BreadcrumbComponent, BoardComponent],
})
export class BoardModule {}
