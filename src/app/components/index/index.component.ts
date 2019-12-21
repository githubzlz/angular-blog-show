import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'src/assets/js/scrollReveal.js';
import { TypeEntity } from 'src/app/entitys/blog/TypeEntity';
declare var ScrollReveal:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  public types:TypeEntity[] = [
    {
      name:'JAVA'
    },{
      name:'SPRING'
    },{
      name:'MYSQL'
    },{
      name:'人工智能'
    },{
      name:'大数据'
    }
  ];

  constructor() { 
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    this.sr.reveal('.nz-banner',this.nzbanner);
    this.sr.reveal('.data',this.maindata);
    this.sr.reveal('.recommend',this.maindata);
    this.sr.reveal('.data-side-large',this.sidelargedata);
    this.sr.reveal('.data-side-small',this.sidesmalldata);
    this.sr.reveal('.active',this.active);
    this.sr.reveal('.active-data',this.activeData);
  }
  public sr:ScrollReveal = new ScrollReveal({reset:true});

  public maindata:any = { 
    delay: 0,
    duration: 700,
    mobile: false,
    easing: 'ease-in',
    distance: '30px',
    origin: 'bottom',
    rotate: {
      x: 35,
      y: 0,
      z: 0
    },
  };
  public sidelargedata:any = { 
    delay: 0,
    duration: 700,
    mobile: false,
    easing: 'ease-in-out',
    distance: '30px',
    origin: 'bottom',
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
  };
  public sidesmalldata:any = { 
    delay: 0,
    duration: 1500,
    mobile: false,
    easing: 'ease-in-out',
    rotate: {
      x: 50,
      y: 0,
      z: 0
    },
  };
  public active:any = { 
    delay: 0,
    duration: 1000,
    mobile: false,
    easing: 'ease-in-out',
    distance: '30px',
    origin: 'bottom',
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
  };
  public activeData:any = { 
    delay: 0,
    duration: 1500,
    mobile: false,
    easing: 'ease-out',
    rotate: {
      x: 140,
      y: 0,
      z: 0
    },
  };
  public nzbanner:any = { 
    delay: 0,
    duration: 1300,
    mobile: false,
    easing: 'ease-out',
    rotate: {
      x: 0,
      y: -50,
      z: 0
    },
  };
}

