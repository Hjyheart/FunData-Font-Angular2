import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {FileItem, FileUploader} from 'ng2-file-upload';
import {Constants} from "../util/Constants";
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import {InterceptorService} from "ng2-interceptors";
/**
 * Created by huang on 17-4-25.
 */

declare const Qiniu: any;
declare const plupload: any;

@Injectable()
export class UploadService {
    private uploader: any = null;
    constructor(private http: InterceptorService,) {
    }

    public getUploader(url: string) {
        this.uploader = new FileUploader({
            url: url,
            method: "POST",
            removeAfterUpload: true
        });
        return this.uploader;
    }

    public upload() {
        return new Observable((observer: Observer<string>) =>{
            if (this.uploader.queue.length !== 0) {
                this.uploader.queue[0].onSuccess = (res: string, status: number) => {
                    if (status == 200) {
                        observer.next(JSON.parse(res)['url']);
                    }
                };
                this.uploader.queue[0].upload();
            }
            else {
                observer.next('');
            }
        });
    }




}