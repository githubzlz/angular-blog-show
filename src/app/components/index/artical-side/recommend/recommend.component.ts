import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  public data1:any = new Array(1);
  public data2:any = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}
