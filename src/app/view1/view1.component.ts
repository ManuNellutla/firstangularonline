import { Component, OnInit } from '@angular/core';
import { ListData } from '../ListData';
import { dataList } from '../mock-list-datats'

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  datalist = dataList;

  constructor() { }

  ngOnInit() {
  }

}