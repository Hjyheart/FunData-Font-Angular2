import {Injectable} from "@angular/core";
import {Constants} from "../util/Constants";
import {Http, Headers} from "@angular/http";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {Dataset} from "../models/Dataset";
import {DatasetService} from "./DatasetService";
import {PullRequest} from "../models/PullRequest";
/**
 * Created by huang on 17-4-30.
 */
declare const Qiniu: any;
declare const plupload: any;

@Injectable()
export class QiniuUploadService {

    public getStaticUploader(service: any, func: Function, form_data: any, comp: any, loader_func: Function) {
        let options = {
            runtimes: 'html5,flash,html4',
            browse_button: 'upload',//上传按钮的ID
            max_file_size: '100mb',//最大文件限制
            dragdrop: false,
            chunk_size: '4mb',//分块大小
            uptoken_url: Constants.Urls['getPubToken'],
            unique_names: true,
            domain: 'http://opbnejaym.bkt.clouddn.com/',//自己的七牛云存储空间域名
            multi_selection: false,//是否允许同时选择多文件
            filters: {
                mime_types : [
                    {title : "Image files", extensions: "jpg,jpeg,gif,png"}
                ]
            },
            auto_start: false,
            init: {
                'FilesAdded': (up: any, files: any) => {
                    //do something
                },
                'BeforeUpload': (up: any, file: any) => {
                    //do something
                },
                'UploadProgress': (up: any, file: any) => {

                },
                'UploadComplete': () => {
                    //do something
                },
                'FileUploaded': (up: any, file: any, info: any) => {
                    let domain = up.getOption('domain');
                    let res = eval('(' + info + ')');
                    if ( form_data instanceof Dataset) {
                        form_data.coverUrl = `${domain}${res.key}`;
                    }
                    func.bind(service)(form_data)
                        .subscribe(loader_func.bind(comp))
                },
                'Error': (up: any, err: any, errTip: any) => {
                    alert(errTip);
                },
                'Key': (up: any, file: any) => {
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
    }

    public getDataUploader(service: any, func: Function, form_data: any, comp: any, loader_func: Function) {
        let options = {
            runtimes: 'html5,flash,html4',
            browse_button: 'upload',//上传按钮的ID
            max_file_size: '100mb',//最大文件限制
            dragdrop: false,
            chunk_size: '4mb',//分块大小
            uptoken_url: Constants.Urls['getPriToken'],
            unique_names: true,
            domain: 'http://op9cfw6va.bkt.clouddn.com/',//自己的七牛云存储空间域名
            multi_selection: false,//是否允许同时选择多文件
            filters: {
                mime_types : [
                    {title : "Csv files", extensions: "csv"}
                ]
            },
            auto_start: false,
            init: {
                'FilesAdded': (up: any, files: any) => {
                    //do something
                },
                'BeforeUpload': (up: any, file: any) => {
                    //do something
                },
                'UploadProgress': (up: any, file: any) => {

                },
                'UploadComplete': () => {
                    //do something
                },
                'FileUploaded': (up: any, file: any, info: any) => {
                    let domain = up.getOption('domain');
                    let res = eval('(' + info + ')');
                    if ( form_data instanceof PullRequest) {
                        form_data.fileUrl = `${domain}${res.key}`;
                    }
                    func.bind(service)(form_data)
                        .subscribe(loader_func.bind(comp))
                },
                'Error': (up: any, err: any, errTip: any) => {
                    alert(errTip);
                },
                'Key': (up: any, file: any) => {
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
    }

    constructor(private http: Http) {}
}