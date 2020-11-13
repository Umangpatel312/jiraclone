import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [BoardComponent, BreadcrumbComponent, SearchComponent, ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    BreadcrumbComponent,
    BoardComponent
  ]
})
export class BoardModule { }
