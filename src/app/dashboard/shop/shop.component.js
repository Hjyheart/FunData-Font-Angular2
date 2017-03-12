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
var AuthorizeService_1 = require("../../services/AuthorizeService");
var router_1 = require("@angular/router");
var ShopComponent = (function () {
    function ShopComponent(authorizeService, router) {
        this.authorizeService = authorizeService;
        this.router = router;
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ShopComponent.prototype, "isLogin", {
        get: function () {
            return this.authorizeService.isLogin;
        },
        enumerable: true,
        configurable: true
    });
    ShopComponent.prototype.logout = function () {
        var _this = this;
        this.authorizeService.logout()
            .subscribe(function (status) {
            if (status === '200') {
                _this.router.navigate(['/login']);
            }
        });
    };
    ShopComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-shop',
            templateUrl: 'shop.component.html',
            styleUrls: ['../dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [AuthorizeService_1.AuthorizeService, router_1.Router])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shop.component.js.map