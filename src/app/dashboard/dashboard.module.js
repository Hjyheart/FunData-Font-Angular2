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
var platform_browser_1 = require('@angular/platform-browser');
var dashboard_component_1 = require("./dashboard.component");
var competition_component_1 = require("./competition/competition.component");
var course_component_1 = require("./course/course.component");
var Dataset_component_1 = require("./dataset/Dataset.component");
var profile_component_1 = require("./profile/profile.component");
var dashboard_routing_1 = require("./dashboard.routing");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var headerbar_component_1 = require("./headerbar/headerbar.component");
var footer_component_1 = require("./footer/footer.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dashboard_routing_1.DashboardRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                competition_component_1.CompetitionComponent,
                course_component_1.CourseComponent,
                Dataset_component_1.DatasetComponent,
                profile_component_1.ProfileComponent,
                sidebar_component_1.SideBarComponent,
                headerbar_component_1.HeaderComponent,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map