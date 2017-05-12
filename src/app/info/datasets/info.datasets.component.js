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
var PageableBaseClass_1 = require("../../baseclasses/PageableBaseClass");
var router_1 = require("@angular/router");
var info_dataset_pull_component_1 = require("./pull/info.dataset.pull.component");
var PullRequestService_1 = require("../../services/PullRequestService");
var InfoDatasetsComponent = (function (_super) {
    __extends(InfoDatasetsComponent, _super);
    function InfoDatasetsComponent(currentPageService, datasetService, pullRequestService, routerActive, componentFactoryResolver, viewContainerRef, router) {
        _super.call(this, datasetService.getUserDatasets, 'datasets', datasetService);
        this.currentPageService = currentPageService;
        this.datasetService = datasetService;
        this.pullRequestService = pullRequestService;
        this.routerActive = routerActive;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
    }
    Object.defineProperty(InfoDatasetsComponent.prototype, "datasets", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    InfoDatasetsComponent.prototype.ngOnInit = function () {
        this.currentPageService.currentPage = 'infoDatasets';
    };
    InfoDatasetsComponent.prototype.show = function (id) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(info_dataset_pull_component_1.PullComponent);
        var instance = this.viewContainerRef.createComponent(factory).instance;
        instance.constructor.bind(this)(this.pullRequestService, id);
    };
    InfoDatasetsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-info-datasets',
            templateUrl: 'info.datasets.component.html',
            styleUrls: ['../../main.css', 'info.datasets.component.css'],
            providers: [router_1.RouterLinkActive]
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService, PullRequestService_1.PullRequestService, router_1.RouterLinkActive, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, router_1.Router])
    ], InfoDatasetsComponent);
    return InfoDatasetsComponent;
}(PageableBaseClass_1.PageableBaseClass));
exports.InfoDatasetsComponent = InfoDatasetsComponent;
//# sourceMappingURL=info.datasets.component.js.map