import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Ibooks } from '../books/books';
import { IBorrowList } from '../borrower-detail/borrow-list/borrow-list';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  configUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Ibooks[]> {
    return this.http.get<Ibooks[]>(this.configUrl + 'books')
  }

  getBookDetail(bookId: string): Observable<Ibooks> {
    return this.http.get<Ibooks>(this.configUrl + 'books/' + bookId);
  }

  borrowBook(borrowerDetail: IBorrowList): Observable<IBorrowList> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(borrowerDetail);
    return this.http.post<IBorrowList>(this.configUrl + 'borrow-list', body, { 'headers': headers });
  }

  getBorrowerList(): Observable<IBorrowList[]> {
    return this.http.get<IBorrowList[]>(this.configUrl + 'borrow-list');
  }
}
