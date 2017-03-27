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
var DatasetListComponent = (function () {
    function DatasetListComponent() {
        // 每页10个
        this.totalItems = 100;
        this.currentPage = 1;
    }
    DatasetListComponent.prototype.ngOnInit = function () {
        this.hrWidth = '0px';
    };
    DatasetListComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    DatasetListComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    DatasetListComponent.prototype.transition = function () {
        if (scrollY > 400) {
            this.hrWidth = '200px';
        }
    };
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DatasetListComponent.prototype, "transition", null);
    DatasetListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dataset-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css', '../../main.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatasetListComponent);
    return DatasetListComponent;
}());
exports.DatasetListComponent = DatasetListComponent;
//# sourceMappingURL=list.component.js.map