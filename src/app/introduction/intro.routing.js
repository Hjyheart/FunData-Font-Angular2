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
 * Created by hongjiayong on 2017/3/8.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var intro_component_1 = require("./intro.component");
var routes = [
    {
        path: 'introduction',
        component: intro_component_1.IntroComponent
    },
];
var IntroRoutingModule = (function () {
    function IntroRoutingModule() {
    }
    IntroRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroRoutingModule);
    return IntroRoutingModule;
}());
exports.IntroRoutingModule = IntroRoutingModule;
//# sourceMappingURL=intro.routing.js.map