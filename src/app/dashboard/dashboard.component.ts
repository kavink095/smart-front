import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from '../dtos/user-dto';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: Array<UserDTO> = [];

  ngOnInit(): void {
    this.loadAllUsers();
  }

  formUsers = new FormGroup({
    
  });

  loadAllUsers(): void {
    this.userService.getUsersList().subscribe(
      (result) => {
        this.user = result;
        console.log(this.user);
      }
    )
  }

}
