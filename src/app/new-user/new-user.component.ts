import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  constructor() { }
     gender: String ;



  @ViewChild('inputfname', { static: false }) inputEl: ElementRef;
  @ViewChild('inputlname', { static: false }) inputElLName: ElementRef;
  @ViewChild('inputaddress', { static: false }) inputElAddress: ElementRef;
  @ViewChild('inputmobile', { static: false }) inputElMobile: ElementRef;
  @ViewChild('inputgender', { static: false }) inputElGender: ElementRef;
  @ViewChild('inputcheck', { static: false }) inputElCheck: ElementRef;
  
  ngOnInit(): void {
  }

  formadduser = new FormGroup({
    id: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required),
    gender: new FormControl('Choose...', Validators.required)
  });

  keyID(event) {
    console.log(event);
    this.inputEl.nativeElement.focus();
  }
  keyFName(event) {
    console.log(event);
    this.inputElLName.nativeElement.focus();
  }
  keyLName(event) {
    console.log(event);
    this.inputElAddress.nativeElement.focus();
  }
  keyAddress(event) {
    console.log(event);
    this.inputElMobile.nativeElement.focus();
  }
  keyMobile(event) {
    console.log(event);
    this.inputElGender.nativeElement.focus();
  }
  keygender(event) {
    console.log(event);
    this.inputElCheck.nativeElement.focus();
  }

  getGenderStatus(){
    this.gender = this.formadduser.get('gender').value;
  }

}
