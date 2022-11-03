"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminloginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
    }
    AdminloginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    AdminloginComponent.prototype.login = function () {
        var _this = this;
        this.http.get("http://localhost:3000/Admin-signup").subscribe(function (res) {
            var user = res.find(function (a) {
                return a.email === _this.loginForm.value.email && a.password === _this.loginForm.value.password;
            });
            if (user) {
                alert("Login Successfull");
                _this.loginForm.reset();
                _this.router.navigate(['adminmain']);
            }
            else {
                alert("User not found ");
            }
        });
    };
    AdminloginComponent = __decorate([
        core_1.Component({
            selector: 'app-adminlogin',
            templateUrl: './adminlogin.component.html',
            styleUrls: ['./adminlogin.component.css']
        })
    ], AdminloginComponent);
    return AdminloginComponent;
}());
exports.AdminloginComponent = AdminloginComponent;
