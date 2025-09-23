import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './_layouts/admin-layout/admin-layout';
import { Category } from './admin-components/category/category';
import { MainLayout } from './_layouts/main-layout/main-layout';
import { Home } from './main-components/home/home';
import { Product } from './admin-components/product/product';

const routes: Routes = [
//Admin Routes
  {path:'admin',component:AdminLayout,
    children:[
      {path:'category',component:Category},
      {path:'product',component:Product}
    ]},

//Main Routes
{path:'',component:MainLayout,
  children:[
    {path:'',component:Home}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
