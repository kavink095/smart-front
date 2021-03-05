import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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

  public values = [
    { name: 'Male' },
    { name: 'Female' }
  ];

  gender: string;

  user: UserDTO = new UserDTO();
  @ViewChild('inputfname', { static: false }) inputEl: ElementRef;
  @ViewChild('inputlname', { static: false }) inputElLName: ElementRef;
  @ViewChild('inputemail', { static: false }) inputElEMail: ElementRef;
  @ViewChild('inputaddress', { static: false }) inputElAddress: ElementRef;
  @ViewChild('inputmobile', { static: false }) inputElMobile: ElementRef;
  @ViewChild('inputgender', { static: false }) inputElGender: ElementRef;
  @ViewChild('inputsave', { static: false }) btnElSave: ElementRef;
  @ViewChild('inputId', { static: false }) inpuElId: ElementRef;
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
    gender: new FormControl('', Validators.required)
  });


  // tslint:disable-next-line: typedef
  keyFName() {
    this.inputElLName.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyLName() {
    this.inputElEMail.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyEmail() {
    this.inputElAddress.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyAddress() {
    this.inputElMobile.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyMobile() {
    this.inputElGender.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keygender() {
    this.inpuElId.nativeElement.focus();
  }
  // tslint:disable-next-line: typedef
  keyID() {
    this.btnElSave.nativeElement.focus();
  }

  // tslint:disable-next-line: typedef
  getGenderStatus() {
    this.gender = this.formadduser.get('gender').value;
  }

  discard() {
    this.formadduser.get('id').setValue('');
    this.formadduser.get('firstname').setValue('');
    this.formadduser.get('email').setValue('');
    this.formadduser.get('lastName').setValue('');
    this.formadduser.get('address').setValue('');
    this.formadduser.get('mobile').setValue('');
    this.formadduser.get('gender').setValue('');
  }

  saveUser(): void {
    this.user.userid = this.formadduser.get('id').value;
    this.user.userfname = this.formadduser.get('firstname').value;
    this.user.usermail = this.formadduser.get('email').value;
    this.user.userlname = this.formadduser.get('lastName').value;
    this.user.useraddress = this.formadduser.get('address').value;
    this.user.usermobile = this.formadduser.get('mobile').value;
    this.user.gender = this.formadduser.get('gender').value;

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want create this user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, cancel it'
    }).then((result) => {
      if (result.value) {
        this.userService.saveUser(this.user).subscribe(
          (result) => {
            if (result === 2) {
              Swal.fire({
                title: 'sorry..',
                text: 'Cannot duplicate user!',
                icon: 'warning',
              })
            } else if (result === 0) {
              Swal.fire({
                title: 'sorry..',
                text: 'Cannot create user!',
                icon: 'question',
              })
            } else if (result === 1)
              if (result || !Validators === null) {
                this.formadduser.get('id').setValue('');
                this.formadduser.get('firstname').setValue('');
                this.formadduser.get('email').setValue('');
                this.formadduser.get('lastName').setValue('');
                this.formadduser.get('address').setValue('');
                this.formadduser.get('mobile').setValue('');
                this.formadduser.get('gender').setValue('');
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
