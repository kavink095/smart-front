import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookDTO } from '../dtos/book-dto';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-wrong-racks',
  templateUrl: './wrong-racks.component.html',
  styleUrls: ['./wrong-racks.component.css']
})
export class WrongRacksComponent implements OnInit {

  constructor(private bookService: BookService) { }
  book: Array<BookDTO> = [];

  ngOnInit(): void {
    this.getBookWrong();
  }

  formBooks = new FormGroup({

  });

  getBookWrong(): void {
    this.bookService.getBookWrong().subscribe(
      (result) => {
        this.book = result;
        console.log(this.book);
      }
    )
  }

}
