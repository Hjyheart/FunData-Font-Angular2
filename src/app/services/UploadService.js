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
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (type, sub_type) {
        var _this = this;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable_1.Observable(function (observer) {
            _this.http.post("" + Constants_1.Constants.Urls['getToken'], '', { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                var loader = {
                    runtimes: 'html5,flash,html4',
                    browse_button: 'upload',
                    uptoken: res["uptoken"],
                    get_new_uptoken: false,
                    domain: 'ooyqe04dh.bkt.clouddn.com',
                    container: 'upload-form',
                    max_file_size: '100mb',
                    max_retries: 3,
                    dragdrop: true,
                    drop_element: 'upload-form',
                    chunk_size: '4mb',
                    auto_start: true,
                    init: {
                        'FilesAdded': function (up, files) {
                            plupload.each(files, function (file) {
                                console.log(file);
                            });
                        },
                        'BeforeUpload': function (up, file) {
                            // 每个文件上传前，处理相关的事情
                        },
                        'UploadProgress': function (up, file) {
                            // 每个文件上传时，处理相关的事情
                        },
                        'FileUploaded': function (up, file, info) {
                            var domain = up.getOption('domain');
                            var data = info.json();
                            var sourceLink = domain + "/" + data.key;
                            console.log(sourceLink);
                        },
                        'Error': function (up, err, errTip) {
                            console.log(err);
                            //上传出错时，处理相关的事情
                        },
                        'UploadComplete': function () {
                            //队列文件处理完毕后，处理相关的事情
                        },
                        'Key': function (up, file) {
                            var key = '';
                            $.ajax({
                                url: "" + Constants_1.Constants.Urls['getKey'],
                                type: 'POST',
                                async: false,
                                data: {
                                    name: file.name
                                },
                                success: function (data) {
                                    key = data.name;
                                },
                                cache: false
                            });
                            return key;
                        }
                    }
                };
                observer.next(Qiniu.uploader(loader));
            }, function (err) {
                console.log(err);
                observer.next(null);
            });
        });
    };
    UploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;
//# sourceMappingURL=UploadService.js.map