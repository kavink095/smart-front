import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.css']
})
export class RentBookComponent implements OnInit {

  constructor() { }

  @ViewChild('inputbook', { static: false }) inputEl: ElementRef;

  ngOnInit(): void {
  }
  // tslint:disable-next-line: member-ordering
  formaddrent = new  FormGroup({
    id: new FormControl('', Validators.required),
    bookid: new FormControl('', Validators.required),
    txndate: new FormControl('', Validators.required),
    retdate: new FormControl('', Validators.required),
  });

  // tslint:disable-next-line: typedef
  keyID(event) {
    console.log(event);
    this.inputEl.nativeElement.focus();
  }
}
