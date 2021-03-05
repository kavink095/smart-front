import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './books/books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBookComponent } from './new-book/new-book.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RentBookComponent } from './rent-book/rent-book.component';
import { BookService } from './services/book-service';
import { UserService } from './services/user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RackService } from './services/rack-service';
import { Userlogdto } from './dtos/userlogdto';
import { UlogService } from './services/ulog-service';
import { WrongRacksComponent } from './wrong-racks/wrong-racks.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    NewBookComponent,
    NewUserComponent,
    RentBookComponent,
    LoginComponent,
    WrongRacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    BookService,
    UserService,
    RackService,
    UlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
