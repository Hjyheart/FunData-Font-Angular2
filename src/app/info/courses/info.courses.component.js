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
var core_1 = require('@angular/core');
var CurrentPageService_1 = require("../../services/CurrentPageService");
var InfoCoursesComponent = (function () {
    function InfoCoursesComponent(currentPageService) {
        this.currentPageService = currentPageService;
    }
    InfoCoursesComponent.prototype.ngOnInit = function () {
        this.currentPageService.currentPage = 'infoCourses';
    };
    InfoCoursesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'info.courses.component.html',
            styleUrls: ['../../main.css', 'info.courses.component.css']
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService])
    ], InfoCoursesComponent);
    return InfoCoursesComponent;
}());
exports.InfoCoursesComponent = InfoCoursesComponent;
//# sourceMappingURL=info.courses.component.js.map