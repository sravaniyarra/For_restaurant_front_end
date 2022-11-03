"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, msg, cartService, wishlistService) {
        this.productService = productService;
        this.msg = msg;
        this.cartService = cartService;
        this.wishlistService = wishlistService;
        this.productList = [];
        this.wishlist = [];
        this.searchValue = "";
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.loadProducts();
        this.loadWishlist();
    };
    ProductListComponent.prototype.loadProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.productList = products;
            _this.filterCategory = products;
            console.log(_this.productList);
            _this.productList.forEach(function (a) {
                if (a.category === "Pizza") {
                    a.category = "Pizza Corner";
                }
                Object.assign(a, { quantity: 1, total: a.price });
            });
            console.log(_this.productList);
        });
    };
    ProductListComponent.prototype.loadWishlist = function () {
        var _this = this;
        this.wishlistService.getWishlist().subscribe(function (productIds) {
            _this.wishlist = productIds;
        });
    };
    ProductListComponent.prototype.AddToCart = function (item) {
        this.cartService.addtoCart(item);
    };
    // handleAddToWishlist() {
    //this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
    // this.addedToWishlist = true;
    //})
    //}
    // handleRemoveFromWishlist() {
    //  this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
    //  this.addedToWishlist = false;
    //})
    // }
    ProductListComponent.prototype.filter = function (category) {
        this.filterCategory = this.productList
            .filter(function (a) {
            if (a.category == category || category == '') {
                return a;
            }
        });
    };
    __decorate([
        core_1.Input()
    ], ProductListComponent.prototype, "productItem");
    __decorate([
        core_1.Input()
    ], ProductListComponent.prototype, "addedToWishlist");
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
