import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
/**
 * Created by huang on 17-4-25.
 */

declare const Qiniu: any;
declare const plupload: any;

@Injectable()
export class UploadService {
    constructor(private http: Http,) {
    }

    public upload(type: Number, sub_type: any) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Observable((observer: Observer<any>) => {
            this.http.post(`${Constants.Urls['getToken']}`, '', {headers: headers, withCredentials: true})
                .map(res => res.json())
                .subscribe((res) => {
                    let loader = {
                        runtimes: 'html5,flash,html4',      // 上传模式，依次退化
                        browse_button: 'upload',         // 上传选择的点选按钮，必需
                        uptoken: res["uptoken"],
                        get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                        domain: 'ooyqe04dh.bkt.clouddn.com',     // bucket域名，下载资源时用到，必需
                        container: 'upload-form',             // 上传区域DOM ID，默认是browser_button的父元素
                        max_file_size: '100mb',             // 最大文件体积限制
                        max_retries: 3,                     // 上传失败最大重试次数
                        dragdrop: true,
                        drop_element: 'upload-form',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                        chunk_size: '4mb',                  // 分块上传时，每块的体积s
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
                                let domain = up.getOption('domain');
                                let data = info.json();
                                let sourceLink = domain +"/"+ data.key;
                                console.log(sourceLink);
                            },
                            'Error': function (up, err, errTip) {
                                console.log(err)
                                //上传出错时，处理相关的事情
                            },
                            'UploadComplete': function () {
                                //队列文件处理完毕后，处理相关的事情
                            },
                            'Key': function (up, file) {
                                let key = '';
                                $.ajax({
                                    url: `${Constants.Urls['getKey']}`,
                                    type: 'POST',
                                    async: false,//这里应设置为同步的方式
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
                }, err => {
                    console.log(err);
                    observer.next(null);
                });
        });
    }


}