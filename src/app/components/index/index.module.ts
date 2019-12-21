import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { BannerComponent } from './banner/banner.component';
import { ArticalMainComponent } from './artical-main/artical-main.component';
import { ArticalSideComponent } from './artical-side/artical-side.component';
import { RecommendComponent } from './artical-side/recommend/recommend.component';
import { ActiveComponent } from './artical-side/active/active.component';
import { WebInformationComponent } from './artical-side/web-information/web-information.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
  declarations: [
    IndexComponent,
    BannerComponent,
    ArticalMainComponent,
    ArticalSideComponent,
    RecommendComponent,
    ActiveComponent,
    WebInformationComponent,

  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ShareModule
  ]
})
export class IndexModule { }
