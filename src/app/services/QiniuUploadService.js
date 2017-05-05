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
var Dataset_1 = require("../models/Dataset");
var QiniuUploadService = (function () {
    function QiniuUploadService(http) {
        this.http = http;
    }
    QiniuUploadService.prototype.getStaticUploader = function (service, func, form_data, comp, loader_func) {
        var options = {
            runtimes: 'html5,flash,html4',
            browse_button: 'upload',
            max_file_size: '100mb',
            dragdrop: false,
            chunk_size: '4mb',
            uptoken_url: Constants_1.Constants.Urls['getPubToken'],
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
                    func.bind(service)(form_data)
                        .subscribe(loader_func.bind(comp));
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
        return Qiniu.uploader(options);
    };
    QiniuUploadService.prototype.getDataUploader = function () {
        var options = {
            runtimes: 'html5,flash,html4',
            browse_button: 'upload',
            max_file_size: '100mb',
            dragdrop: false,
            chunk_size: '4mb',
            uptoken_url: Constants_1.Constants.Urls['getPriToken'],
            unique_names: true,
            domain: 'http://op9cfw6va.bkt.clouddn.com/',
            multi_selection: false,
            filters: {
                mime_types: [
                    { title: "Csv files", extensions: "csv" }
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
        return Qiniu.uploader(options);
    };
    QiniuUploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QiniuUploadService);
    return QiniuUploadService;
}());
exports.QiniuUploadService = QiniuUploadService;
//# sourceMappingURL=QiniuUploadService.js.map