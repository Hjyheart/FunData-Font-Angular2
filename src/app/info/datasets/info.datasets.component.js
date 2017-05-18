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
 * Created by hongjiayong on 2017/4/25.
 */
var core_1 = require('@angular/core');
var CurrentPageService_1 = require("../../services/CurrentPageService");
var DatasetService_1 = require("../../services/DatasetService");
var Dataset_1 = require("../../models/Dataset");
var PageableBaseClass_1 = require("../../baseclasses/PageableBaseClass");
var router_1 = require("@angular/router");
var InfoDatasetsComponent = (function (_super) {
    __extends(InfoDatasetsComponent, _super);
    function InfoDatasetsComponent(currentPageService, datasetService, routerActive, router) {
        _super.call(this, datasetService.getUserDatasets, 'datasets', datasetService);
        this.currentPageService = currentPageService;
        this.datasetService = datasetService;
        this.routerActive = routerActive;
        this.router = router;
        this.chooseDataset = new Dataset_1.Dataset();
        this.exp = [];
        this.exps = [];
    }
    Object.defineProperty(InfoDatasetsComponent.prototype, "datasets", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    InfoDatasetsComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.currentPageService.currentPage = 'infoDatasets';
        this.exp = [];
        this.exps = [];
    };
    //TODO: 获取被选中要进行约束管理数据集的信息
    InfoDatasetsComponent.prototype.getChooseDataset = function (id) {
        var _this = this;
        this.datasetService.getDatasetDetail(id)
            .subscribe(function (res) {
            _this.chooseDataset = res.detail.datasetInfo;
            _this.chooseDataset.tables = res.detail.tables;
            _this.chooseDataset.url = res.detail.url;
        });
    };
    InfoDatasetsComponent.prototype.restrictEnding = function () {
        this.chooseDataset = new Dataset_1.Dataset();
    };
    InfoDatasetsComponent.prototype.putExp = function (str) {
        this.exp.push(str);
    };
    InfoDatasetsComponent.prototype.deleteExp = function () {
        this.exp.pop();
    };
    InfoDatasetsComponent.prototype.addExp = function () {
        var e = '';
        this.exp.forEach(function (s) { return e += s; });
        this.exps.push(e);
        this.exp = [];
    };
    InfoDatasetsComponent.prototype.deleteConfirmExp = function () {
        this.exps.pop();
    };
    InfoDatasetsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-info-datasets',
            templateUrl: 'info.datasets.component.html',
            styleUrls: ['../../main.css', 'info.datasets.component.css'],
            providers: [router_1.RouterLinkActive]
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService, router_1.RouterLinkActive, router_1.Router])
    ], InfoDatasetsComponent);
    return InfoDatasetsComponent;
}(PageableBaseClass_1.PageableBaseClass));
exports.InfoDatasetsComponent = InfoDatasetsComponent;
//# sourceMappingURL=info.datasets.component.js.map