import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { ShareModule } from 'src/app/share/share.module';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { DetailActionComponent } from './detail-action/detail-action.component';
import { UserArticleComponent } from './detail-user/user-article/user-article.component';
import { UserCartComponent } from './detail-user/user-cart/user-cart.component';


@NgModule({
  declarations: [BlogDetailsComponent, DetailUserComponent, DetailBlogComponent, DetailActionComponent, UserArticleComponent, UserCartComponent],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    ShareModule
  ]
})
export class BlogDetailsModule { }
