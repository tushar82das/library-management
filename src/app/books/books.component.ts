import { Component, OnInit } from '@angular/core';
import { BooksApiService } from '../services/books-api.service';
import { Ibooks } from '../books/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Ibooks[];
  filteredBooks: Ibooks[];
  search: string;

  constructor(private booksApiService: BooksApiService) {
    this.books = [];
    this.filteredBooks = [];
    this.search = '';
  }

  ngOnInit() {
    this.getListOfBooks();
  }

  getListOfBooks() {
    this.booksApiService.getBooks().subscribe(data => {
      this.books = data;
      this.filteredBooks = data;
    });
  }

  searchBook() {
    this.filteredBooks = this.books.filter(item =>
      item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
  }
}
