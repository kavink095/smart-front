import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookDTO } from '../dtos/book-dto';
import { BookService } from '../services/book-service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  book: BookDTO = new BookDTO();
  @ViewChild('inputwriter', { static: false }) inputElwriter: ElementRef;
  @ViewChild('inputtag', { static: false }) inputEltag: ElementRef;
  @ViewChild('inputdesc', { static: false }) inputEldesc: ElementRef;

  formNewBook: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    writer: new FormControl('', Validators.required),
    tagid: new FormControl('', Validators.required),
    check: new FormControl(),
    desc: new FormControl('', Validators.required)  
  });

  keyname() {
    this.inputElwriter.nativeElement.focus();
  }
  keywriter() {
    this.inputEldesc.nativeElement.focus();
  }
  keydesc() {
    this.inputEltag.nativeElement.focus();
  }
  keytag() {
    this.inputEldesc.nativeElement.focus();
  }

  saveBook(): void {
    this.book.bookrefid = this.formNewBook.get('tagid').value;
    this.book.bookname = this.formNewBook.get('name').value;
    this.book.bookwriter = this.formNewBook.get('writer').value;
    this.book.bookdesc = this.formNewBook.get('desc').value;
   

    this.bookService.saveBook(this.book).subscribe(
      (result) => {
        if (result || !Validators === null) {
          alert('New Book has been saved successfully !');
          this.formNewBook.get('tagid').setValue('');
          this.formNewBook.get('name').setValue('');
          this.formNewBook.get('writer').setValue('');
          this.formNewBook.get('desc').setValue('');
        } else {
          alert('Failed to save the book..');
        }
      }
    );
  }




}
