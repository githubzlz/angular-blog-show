import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';


const routes: Routes = [
  {
    path:'index',component:IndexComponent
  },{
    path:'blogdetails',component:BlogDetailsComponent
  },{
    path:'**',component:IndexComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
