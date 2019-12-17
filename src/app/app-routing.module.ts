import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'index',loadChildren:'src/app/components/index/index.module#IndexModule'
  },{
    path:'**',loadChildren:'src/app/components/index/index.module#IndexModule'
  }];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
