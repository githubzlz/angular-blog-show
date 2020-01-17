import { Component, OnInit } from '@angular/core';
import * as ScrollReveal from 'src/assets/js/scrollReveal.js';
declare var ScrollReveal: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public sr: ScrollReveal = new ScrollReveal({reset: true});
  public maindata: any = {
    delay: 0,
    duration: 1000,
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

  public tilteList: any = [
    {
      title: '首页',
      children: [
        {
          title: '网站首页',
          url: '/index'
        }, {
          title: '网站地图',
          url: 'http://www.baidu.com'
        }, {
          title: '首页导航3',
          url: 'http://www.baidu.com'
        }
      ],
    }, {
      title: '详情页面',
      children: [
        {
          title: '博客详情',
          url: '/blogdetails'
        }, {
          title: '详情2',
          url: 'http://www.baidu.com'
        }, {
          title: '详情3',
          url: 'http://www.baidu.com'
        }
      ],
    }, {
      title: '测试页面',
      url: 'http://www.baidu.com',
      children: [
        {
          title: '测试页面1',
          url: 'http://www.baidu.com'
        }, {
          title: '测试页面2',
          url: 'http://www.baidu.com'
        }, {
          title: '测试页面3',
          url: 'http://www.baidu.com'
        }
      ],
    }, {
      title: '分享页面',
      url: 'http://www.baidu.com',
      children: [
        {
          title: '首页导航1',
          url: 'http://www.baidu.com'
        }, {
          title: '首页导航2',
          url: 'http://www.baidu.com'
        }, {
          title: '首页导航3',
          url: 'http://www.baidu.com'
        }
      ],
    }, {
      title: '下载页面',
      url: 'http://www.baidu.com',
      children: [
        {
          title: '首页导航1',
          url: 'http://www.baidu.com'
        }, {
          title: '首页导航2',
          url: 'http://www.baidu.com'
        }, {
          title: '首页导航3',
          url: 'http://www.baidu.com'
        }
      ],
    },
  ];
  public login: any = {
    login: true,
    notlogin: false
  };
  ngOnInit(): void {

  }

}
