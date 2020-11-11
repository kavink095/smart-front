import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('inputwriter', { static: false }) inputElwriter: ElementRef;
  @ViewChild('inputtag', { static: false }) inputEltag: ElementRef;
  @ViewChild('inputdesc', { static: false }) inputEldesc: ElementRef;

  formNewBook: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    writer: new FormControl('', Validators.required),
    tagid: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required)  
  });

  keyname(event) {
    this.inputElwriter.nativeElement.focus();
  }
  keywriter(event) {
    this.inputEltag.nativeElement.focus();
  }
  keytag(event) {
    this.inputEldesc.nativeElement.focus();
  }
  keydesc(event) {
    this.inputEldesc.nativeElement.focus();
  }


}
