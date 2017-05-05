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
 * Created by hongjiayong on 2017/4/12.
 */
var core_1 = require('@angular/core');
var CurrentPageService_1 = require("../../services/CurrentPageService");
var Dataset_1 = require("../../models/Dataset");
var Column_1 = require("../../models/Column");
var DatasetService_1 = require("../../services/DatasetService");
var router_1 = require("@angular/router");
var QiniuUploadService_1 = require("../../services/QiniuUploadService");
var DatasetCreateComponent = (function () {
    function DatasetCreateComponent(renderer, currentPage, datasetService, qiniuUploadService, router) {
        this.renderer = renderer;
        this.currentPage = currentPage;
        this.datasetService = datasetService;
        this.qiniuUploadService = qiniuUploadService;
        this.router = router;
        this.dataset = new Dataset_1.Dataset();
        this.qiniuUploader = null;
    }
    DatasetCreateComponent.prototype.loaderControl = function (res) {
        var _this = this;
        if (res === '200') {
            this.loaderClass = 'loader loader-success';
            this.loaderText = '创建成功';
            setTimeout(function () {
                _this.router.navigate(['/dataset/list']);
            }, 10);
        }
        else if (res === '-1') {
            this.loaderClass = 'loader loader-fail';
            this.loaderText = '创建失败';
            setTimeout(function () {
                _this.loaderClass = 'loader loader-default';
                _this.loaderText = '等待中。。。';
            }, 10);
        }
    };
    DatasetCreateComponent.prototype.ngOnInit = function () {
        this.attrFlag = false;
        this.keyName = '';
        this.keyType = 0;
        this.loaderClass = 'loader loader-default';
        this.loaderText = '等待中。。。';
        this.currentPage.currentPage = 'dataset';
    };
    DatasetCreateComponent.prototype.upload = function () {
        // this.qiniuUploadService.getStaticUploader(this.datasetService, this.datasetService.createDataset, this.dataset, this, this.loaderControl)
        //     .subscribe((uploader: any) => {
        //         this.qiniuUploader = uploader;
        //     });
        this.qiniuUploader = this.qiniuUploadService.getStaticUploader(this.datasetService, this.datasetService.createDataset, this.dataset, this, this.loaderControl);
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    DatasetCreateComponent.prototype.onFiles = function () {
        var file = this._fileUpload.nativeElement.files[0];
        this.qiniuUploader.addFile(file);
    };
    DatasetCreateComponent.prototype.onSubmit = function (form) {
        this.loaderClass = 'loader loader-default is-active';
        if (this._fileUpload.nativeElement.files[0] === undefined) {
            this.datasetService.createDataset(this.dataset)
                .subscribe(this.loaderControl.bind(this));
        }
        else {
            this.qiniuUploader.start();
        }
    };
    DatasetCreateComponent.prototype.addKey = function () {
        var type;
        if (this.keyType === 1) {
            type = 'String';
        }
        else if (this.keyType === 2) {
            type = 'Integer';
        }
        else if (this.keyType === 3) {
            type = 'Double';
        }
        else if (this.keyType === 4) {
            type = 'Char';
        }
        else {
            type = '';
        }
        this.dataset.columns.push(new Column_1.Column(this.keyName, type, []));
        this.keyName = '';
        this.keyType = 0;
    };
    __decorate([
        core_1.ViewChild('upfile'), 
        __metadata('design:type', core_1.ElementRef)
    ], DatasetCreateComponent.prototype, "_fileUpload", void 0);
    DatasetCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dataset-create',
            templateUrl: 'create.component.html',
            styleUrls: ['../../main.css', 'create.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService, QiniuUploadService_1.QiniuUploadService, router_1.Router])
    ], DatasetCreateComponent);
    return DatasetCreateComponent;
}());
exports.DatasetCreateComponent = DatasetCreateComponent;
//# sourceMappingURL=create.component.js.map