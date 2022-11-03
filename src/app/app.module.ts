import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CustomersComponent } from './customers/customers.component';
import { AdminComponent } from './admin/admin.component';
import { AddnewComponent } from './addnew/addnew.component';
import { AboutComponent } from './about/about.component';
import { MenuCartComponent } from './menu-cart/menu-cart.component';
import { CartComponent } from './menu-cart/cart/cart.component';
import { ProductListComponent } from './menu-cart/product-list/product-list.component';
import { CartItemComponent } from './menu-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './menu-cart/product-list/product-item/product-item.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { SearchPipe } from './Pipes/search.pipe';
import { FilterComponent } from './filter/filter.component';
import { AdminPipe } from './Pipes/admin.pipe';
import { AdminMaintainanceComponent } from './admin-maintainance/admin-maintainance.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    CustomersComponent,
    AdminComponent,
    AddnewComponent,
    AboutComponent,
    MenuCartComponent,
    CartComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    FilterPipe,
    AdminloginComponent,
    AdminregisterComponent,
    SearchPipe,
    FilterComponent,
    AdminPipe,
    AdminMaintainanceComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
