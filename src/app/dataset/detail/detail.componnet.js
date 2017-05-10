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
var router_1 = require("@angular/router");
var CurrentPageService_1 = require("../../services/CurrentPageService");
var DatasetService_1 = require("../../services/DatasetService");
var Dataset_1 = require("../../models/Dataset");
var UploadBaseClass_1 = require("../../baseclasses/UploadBaseClass");
var QiniuUploadService_1 = require("../../services/QiniuUploadService");
var PullRequestService_1 = require("../../services/PullRequestService");
var PullRequest_1 = require("../../models/PullRequest");
var DatasetDetailComponent = (function (_super) {
    __extends(DatasetDetailComponent, _super);
    function DatasetDetailComponent(route, router, renderer, qiniuUploadService, datasetService, currentPage, pullRequestService) {
        _super.call(this);
        this.route = route;
        this.router = router;
        this.renderer = renderer;
        this.qiniuUploadService = qiniuUploadService;
        this.datasetService = datasetService;
        this.currentPage = currentPage;
        this.pullRequestService = pullRequestService;
        this.dataset = new Dataset_1.Dataset();
        this.pullRequest = new PullRequest_1.PullRequest();
    }
    DatasetDetailComponent.prototype.loaderControl = function () {
        //TODO add upload wait sign
    };
    DatasetDetailComponent.prototype.newPullRequest = function () {
        this.qiniuUploader.start();
    };
    DatasetDetailComponent.prototype.upload = function () {
        this.pullRequest.datasetId = this.dataset.id;
        this.qiniuUploader = this.qiniuUploadService.getDataUploader(this.pullRequestService, this.pullRequestService.createPullRequest, this.pullRequest, this, this.loaderControl);
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    };
    DatasetDetailComponent.prototype.download = function () {
        window.location.href = this.dataset.url;
    };
    DatasetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataset_id = +this.route.snapshot.params['id'];
        this.datasetService.getDatasetDetail(dataset_id)
            .subscribe(function (res) {
            _this.dataset = res.detail.datasetInfo;
            _this.dataset.columns = res.detail.columns;
            _this.dataset.url = res.detail.url;
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
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, core_1.Renderer, QiniuUploadService_1.QiniuUploadService, DatasetService_1.DatasetService, CurrentPageService_1.CurrentPageService, PullRequestService_1.PullRequestService])
    ], DatasetDetailComponent);
    return DatasetDetailComponent;
}(UploadBaseClass_1.UploadBaseClass));
exports.DatasetDetailComponent = DatasetDetailComponent;
//# sourceMappingURL=detail.componnet.js.map