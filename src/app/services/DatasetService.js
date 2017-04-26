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
 * Created by hongjiayong on 2017/4/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Constants_1 = require("../util/Constants");
var Observable_1 = require("rxjs/Observable");
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var DatasetService = (function () {
    function DatasetService(http) {
        this.http = http;
    }
    DatasetService.prototype.createDataset = function (dataset) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            JSON.stringify(dataset);
            _this.http.post(Constants_1.Constants.ServerHost + "/dataset/createDataset", "ds_name=" + dataset.name + "&ds_desc=" + dataset.dsDescription + "&format_desc=" + dataset.formatDescription + "&cover_url=" + dataset.coverUrl + "&columns=" + JSON.stringify(dataset.columns), { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('DatasetService->createDataset', err);
                observer.next('-1');
            });
        });
    };
    DatasetService.prototype.getUserDataset = function (curPage) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.get(Constants_1.Constants.ServerHost + "/dataset/getMyDataset?curPage=" + curPage, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body);
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
}());
exports.DatasetService = DatasetService;
//# sourceMappingURL=DatasetService.js.map