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
 * Created by hongjiayong on 2017/3/9.
 */
var core_1 = require('@angular/core');
var BarComponent = (function () {
    function BarComponent() {
        this.siderBarState = 'active';
    }
    BarComponent.prototype.ngOnInit = function () {
    };
    BarComponent.prototype.controlSiderBar = function () {
        if (this.siderBarState === 'inactive') {
            this.siderBarState = 'active';
        }
        else {
            this.siderBarState = 'inactive';
        }
    };
    BarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-bar',
            templateUrl: 'bar.component.html',
            styleUrls: ['../dashboard.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('inactive', core_1.style({
                        display: 'none',
                        opacity: '0',
                    })),
                    core_1.state('active', core_1.style({
                        display: 'block',
                        opacity: '1'
                    })),
                    core_1.transition('inactive => active', core_1.animate('200ms ease-in')),
                    core_1.transition('active => inactive', core_1.animate('200ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BarComponent);
    return BarComponent;
}());
exports.BarComponent = BarComponent;
//# sourceMappingURL=bar.component.js.map