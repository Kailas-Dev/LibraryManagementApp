import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AvailableBooksComponent } from './components/available-books/available-books.component';
import { IssueBooksComponent } from './components/issue-books/issue-books.component';
import { IssueBookPageComponent } from './components/issue-book-page/issue-book-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [BooksComponent, AvailableBooksComponent, IssueBooksComponent, IssueBookPageComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ]
})
export class BooksModule { }
