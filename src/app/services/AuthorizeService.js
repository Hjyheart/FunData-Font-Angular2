/**
 * Created by huang on 17-3-9.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require("@angular/http");
var Constants_1 = require("../util/Constants");
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var Rx_1 = require("rxjs/Rx");
var HttpBaseService_1 = require("./HttpBaseService");
var AuthorizeService = (function (_super) {
    __extends(AuthorizeService, _super);
    function AuthorizeService(http) {
        _super.call(this);
        this.http = http;
    }
    AuthorizeService.prototype.canActivate = function () {
        return this.isLogin;
    };
    Object.defineProperty(AuthorizeService.prototype, "isLogin", {
        get: function () {
            return ng2_cookies_1.Cookie.get('authorization') !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthorizeService.prototype.login = function (email, pwd) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.http.get(Constants_1.Constants.ServerHost + "/authorize/login?email=" + email + "&pwd=" + pwd, { headers: _this.headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('AuthorizeService->login', err);
                observer.next('-1');
            });
        });
    };
    AuthorizeService.prototype.logout = function () {
        var _this = this;
        this.headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Rx_1.Observable(function (observer) {
            _this.http.post(Constants_1.Constants.ServerHost + "/authorize/logout", '', { headers: _this.headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                if (body.code === '200') {
                    ng2_cookies_1.Cookie.delete('authorization');
                }
                observer.next(body.code);
            }, function (err) {
                console.log('AuthorizeService->logout', err);
                observer.next('-1');
            });
        });
    };
    AuthorizeService.prototype.register = function (email, name, pwd) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.http.post(Constants_1.Constants.ServerHost + "/authorize/register", "email=" + email + "&name=" + name + "&pwd=" + pwd, { headers: _this.headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('AuthorizeService->register', err);
                observer.next('-1');
            });
        });
    };
    AuthorizeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthorizeService);
    return AuthorizeService;
}(HttpBaseService_1.HttpBaseService));
exports.AuthorizeService = AuthorizeService;
//# sourceMappingURL=AuthorizeService.js.map