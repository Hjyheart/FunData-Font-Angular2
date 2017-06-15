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
var ng2_file_upload_1 = require('ng2-file-upload');
var Observable_1 = require("rxjs/Observable");
var ng2_interceptors_1 = require("ng2-interceptors");
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
        this.uploader = null;
    }
    UploadService.prototype.getUploader = function (url) {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: url,
            method: "POST",
            removeAfterUpload: true
        });
        return this.uploader;
    };
    UploadService.prototype.upload = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            if (_this.uploader.queue.length !== 0) {
                _this.uploader.queue[0].onSuccess = function (res, status) {
                    if (status == 200) {
                        observer.next(JSON.parse(res)['url']);
                    }
                };
                _this.uploader.queue[0].upload();
            }
            else {
                observer.next('');
            }
        });
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_interceptors_1.InterceptorService])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=UploadService.js.map