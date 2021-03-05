import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Userlogdto } from '../dtos/userlogdto';
import { UlogService } from '../services/ulog-service';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.css']
})
export class RentBookComponent implements OnInit {

  constructor(private ulogservice: UlogService) { }

  racks: Array<Userlogdto> = [];

  ngOnInit(): void {
    this.loadAllRacks();
  }

  loadAllRacks(): void {
    this.ulogservice.getLogList().subscribe(
      (result) => {
        this.racks = result;
        console.log(this.racks);
      }
    )
  }
}
