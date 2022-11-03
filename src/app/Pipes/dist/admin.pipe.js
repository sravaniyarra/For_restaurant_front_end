"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminPipe = void 0;
var core_1 = require("@angular/core");
var AdminPipe = /** @class */ (function () {
    function AdminPipe() {
    }
    AdminPipe.prototype.transform = function (listofdata, searchValue) {
        if (!listofdata || !searchValue) {
            return listofdata;
        }
        return listofdata.filter(function (customer) { var _a; return (_a = customer.username) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase()); });
    };
    AdminPipe = __decorate([
        core_1.Pipe({
            name: 'admin'
        })
    ], AdminPipe);
    return AdminPipe;
}());
exports.AdminPipe = AdminPipe;
