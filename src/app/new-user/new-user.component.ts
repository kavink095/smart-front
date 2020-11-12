import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from '../dtos/user-dto';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  // tslint:disable-next-line: no-trailing-whitespace
  
  constructor(private userService: UserService) { }
  user: UserDTO = new UserDTO();
     // tslint:disable-next-line: ban-types
     gender: String ;
  @ViewChild('inputfname', { static: false }) inputEl: ElementRef;
  @ViewChild('inputlname', { static: false }) inputElLName: ElementRef;
  @ViewChild('inputemail', { static: false }) inputElEMail: ElementRef;
  @ViewChild('inputaddress', { static: false }) inputElAddress: ElementRef;
  @ViewChild('inputmobile', { static: false }) inputElMobile: ElementRef;
  @ViewChild('inputgender', { static: false }) inputElGender: ElementRef;
  @ViewChild('inputcheck', { static: false }) inputElCheck: ElementRef;
  // tslint:disable-next-line: no-trailing-whitespace
  
  ngOnInit(): void {
  }

  // tslint:disable-next-line: member-ordering
  formadduser = new FormGroup({
    id: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    check: new FormControl(),
    gender: new FormControl('', Validators.required)
  });

  // tslint:disable-next-line: typedef
  keyID(event) {
    console.log(event);
    this.inputEl.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyFName(event) {
    console.log(event);
    this.inputElLName.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyLName(event) {
    console.log(event);
    this.inputElEMail.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyEmail(event) {
    this.inputElAddress.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyAddress(event) {
    console.log(event);
    this.inputElMobile.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyMobile(event) {
    console.log(event);
    this.inputElGender.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keygender(event) {
    console.log(event);
    this.inputElCheck.nativeElement.focus();
  }

  // tslint:disable-next-line: typedef
  getGenderStatus(){
    this.gender = this.formadduser.get('gender').value;
  }

  public values = [
    {name: "Male" },
    {name: "Female" }
  ];

  saveUser(): void{
    this.user.userid = this.formadduser.get('id').value;
    this.user.userfname = this.formadduser.get('firstname').value;
    this.user.usermail = this.formadduser.get('email').value;
    this.user.userlname = this.formadduser.get('lastName').value;
    this.user.useraddress = this.formadduser.get('address').value;
    this.user.usermobile = this.formadduser.get('mobile').value;
    this.user.gender = this.formadduser.get('gender').value;
    this.user.libid = this.formadduser.get('id').value;

    this.userService.saveUser(this.user).subscribe(
      (result) => {
        if (result || !Validators === null) {
          alert('User has been saved succesfully !');
        }
      }
    );
  }

}
