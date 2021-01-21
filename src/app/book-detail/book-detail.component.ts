import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksApiService } from '../services/books-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  borrowBookForm: FormGroup;
  name: string;
  author: string;
  stock: number;
  isSubmited: boolean;
  successMsg: string;

  constructor(
    private route: ActivatedRoute,
    private booksApiService: BooksApiService,
    private fb: FormBuilder
  ) {
    this.isSubmited = false;
    this.successMsg = '';
  }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.getBookDetails(bookId);

    this.borrowBookForm = this.fb.group({
      borrowerName: ['', Validators.required],
      borrowerPhone: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  getBookDetails(bookId) {
    this.booksApiService.getBookDetail(bookId).subscribe(data => {
      this.name = data.name;
      this.author = data.author;
      this.stock = data.stock;
    });
  }

  onSubmit() {
    let formValue = this.borrowBookForm.value;
    formValue.bookName = this.name;
    formValue.bookAuthor = this.author;
    this.booksApiService.borrowBook(formValue).subscribe(data => {
      console.log(data);
      this.isSubmited = true;
      this.successMsg = `You have successfully borrowed a book(${data.bookName}) from library`;
    });
  }

}
