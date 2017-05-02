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
var Constants_1 = require("../util/Constants");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Dataset_1 = require("../models/Dataset");
var DatasetService_1 = require("./DatasetService");
var QiniuUploadService = (function () {
    function QiniuUploadService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    QiniuUploadService.prototype.getStaticUploader = function (form_data) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable_1.Observable(function (observer) {
            _this.http.get("" + Constants_1.Constants.Urls['getPubToken'], { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var options = {
                    runtimes: 'html5,flash,html4',
                    browse_button: 'upload',
                    max_file_size: '100mb',
                    dragdrop: false,
                    chunk_size: '4mb',
                    //uptoken_url: Constants.Urls['getToken'],
                    uptoken: data.uptoken,
                    unique_names: true,
                    domain: 'http://opbnejaym.bkt.clouddn.com/',
                    multi_selection: false,
                    filters: {
                        mime_types: [
                            { title: "Image files", extensions: "jpg,jpeg,gif,png" }
                        ]
                    },
                    auto_start: false,
                    init: {
                        'FilesAdded': function (up, files) {
                            //do something
                        },
                        'BeforeUpload': function (up, file) {
                            //do something
                        },
                        'UploadProgress': function (up, file) {
                        },
                        'UploadComplete': function () {
                            //do something
                        },
                        'FileUploaded': function (up, file, info) {
                            var domain = up.getOption('domain');
                            var res = eval('(' + info + ')');
                            if (form_data instanceof Dataset_1.Dataset) {
                                form_data.coverUrl = "" + domain + res.key;
                            }
                            _this.dataService.createDataset(form_data)
                                .subscribe();
                            // let domain = up.getOption('domain');
                            // let res = eval('(' + info + ')');
                            // if ( form_data instanceof Dataset) {
                            //     form_data.coverUrl = `${domain}${res.key}`
                            // }
                            // func.bind(service)(form_data)
                            //     .subscribe();
                        },
                        'Error': function (up, err, errTip) {
                            alert(errTip);
                        },
                        'Key': function (up, file) {
                            // let key = "";
                            // $.ajax({
                            //     url: '/qiniu-token/get-key/',
                            //     type: 'GET',
                            //     async: false,//这里应设置为同步的方式
                            //     success: function(data) {
                            //         var ext = Qiniu.getFileExtension(file.name);
                            //         key = data + '.' + ext;
                            //     },
                            //     cache: false
                            // });
                            // return key;
                        }
                    }
                };
                observer.next(Qiniu.uploader(options));
            });
        });
        // let options = {
        //     runtimes: 'html5,flash,html4',
        //     browse_button: 'upload',//上传按钮的ID
        //     max_file_size: '100mb',//最大文件限制
        //     dragdrop: false,
        //     chunk_size: '4mb',//分块大小
        //     uptoken_url: Constants.Urls['getPubToken'],
        //
        //     unique_names: true,
        //     domain: 'http://opbnejaym.bkt.clouddn.com/',//自己的七牛云存储空间域名
        //     multi_selection: false,//是否允许同时选择多文件
        //     filters: {
        //         mime_types : [
        //             {title : "Image files", extensions: "jpg,jpeg,gif,png"}
        //         ]
        //     },
        //     auto_start: false,
        //     init: {
        //         'FilesAdded': (up: any, files: any) => {
        //             //do something
        //         },
        //         'BeforeUpload': (up: any, file: any) => {
        //             //do something
        //         },
        //         'UploadProgress': (up: any, file: any) => {
        //
        //         },
        //         'UploadComplete': () => {
        //             //do something
        //         },
        //         'FileUploaded': (up: any, file: any, info: any) => {
        //             // let domain = up.getOption('domain');
        //             // let res = eval('(' + info + ')');
        //             // if ( form_data instanceof Dataset) {
        //             //     form_data.coverUrl = `${domain}${res.key}`
        //             // }
        //             // func.bind(service)(form_data)
        //             //     .subscribe();
        //         },
        //         'Error': (up: any, err: any, errTip: any) => {
        //             alert(errTip);
        //         },
        //         'Key': (up: any, file: any) => {
        //             // let key = "";
        //             // $.ajax({
        //             //     url: '/qiniu-token/get-key/',
        //             //     type: 'GET',
        //             //     async: false,//这里应设置为同步的方式
        //             //     success: function(data) {
        //             //         var ext = Qiniu.getFileExtension(file.name);
        //             //         key = data + '.' + ext;
        //             //     },
        //             //     cache: false
        //             // });
        //             // return key;
        //         }
        //     }
        // };
        // return Qiniu.uploader(options);
    };
    QiniuUploadService.prototype.getDataUploader = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable_1.Observable(function (observer) {
            _this.http.get("" + Constants_1.Constants.Urls['getPriToken'], { headers: headers, withCredentials: true })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                var options = {
                    runtimes: 'html5,flash,html4',
                    browse_button: 'upload',
                    max_file_size: '100mb',
                    dragdrop: false,
                    chunk_size: '4mb',
                    //uptoken_url: Constants.Urls['getToken'],
                    uptoken: data.uptoken,
                    unique_names: true,
                    domain: 'http://op9cfw6va.bkt.clouddn.com/',
                    multi_selection: false,
                    filters: {
                        mime_types: [
                            { title: "Image files", extensions: "jpg,jpeg,gif,png" }
                        ]
                    },
                    auto_start: false,
                    init: {
                        'FilesAdded': function (up, files) {
                            //do something
                        },
                        'BeforeUpload': function (up, file) {
                            //do something
                        },
                        'UploadProgress': function (up, file) {
                        },
                        'UploadComplete': function () {
                            //do something
                        },
                        'FileUploaded': function (up, file, info) {
                            //每个文件上传成功后,处理相关的事情
                            //其中 info 是文件上传成功后，服务端返回的json，形式如
                            //{
                            //  "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //  "key": "gogopher.jpg"
                            //}
                            var domain = up.getOption('domain');
                            var res = eval('(' + info + ')');
                            var sourceLink = domain + res.key; //获取上传文件的链接地址
                            //do something
                        },
                        'Error': function (up, err, errTip) {
                            alert(errTip);
                        },
                        'Key': function (up, file) {
                            //当save_key和unique_names设为false时，该方法将被调用
                            //let key = "";
                            // $.ajax({
                            //     url: '/qiniu-token/get-key/',
                            //     type: 'GET',
                            //     async: false,//这里应设置为同步的方式
                            //     success: function(data) {
                            //         var ext = Qiniu.getFileExtension(file.name);
                            //         key = data + '.' + ext;
                            //     },
                            //     cache: false
                            // });
                            //return key;
                        }
                    }
                };
                observer.next(Qiniu.uploader(options));
            });
        });
    };
    QiniuUploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, DatasetService_1.DatasetService])
    ], QiniuUploadService);
    return QiniuUploadService;
}());
exports.QiniuUploadService = QiniuUploadService;
//# sourceMappingURL=QiniuUploadService.js.map