import {Injectable} from "@angular/core";
import {Constants} from "../util/Constants";
import {Http, Headers} from "@angular/http";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
/**
 * Created by huang on 17-4-30.
 */
declare const Qiniu: any;
declare const plupload: any;

@Injectable()
export class QiniuUploadService {

    public getUploader() {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable((observer: Observer<any>) => {
            this.http.get(`${Constants.Urls['getToken']}`, {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe(data => {
                    let options = {
                        runtimes: 'html5,flash,html4',
                        browse_button: 'upload',//上传按钮的ID
                        max_file_size: '100mb',//最大文件限制
                        dragdrop: false,
                        chunk_size: '4mb',//分块大小
                        //uptoken_url: Constants.Urls['getToken'],
                        uptoken: data.uptoken,
                        unique_names: true,
                        domain: 'http://op9cfw6va.bkt.clouddn.com/',//自己的七牛云存储空间域名
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
                                //每个文件上传成功后,处理相关的事情
                                //其中 info 是文件上传成功后，服务端返回的json，形式如
                                //{
                                //  "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                                //  "key": "gogopher.jpg"
                                //}
                                let domain = up.getOption('domain');
                                let res = eval('(' + info + ')');
                                let sourceLink = domain + res.key;//获取上传文件的链接地址
                                //do something
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
                    observer.next(Qiniu.uploader(options));
                });

        });
    }


    constructor(private http: Http,) {

    }
}