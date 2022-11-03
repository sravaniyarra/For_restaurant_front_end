"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var customers_component_1 = require("./customers/customers.component");
var admin_component_1 = require("./admin/admin.component");
var addnew_component_1 = require("./addnew/addnew.component");
var about_component_1 = require("./about/about.component");
var menu_cart_component_1 = require("./menu-cart/menu-cart.component");
var cart_component_1 = require("./menu-cart/cart/cart.component");
var product_list_component_1 = require("./menu-cart/product-list/product-list.component");
var cart_item_component_1 = require("./menu-cart/cart/cart-item/cart-item.component");
var product_item_component_1 = require("./menu-cart/product-list/product-item/product-item.component");
var filter_pipe_1 = require("./Pipes/filter.pipe");
var adminlogin_component_1 = require("./admin/adminlogin/adminlogin.component");
var adminregister_component_1 = require("./admin/adminregister/adminregister.component");
var search_pipe_1 = require("./Pipes/search.pipe");
var filter_component_1 = require("./filter/filter.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                sidebar_component_1.SidebarComponent,
                customers_component_1.CustomersComponent,
                admin_component_1.AdminComponent,
                addnew_component_1.AddnewComponent,
                about_component_1.AboutComponent,
                menu_cart_component_1.MenuCartComponent,
                cart_component_1.CartComponent,
                product_list_component_1.ProductListComponent,
                cart_item_component_1.CartItemComponent,
                product_item_component_1.ProductItemComponent,
                filter_pipe_1.FilterPipe,
                adminlogin_component_1.AdminloginComponent,
                adminregister_component_1.AdminregisterComponent,
                search_pipe_1.SearchPipe,
                filter_component_1.FilterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
