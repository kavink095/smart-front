import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'route-dashboard', component: DashboardComponent },
  { path: 'route-users', component: UsersComponent },
  { path: 'route-books', component: BooksComponent },
  { path: '', redirectTo: '/route-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
