import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookDTO } from '../dtos/book-dto';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  book: Array<BookDTO> = [];

  ngOnInit(): void {
    this.loadAllBooks();
  }

  formBooks = new FormGroup({

  });

  loadAllBooks(): void {
    this.bookService.getBookList().subscribe(
      (result) => {
        this.book = result;
        console.log(this.book);
      }
    )
  }

}
