"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService) {
        this.adminService = adminService;
        this.isedit = false;
        this.formdata = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            phonenumber: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
        this.listOfData = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AdminComponent.prototype.loadData = function () {
        var _this = this;
        this.listOfData = [];
        this.adminService.getData().subscribe(function (res) {
            Object.values(res).forEach(function (datafromdb) {
                _this.listOfData.push(datafromdb);
            });
        });
    };
    AdminComponent.prototype.onCancel = function () {
        this.formdata.reset();
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listOfData.push(this.formdata.value);
        this.adminService.postData(this.formdata.value).subscribe(function (res) {
            if (res && res.status && res.data) {
                console.log('post response', res);
            }
            _this.formdata.reset();
        });
    };
    AdminComponent.prototype.onEdit = function (index) {
        this.isedit = true;
        this.formdata.patchValue(this.listOfData[index]);
        this.indexselectedtoEdit = index;
    };
    AdminComponent.prototype.onDelete = function (data) {
        this.adminService.deleteData(data.username).subscribe(function (res) {
            console.log(res);
        });
    };
    AdminComponent.prototype.onUpdate = function () {
        var _this = this;
        this.adminService.modifyData(this.formdata.value, this.listOfData[this.indexselectedtoEdit]['_id']).subscribe(function (res) {
            _this.loadData();
            _this.isedit = false;
            _this.formdata.reset();
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
