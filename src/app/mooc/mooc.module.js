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
var list_component_1 = require("./list/list.component");
var mooc_component_1 = require("./mooc.component");
var detail_component_1 = require("./detail/detail.component");
var mooc_routing_module_1 = require("./mooc.routing.module");
var MoocModule = (function () {
    function MoocModule() {
    }
    MoocModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                mooc_routing_module_1.MoocRoutingModule
            ],
            declarations: [
                mooc_component_1.MoocComponent,
                list_component_1.MoocListComponent,
                detail_component_1.MoocDetailComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], MoocModule);
    return MoocModule;
}());
exports.MoocModule = MoocModule;
//# sourceMappingURL=mooc.module.js.map