"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(customersService) {
        this.customersService = customersService;
        this.isedit = false;
        this.formdata = new forms_1.FormGroup({
            username: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            phonenumber: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
        this.listOfData = [];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CustomersComponent.prototype.loadData = function () {
        var _this = this;
        this.listOfData = [];
        this.customersService.getData().subscribe(function (res) {
            Object.values(res).forEach(function (datafromdb) {
                _this.listOfData.push(datafromdb);
            });
        });
    };
    CustomersComponent.prototype.onCancel = function () {
        this.formdata.reset();
    };
    CustomersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listOfData.push(this.formdata.value);
        this.customersService.postData(this.formdata.value).subscribe(function (res) {
            if (res && res.status && res.data) {
                console.log('post response', res);
            }
            _this.formdata.reset();
        });
    };
    CustomersComponent.prototype.onEdit = function (index) {
        this.isedit = true;
        this.formdata.patchValue(this.listOfData[index]);
        this.indexselectedtoEdit = index;
    };
    CustomersComponent.prototype.onDelete = function (data) {
        var _this = this;
        this.customersService.deleteData(data.username).subscribe(function (res) {
            if (res && res.status && res.status === 'ok' && res.data) {
                _this.loadData();
            }
            else if (res && res.status && res.status === 'error') {
                console.log('Something went wrong');
            }
        });
    };
    CustomersComponent.prototype.onUpdate = function () {
        var _this = this;
        this.customersService.modifyData(this.formdata.value, this.listOfData[this.indexselectedtoEdit]['_id']).subscribe(function (res) {
            _this.loadData();
            _this.isedit = false;
            _this.formdata.reset();
        });
    };
    CustomersComponent = __decorate([
        core_1.Component({
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.css']
        })
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
