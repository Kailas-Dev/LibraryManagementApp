import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../users/guard/auth.guard';
import { BooksComponent } from './books.component';
import { AvailableBooksComponent } from './components/available-books/available-books.component';
import { IssueBookPageComponent } from './components/issue-book-page/issue-book-page.component';
import { IssueBooksComponent } from './components/issue-books/issue-books.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'available-books', component: AvailableBooksComponent, canActivate: [AuthGuard] },
  { path: 'issue-books', component: IssueBooksComponent, canActivate: [AuthGuard] },
  { path: 'issue-book-page', component: IssueBookPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
