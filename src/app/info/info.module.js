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
 * Created by hongjiayong on 2017/4/25.
 */
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var info_component_1 = require("./info.component");
var info_datasets_component_1 = require("./datasets/info.datasets.component");
var info_com_component_1 = require("./competitions/info.com.component");
var info_courses_component_1 = require("./courses/info.courses.component");
var info_overview_component_1 = require("./overview/info.overview.component");
var info_routing_module_1 = require("./info.routing.module");
var InfoModule = (function () {
    function InfoModule() {
    }
    InfoModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                http_1.HttpModule,
                common_1.CommonModule,
                info_routing_module_1.InfoRoutingModule
            ],
            declarations: [
                info_component_1.InfoComponent,
                info_datasets_component_1.InfoDatasetsComponent,
                info_com_component_1.InfoComComponent,
                info_courses_component_1.InfoCoursesComponent,
                info_overview_component_1.InfoOverviewComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], InfoModule);
    return InfoModule;
}());
exports.InfoModule = InfoModule;
//# sourceMappingURL=info.module.js.map