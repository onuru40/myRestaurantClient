import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './_layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { MainLayout } from './_layouts/main-layout/main-layout';

const routes: Routes = [
//Admin Routes
  {path:'admin',component:AdminLayout,
    children:[
      {path:'category',component:Category}
    ]},

//Main Routes
{path:'',component:MainLayout}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
