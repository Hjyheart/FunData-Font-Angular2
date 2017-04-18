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
 * Created by hongjiayong on 2017/4/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpBaseService_1 = require("./HttpBaseService");
var Constants_1 = require("../util/Constants");
var Observable_1 = require("rxjs/Observable");
var DatasetService = (function (_super) {
    __extends(DatasetService, _super);
    function DatasetService(http) {
        _super.call(this);
        this.http = http;
    }
    DatasetService.prototype.createDataset = function (dataset) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            JSON.stringify(dataset);
            _this.http.post(Constants_1.Constants.ServerHost + "/dataset/createDataset", "ds_name=" + dataset.name + "&ds_desc=" + dataset.ds_des + "&format_desc=" + dataset.format_des + "&columns=" + JSON.stringify(dataset.columns), { headers: _this.headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('DatasetService->createDataset', err);
                observer.next('-1');
            });
        });
    };
    DatasetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DatasetService);
    return DatasetService;
}(HttpBaseService_1.HttpBaseService));
exports.DatasetService = DatasetService;
//# sourceMappingURL=DatasetService.js.map