import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { BannerComponent } from './banner/banner.component';
import { PagesModule } from 'src/app/pages/pages.module';


@NgModule({
  declarations: [IndexComponent, BannerComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PagesModule
  ],
})
export class IndexModule { }
