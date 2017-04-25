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
var RegisterComponent = (function () {
    function RegisterComponent(authorizeService, router, currentPageService) {
        this.authorizeService = authorizeService;
        this.router = router;
        this.currentPageService = currentPageService;
        this.nameEmpty = false;
        this.emailEmpty = false;
        this.pwdEmpty = false;
        this.repwdEmpty = false;
        this.pwdEqual = true;
        this.normal = 'form-group';
        this.error = 'form-group has-error has-feedback';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.currentPageService.currentPage = 'register';
        this.nameState = this.normal;
        this.emailState = this.normal;
        this.pwdState = this.normal;
        this.pwdConState = this.normal;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.name == '' || this.name == undefined) {
            this.nameState = this.error;
            return;
        }
        if (this.email == '' || this.email == undefined) {
            this.emailState = this.error;
            return;
        }
        if (this.pwd == '' || this.pwd == undefined) {
            this.pwdState = this.error;
            return;
        }
        if (this.pwd != this.repwd) {
            this.pwdState = this.error;
            return;
        }
        this.nameEmpty = this.name == '';
        this.emailEmpty = this.email == '';
        this.pwdEmpty = this.pwd == '';
        this.repwdEmpty = this.repwd == '';
        this.pwdEqual = this.pwd === this.repwd;
        if (this.nameEmpty || this.emailEmpty || this.pwdEmpty || this.repwdEmpty || !this.pwdEqual) {
            return;
        }
        this.authorizeService.register(this.email, this.name, this.pwd)
            .subscribe(function (status) {
            if (status == '200') {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.clearNameState = function () {
        this.nameState = this.normal;
    };
    RegisterComponent.prototype.clearEmailState = function () {
        this.emailState = this.normal;
    };
    RegisterComponent.prototype.clearPwdState = function () {
        this.pwdState = this.normal;
    };
    RegisterComponent.prototype.clearPwdConState = function () {
        this.pwdConState = this.normal;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css']
        }), 
        __metadata('design:paramtypes', [AuthorizeService_1.AuthorizeService, router_1.Router, CurrentPageService_1.CurrentPageService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map