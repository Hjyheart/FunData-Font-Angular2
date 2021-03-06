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
 * Created by hongjiayong on 2017/5/2.
 */
var core_1 = require('@angular/core');
var CurrentPageService_1 = require("../services/CurrentPageService");
var router_1 = require("@angular/router");
var OthersComponent = (function () {
    function OthersComponent(route, router, currentPageService) {
        this.route = route;
        this.router = router;
        this.currentPageService = currentPageService;
    }
    OthersComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        console.log(this.id);
        this.currentPageService.currentPage = 'others';
    };
    OthersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'others-info',
            templateUrl: 'others.component.html',
            styleUrls: ['../main.css', 'others.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, CurrentPageService_1.CurrentPageService])
    ], OthersComponent);
    return OthersComponent;
}());
exports.OthersComponent = OthersComponent;
//# sourceMappingURL=others.component.js.map