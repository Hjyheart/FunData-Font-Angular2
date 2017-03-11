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
var profile_component_1 = require("./profile/profile.component");
var Dataset_component_1 = require("./dataset/Dataset.component");
var competition_component_1 = require("./competition/competition.component");
var course_component_1 = require("./course/course.component");
var dashboard_component_1 = require("./dashboard.component");
var AuthorizeGuard_1 = require("../services/AuthorizeGuard");
var DashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [AuthorizeGuard_1.AuthorizeGuard],
        children: [
            {
                path: 'profile',
                component: profile_component_1.ProfileComponent
            },
            {
                path: 'dataset',
                component: Dataset_component_1.DatasetComponent
            },
            {
                path: 'competition',
                component: competition_component_1.CompetitionComponent
            },
            {
                path: 'course',
                component: course_component_1.CourseComponent
            }
        ]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(DashboardRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard.routing.js.map