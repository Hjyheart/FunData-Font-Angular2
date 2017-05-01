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
var UploadService_1 = require("../../services/UploadService");
var QiniuUploadService_1 = require("../../services/QiniuUploadService");
var DatasetCreateComponent = (function () {
    function DatasetCreateComponent(currentPage, datasetService, uploadService, qiniuUploadService, router) {
        var _this = this;
        this.currentPage = currentPage;
        this.datasetService = datasetService;
        this.uploadService = uploadService;
        this.qiniuUploadService = qiniuUploadService;
        this.router = router;
        this.uploadProgress = 0;
        this.uploadInProgress = false;
        this.uploadSizeLimit = 3000000;
        // 输出事件
        this.pictureChange = new core_1.EventEmitter();
        this.onUpload = new core_1.EventEmitter();
        this.onUploadCompleted = new core_1.EventEmitter();
        this.picture = '';
        this.keys = new Array();
        this.qiniuUploader = null;
        //this.uploader = uploadService.getUploader(Constants.Urls["uploadCover"]);
        qiniuUploadService.getUploader()
            .subscribe(function (uploader) {
            _this.qiniuUploader = uploader;
        });
    }
    DatasetCreateComponent.prototype.ngOnInit = function () {
        this.datasetName = '';
        this.datasetDes = '';
        this.formatDes = '';
        this.attrFlag = false;
        this.keys = new Array();
        this.keyName = '';
        this.keyType = 0;
        this.loaderClass = 'loader loader-default';
        this.loaderText = '等待中。。。';
        this.currentPage.currentPage = 'dataset';
    };
    DatasetCreateComponent.prototype.uploadCover = function () {
    };
    DatasetCreateComponent.prototype.onSubmit = function (form) {
        var dataset = new Dataset_1.Dataset();
        dataset.name = this.datasetName;
        dataset.dsDescription = this.datasetDes;
        dataset.formatDescription = this.formatDes;
        dataset.columns = this.keys;
        this.qiniuUploader.start();
        // this.loaderClass = 'loader loader-default is-active';
        // this.uploadService.upload()
        //     .subscribe((res: string) => {
        //     dataset.coverUrl = res;
        //       this.datasetService.createDataset(dataset)
        //           .subscribe(
        //               res => {
        //                 if (res === '200'){
        //                   this.loaderClass = 'loader loader-success';
        //                   this.loaderText = '创建成功';
        //                   setTimeout( () => {
        //                     this.router.navigate(['/dataset/list']);
        //                   }, 1000);
        //                 }else if(res === '-1'){
        //                   this.loaderClass = 'loader loader-fail';
        //                   this.loaderText = '创建失败';
        //                   setTimeout(() => {
        //                     this.loaderClass = 'loader loader-default';
        //                     this.loaderText = '等待中。。。';
        //                   }, 1000);
        //                 }
        //               }
        //           );
        //     });
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
        this.keys.push(new Column_1.Column(this.keyName, type, []));
        this.keyName = '';
        this.keyType = 0;
        console.log(this.keys);
        // this.keyModal.nativeElement;
    };
    __decorate([
        core_1.ViewChild('fileUpload'), 
        __metadata('design:type', core_1.ElementRef)
    ], DatasetCreateComponent.prototype, "_fileUpload", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatasetCreateComponent.prototype, "uploadSizeLimit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatasetCreateComponent.prototype, "pictureChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatasetCreateComponent.prototype, "onUpload", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatasetCreateComponent.prototype, "onUploadCompleted", void 0);
    DatasetCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dataset-create',
            templateUrl: 'create.component.html',
            styleUrls: ['../../main.css', 'create.component.css']
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService, UploadService_1.UploadService, QiniuUploadService_1.QiniuUploadService, router_1.Router])
    ], DatasetCreateComponent);
    return DatasetCreateComponent;
}());
exports.DatasetCreateComponent = DatasetCreateComponent;
//# sourceMappingURL=create.component.js.map