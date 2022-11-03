"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var api_1 = require("src/app/config/api");
var operators_1 = require("rxjs/operators");
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.serach = new rxjs_1.BehaviorSubject("");
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/products')
            .pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    ProductService.prototype.deleteProducts = function (_id) {
        return this.http["delete"]("http://localhost:3000/products/" + _id)
            .pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    ProductService.prototype.createProduct = function (productBody) {
        console.log('data', productBody);
        return this.http.post(api_1.productsUrl, productBody).pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    ProductService.prototype.updateProduct = function (id, body) {
        return this.http.post("http://localhost:3000/products/updateProduct/" + id, body);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
