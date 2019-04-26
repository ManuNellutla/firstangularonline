import { Component, OnInit } from '@angular/core';
import { DatarService } from '../datar.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';



@Component({
  selector: 'app-disc1',
  templateUrl: './disc1.component.html',
  styleUrls: ['./disc1.component.css']
})
export class Disc1Component implements OnInit {

  users: User[] = [];


  constructor(private api:DatarService) { }

  ngOnInit() {
    this.getlists();
  }


  getlists() {

    this.api.gData()
    .subscribe(users => this.users=users);
    

  }
    
}