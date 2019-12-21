import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/services/index/index.service';
import { PageInfo } from 'src/app/entitys/common/PageInfo';

@Component({
  selector: 'app-artical-main',
  templateUrl: './artical-main.component.html',
  styleUrls: ['./artical-main.component.css']
})
export class ArticalMainComponent implements OnInit {
  
  constructor(public indexService:IndexService) { 
    this.pageInfo = indexService.getIndexList('java',this.pageInfo);
  }

  public pageInfo:PageInfo = {
    pageSize:10,
    pageNum:2,
    total:20,
    pages:2,
    list:[],
  };
  ngOnInit() {
  }
  
}
