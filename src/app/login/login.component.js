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
 * Created by hongjiayong on 2017/3/9.
 */
var core_1 = require('@angular/core');
var AuthorizeService_1 = require("../services/AuthorizeService");
var router_1 = require("@angular/router");
var CurrentPageService_1 = require("../services/CurrentPageService");
var LoginComponent = (function () {
    function LoginComponent(authorizeService, router, currentPageService) {
        this.authorizeService = authorizeService;
        this.router = router;
        this.currentPageService = currentPageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.currentPageService.currentPage = 'login';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authorizeService.login(this.email, this.pwd)
            .subscribe(function (status) {
            if (status === '200') {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [AuthorizeService_1.AuthorizeService, router_1.Router, CurrentPageService_1.CurrentPageService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map