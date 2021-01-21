import { Component, OnInit } from '@angular/core';
import { IBorrowList } from './borrow-list';
import { BooksApiService } from '../../services/books-api.service';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})
export class BorrowListComponent implements OnInit {

  borrowers: IBorrowList[];
  constructor(private booksApiService: BooksApiService) {
    this.borrowers = [];
  }

  ngOnInit() {
    this.getBorrowers();
  }

  getBorrowers() {
    this.booksApiService.getBorrowerList().subscribe(data => this.borrowers = data);
  }

}
