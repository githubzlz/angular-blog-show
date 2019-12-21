import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { IndexModule } from '../components/index/index.module';
import { BlogDetailsModule } from '../components/blog-details/blog-details.module';



@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    IndexModule,
    BlogDetailsModule
  ]
})
export class PagesModule { }
