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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Constants_1 = require("../util/Constants");
var Observable_1 = require("rxjs/Observable");
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var ng2_interceptors_1 = require("ng2-interceptors");
var PullRequestService = (function () {
    function PullRequestService(http) {
        this.http = http;
    }
    PullRequestService.prototype.mergePullRequest = function (pullRequestId, tag) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.post("" + Constants_1.Constants.Urls['mergePullRequest'], "pullRequestId=" + pullRequestId + "&tag=" + tag, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('PullRequestService->mergePullRequest', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService.prototype.rejectPullRequest = function (pullRequestId) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.post("" + Constants_1.Constants.Urls['rejectPullRequest'], "pullRequestId=" + pullRequestId, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('PullRequestService->rejectPullRequest', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService.prototype.createPullRequest = function (pullRequest) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.post(Constants_1.Constants.ServerHost + "/pullrequest/newPullRequest", "datasetId=" + pullRequest.datasetId + "&fileUrl=" + pullRequest.fileUrl + "&description=" + pullRequest.pullDescription, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body.code);
            }, function (err) {
                console.log('PullRequestService->createPullRequest', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService.prototype.getUserPullRequests = function (curPage, datasetId) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.get(Constants_1.Constants.Urls['getAllPullRequests'] + "?datasetId=" + datasetId + "&curPage=" + curPage, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body);
            }, function (err) {
                console.log('PullRequestService->getUserDatasets', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService.prototype.getPullRequestDetail = function (pullRequestId) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.get(Constants_1.Constants.Urls['getPullRequestDetail'] + "?pullRequestId=" + pullRequestId, {
                headers: headers,
                withCredentials: true
            })
                .map(function (res) {
                var detail = res.json().detail;
                // let columns = detail.columns;
                // let new_limits = [];
                // for (let i = 0; i < detail.limits.length; i++) {
                //     let temp = {};
                //     for(let t in detail.limits[i]) {
                //         if (detail.limits[i].hasOwnProperty(t)) {
                //             temp[Constants.Restricts[columns[i].colType][parseInt(t)]] = detail.limits[i][t];
                //         }
                //     }
                //     new_limits.push(temp);
                // }
                // detail.limits = new_limits;
                return detail;
            })
                .subscribe(function (body) {
                observer.next(body);
            }, function (err) {
                console.log('PullRequestService->getUserDatasets', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService.prototype.getAllPullRequests = function (curPage, datasetId) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', ng2_cookies_1.Cookie.get('authorization'));
        return new Observable_1.Observable(function (observer) {
            _this.http.get(Constants_1.Constants.Urls['getAllPullRequests'] + "?datasetId=" + datasetId + "&curPage=" + curPage, { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (body) {
                observer.next(body);
            }, function (err) {
                console.log('PullRequestService->getAllPullRequests', err);
                observer.next('-1');
            });
        });
    };
    PullRequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_interceptors_1.InterceptorService])
    ], PullRequestService);
    return PullRequestService;
}());
exports.PullRequestService = PullRequestService;
//# sourceMappingURL=PullRequestService.js.map