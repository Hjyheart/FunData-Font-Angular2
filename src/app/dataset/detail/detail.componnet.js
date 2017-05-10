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
var router_1 = require("@angular/router");
var CurrentPageService_1 = require("../../services/CurrentPageService");
var DatasetService_1 = require("../../services/DatasetService");
var DatasetDetailComponent = (function () {
    function DatasetDetailComponent(route, router, datasetService, currentPage) {
        this.route = route;
        this.router = router;
        this.datasetService = datasetService;
        this.currentPage = currentPage;
    }
    DatasetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.route.snapshot.params['id']);
        this.route.parent.params.subscribe(function (params) {
            var dataset_id = +params["id"];
            _this.datasetService.getDatasetDetail(dataset_id)
                .subscribe(function (res) {
                _this.dataset = res.detail.datasetInfo;
                _this.dataset.columns = res.detail.columns;
            });
        });
        this.currentPage.currentPage = 'dataset';
    };
    DatasetDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dataset-detail',
            templateUrl: 'detail.component.html',
            styleUrls: ['detail.component.css', '../../main.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, DatasetService_1.DatasetService, CurrentPageService_1.CurrentPageService])
    ], DatasetDetailComponent);
    return DatasetDetailComponent;
}());
exports.DatasetDetailComponent = DatasetDetailComponent;
//# sourceMappingURL=detail.componnet.js.map