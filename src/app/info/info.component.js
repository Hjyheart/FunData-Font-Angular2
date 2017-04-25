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
var CurrentPageService_1 = require("../services/CurrentPageService");
var InfoComponent = (function () {
    function InfoComponent(currentPageService) {
        this.currentPageService = currentPageService;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.nikename = '';
    };
    InfoComponent.prototype.edit = function () {
    };
    InfoComponent.prototype.edit = function () {
    };
    InfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'info.component.html',
            styleUrls: ['../main.css', 'info.component.css']
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map