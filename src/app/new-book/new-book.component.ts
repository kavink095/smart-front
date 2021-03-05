import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BookDTO } from '../dtos/book-dto';
import { RackDTO } from '../dtos/rack-dto';
import { BookService } from '../services/book-service';
import { RackService } from '../services/rack-service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private bookService: BookService, private rackService: RackService) { }
  book: BookDTO = new BookDTO();

  racks: Array<RackDTO> = [];

  ngOnInit(): void {
    this.loadAllRacks();
  }


  @ViewChild('inputwriter', { static: false }) inputElwriter: ElementRef;
  @ViewChild('inputtag', { static: false }) inputEltag: ElementRef;
  @ViewChild('inputdesc', { static: false }) inputEldesc: ElementRef;
  @ViewChild('inputsave', { static: false }) inputElsave: ElementRef;
  @ViewChild('inputrack', { static: false }) inputElrack: ElementRef;

  formNewBook: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    writer: new FormControl('', Validators.required),
    tagid: new FormControl('', Validators.required),
    rack: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required)
  });

  keyname() {
    this.inputElwriter.nativeElement.focus();
  }
  keywriter() {
    this.inputElrack.nativeElement.focus();
  }
  keyrack() {
    this.inputEldesc.nativeElement.focus();
  }
  keydesc() {
    this.inputEltag.nativeElement.focus();
  }
  keytag() {
    this.inputElsave.nativeElement.focus();
  }

  discard() {
    this.formNewBook.get('tagid').setValue('');
    this.formNewBook.get('name').setValue('');
    this.formNewBook.get('writer').setValue('');
    this.formNewBook.get('rack').setValue('');
    this.formNewBook.get('desc').setValue('');
  }

  loadAllRacks(): void {
    this.rackService.getRackList().subscribe(
      (result) => {
        this.racks = result;
        console.log(this.racks);
      }
    )
  }

  saveBook(): void {
    this.book.bookrefid = this.formNewBook.get('tagid').value;
    this.book.bookname = this.formNewBook.get('name').value;
    this.book.bookwriter = this.formNewBook.get('writer').value;
    this.book.bookdesc = this.formNewBook.get('desc').value;
    this.book.bookdesc = this.formNewBook.get('rack').value;

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want create this book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {
      if (result.value) {
        this.bookService.saveBook(this.book).subscribe(
          (result) => {
            if (result === 2) {
              Swal.fire({
                title: 'sorry..',
                text: 'Cannot duplicate book id!',
                icon: 'warning',
              })
            } else if (result === 0) {
              Swal.fire({
                title: 'sorry..',
                text: 'Cannot create book!',
                icon: 'question',
              })
            } else if (result === 1)
              if (result || !Validators === null) {
                this.formNewBook.get('tagid').setValue('');
                this.formNewBook.get('name').setValue('');
                this.formNewBook.get('writer').setValue('');
                this.formNewBook.get('desc').setValue('');
              }
          }
        );
        Swal.fire(
          'Succesfully Created!',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'error'
        )
      }
    })
  }




}
