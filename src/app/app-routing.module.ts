import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AddnewComponent } from './addnew/addnew.component';
import { CustomersComponent } from './customers/customers.component';
import { MenuCartComponent } from './menu-cart/menu-cart.component';

import { CartComponent } from './menu-cart/cart/cart.component';
import { ProductListComponent } from './menu-cart/product-list/product-list.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { FilterComponent } from './filter/filter.component';
import { AdminMaintainanceComponent } from './admin-maintainance/admin-maintainance.component';

const routes: Routes = [
  {
       path:'',redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'addnew',component:AddnewComponent
  },
  {
    path:'customer',component:CustomersComponent
  },
  {
    path:'menu-cart',component:MenuCartComponent
  },
  {
    path:'filter',component:FilterComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'product-list',component:ProductListComponent
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'adminregister',component:AdminregisterComponent
  },
  {
    path:'adminmain',component:AdminMaintainanceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
