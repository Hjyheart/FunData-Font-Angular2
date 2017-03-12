"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by hongjiayong on 2017/3/10.
 */
var core_1 = require('@angular/core');
<<<<<<< HEAD:src/app/dashboard/headerbar/headerbar.component.js
var AuthorizeService_1 = require("../../services/AuthorizeService");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(authorizeService, router) {
        this.authorizeService = authorizeService;
        this.router = router;
=======
var ShopComponent = (function () {
    function ShopComponent() {
>>>>>>> master:src/app/dashboard/shop/shop.component.js
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
<<<<<<< HEAD:src/app/dashboard/headerbar/headerbar.component.js
    Object.defineProperty(HeaderComponent.prototype, "isLogin", {
        get: function () {
            return this.authorizeService.isLogin;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authorizeService.logout()
            .subscribe(function (status) {
            if (status === '200') {
                _this.router.navigate(['/login']);
            }
        });
    };
    HeaderComponent = __decorate([
=======
    ShopComponent = __decorate([
>>>>>>> master:src/app/dashboard/shop/shop.component.js
        core_1.Component({
            moduleId: module.id,
            selector: 'my-shop',
            templateUrl: 'shop.component.html',
            styleUrls: ['../dashboard.component.css']
        }), 
<<<<<<< HEAD:src/app/dashboard/headerbar/headerbar.component.js
        __metadata('design:paramtypes', [AuthorizeService_1.AuthorizeService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
=======
        __metadata('design:paramtypes', [])
    ], ShopComponent);
    return ShopComponent;
>>>>>>> master:src/app/dashboard/shop/shop.component.js
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map