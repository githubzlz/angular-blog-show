import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  public data:any = new Array(4);
  
  constructor() { }

  ngOnInit() {
  }

}
