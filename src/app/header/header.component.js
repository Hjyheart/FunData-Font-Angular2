/**
 * Created by hongjiayong on 2017/4/11.
 */
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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var AuthorizeService_1 = require("../services/AuthorizeService");
var CurrentPageService_1 = require("../services/CurrentPageService");
var HeaderComponent = (function () {
    function HeaderComponent(authorizeService, currentPage, route, router) {
        this.authorizeService = authorizeService;
        this.currentPage = currentPage;
        this.route = route;
        this.router = router;
        this.navDiv = 'none';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.route.url);
        console.log(this.router.url);
    };
    HeaderComponent.prototype.showNav = function () {
        $('.dropdown-menu').css('display', 'block');
    };
    HeaderComponent.prototype.hideNav = function () {
        $('.dropdown-menu').css('display', 'none');
    };
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
        core_1.Component({
            moduleId: module.id,
            selector: 'my-header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css', '../main.css']
        }), 
        __metadata('design:paramtypes', [AuthorizeService_1.AuthorizeService, CurrentPageService_1.CurrentPageService, router_1.ActivatedRoute, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map