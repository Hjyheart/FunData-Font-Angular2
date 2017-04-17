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
 * Created by hongjiayong on 2017/4/11.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var CurrentPageService_1 = require("../services/CurrentPageService");
var HeaderComponent = (function () {
    function HeaderComponent(currentPage, route, router, common) {
        this.currentPage = currentPage;
        this.route = route;
        this.router = router;
        this.common = common;
        this.navDiv = 'none';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.clearStyle();
        console.log(this.route.url);
        console.log(this.router.url);
    };
    HeaderComponent.prototype.clearStyle = function () {
        this.datasetStyle = 'nav-item';
        this.competitionStyle = 'nav-item';
        this.shopStyle = 'nav-item';
        this.courseStyle = 'nav-item';
    };
    HeaderComponent.prototype.focusOn = function (name) {
        this.clearStyle();
        if (name == 'com') {
            this.competitionStyle = 'nav-item active';
        }
        else if (name == 'data') {
            this.datasetStyle = 'nav-item active';
        }
        else if (name == 'shop') {
            this.shopStyle = 'nav-item active';
        }
        else if (name == 'course') {
            this.courseStyle = 'nav-item active';
        }
    };
    HeaderComponent.prototype.showNav = function () {
        this.navDiv = (this.navDiv === 'none') ? 'block' : 'none';
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css', '../main.css']
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, router_1.ActivatedRoute, router_1.Router, common_1.CommonModule])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map