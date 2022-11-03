"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var about_component_1 = require("./about/about.component");
var admin_component_1 = require("./admin/admin.component");
var addnew_component_1 = require("./addnew/addnew.component");
var customers_component_1 = require("./customers/customers.component");
var menu_cart_component_1 = require("./menu-cart/menu-cart.component");
var cart_component_1 = require("./menu-cart/cart/cart.component");
var product_list_component_1 = require("./menu-cart/product-list/product-list.component");
var adminlogin_component_1 = require("./admin/adminlogin/adminlogin.component");
var adminregister_component_1 = require("./admin/adminregister/adminregister.component");
var filter_component_1 = require("./filter/filter.component");
var admin_maintainance_component_1 = require("./admin-maintainance/admin-maintainance.component");
var routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: login_component_1.LoginComponent
    },
    {
        path: 'register', component: register_component_1.RegisterComponent
    },
    {
        path: 'sidebar', component: sidebar_component_1.SidebarComponent
    },
    {
        path: 'about', component: about_component_1.AboutComponent
    },
    {
        path: 'admin', component: admin_component_1.AdminComponent
    },
    {
        path: 'addnew', component: addnew_component_1.AddnewComponent
    },
    {
        path: 'customer', component: customers_component_1.CustomersComponent
    },
    {
        path: 'menu-cart', component: menu_cart_component_1.MenuCartComponent
    },
    {
        path: 'filter', component: filter_component_1.FilterComponent
    },
    {
        path: 'cart', component: cart_component_1.CartComponent
    },
    {
        path: 'product-list', component: product_list_component_1.ProductListComponent
    },
    {
        path: 'adminlogin', component: adminlogin_component_1.AdminloginComponent
    },
    {
        path: 'adminregister', component: adminregister_component_1.AdminregisterComponent
    },
    {
        path: 'adminmain', component: admin_maintainance_component_1.AdminMaintainanceComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
