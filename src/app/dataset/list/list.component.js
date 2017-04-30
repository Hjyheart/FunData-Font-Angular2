"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var CurrentPageService_1 = require("../../services/CurrentPageService");
var DatasetService_1 = require("../../services/DatasetService");
var PageableBaseClass_1 = require("../../baseclasses/PageableBaseClass");
var DatasetListComponent = (function (_super) {
    __extends(DatasetListComponent, _super);
    function DatasetListComponent(currentPageService, datasetService) {
        _super.call(this, datasetService.getAllDatasets, 'datasets', datasetService);
        this.currentPageService = currentPageService;
        this.datasetService = datasetService;
    }
    DatasetListComponent.prototype.ngOnInit = function () {
        this.hrWidth = '0px';
        this.currentPageService.currentPage = 'dataset';
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
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService])
    ], DatasetListComponent);
    return DatasetListComponent;
}(PageableBaseClass_1.PageableBaseClass));
exports.DatasetListComponent = DatasetListComponent;
//# sourceMappingURL=list.component.js.map