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
var DatasetCreateComponent = (function () {
    function DatasetCreateComponent(currentPage, datasetService) {
        this.currentPage = currentPage;
        this.datasetService = datasetService;
        this.keys = new Array();
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
        this.currentPage.currentPage = 'dataset';
    };
    DatasetCreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        console.log(this.keys);
        var dataset = new Dataset_1.Dataset();
        dataset.name = this.datasetName;
        dataset.dsDescription = this.datasetDes;
        dataset.formatDescription = this.formatDes;
        dataset.columns = this.keys;
        this.loaderClass = 'loader loader-default is-active';
        this.datasetService.createDataset(dataset)
            .subscribe(function (res) {
            if (res === '200') {
                _this.loaderClass = 'loader loader-default';
            }
            else if (res === '-1') {
                _this.loaderClass = 'loader loader-default';
            }
        });
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
    DatasetCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dataset-create',
            templateUrl: 'create.component.html',
            styleUrls: ['../../main.css', 'create.component.css']
        }), 
        __metadata('design:paramtypes', [CurrentPageService_1.CurrentPageService, DatasetService_1.DatasetService])
    ], DatasetCreateComponent);
    return DatasetCreateComponent;
}());
exports.DatasetCreateComponent = DatasetCreateComponent;
//# sourceMappingURL=create.component.js.map