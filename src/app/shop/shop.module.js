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
 * Created by hongjiayong on 2017/3/22.
 */
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var shop_component_1 = require("./shop.component");
var shop_routing_module_1 = require("./shop.routing.module");
var ShopModule = (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                shop_routing_module_1.ShopRoutingModule
            ],
            declarations: [
                shop_component_1.ShopComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ShopModule);
    return ShopModule;
}());
exports.ShopModule = ShopModule;
//# sourceMappingURL=shop.module.js.map