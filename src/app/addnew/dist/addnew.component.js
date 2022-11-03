"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddnewComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddnewComponent = /** @class */ (function () {
    function AddnewComponent(productService) {
        this.productService = productService;
        this.formdata = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            category: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
            price: new forms_1.FormControl(''),
            imageUrl: new forms_1.FormControl('')
        });
        this.listOfData = [];
    }
    AddnewComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AddnewComponent.prototype.loadData = function () {
        var _this = this;
        this.listOfData = [];
        this.productService.getProducts().subscribe(function (res) {
            Object.values(res).forEach(function (datafromdb) {
                _this.listOfData.push(datafromdb);
            });
        });
    };
    AddnewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.listOfData.push(this.formdata.value);
        this.productService.createProduct(this.formdata.value).subscribe(function (res) {
            if (res && res.status && res.data) {
                console.log('post response', res);
            }
            _this.formdata.reset();
        });
    };
    AddnewComponent.prototype.onEdit = function (index) {
        this.isedit = true;
        this.formdata.patchValue(this.listOfData[index]);
        this.indexselectedtoEdit = index;
    };
    AddnewComponent.prototype.onDelete = function (data) {
        var _this = this;
        this.productService.deleteProducts(data.name).subscribe(function (data) {
            console.log(data);
            _this.loadData();
        });
    };
    AddnewComponent = __decorate([
        core_1.Component({
            selector: 'app-addnew',
            templateUrl: './addnew.component.html',
            styleUrls: ['./addnew.component.css']
        })
    ], AddnewComponent);
    return AddnewComponent;
}());
exports.AddnewComponent = AddnewComponent;
