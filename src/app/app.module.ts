/** import Modules */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/** import Components */
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

/** import services */
import { BooksApiService } from './services/books-api.service';
import { BorrowerDetailModule } from './borrower-detail/borrower-detail.module';


const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'borrower-detail',
    loadChildren: './borrower-detail/borrower-detail.module#BorrowerDetailModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BorrowerDetailModule,
  ],
  providers: [BooksApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
