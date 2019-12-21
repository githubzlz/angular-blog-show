import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  public banner:any = [
    {
      'url':'../../assets/images/1.jpg',
      'href':'http://www.baidu.com'
    },
    {
      'url':'../../assets/images/2.jpg',
      'href':'http://www.baidu.com'
    },
    {
      'url':'../../assets/images/3.jpg',
      'href':'http://www.baidu.com'
    },
  ];

  ngOnInit() {
  }

}
