import {QiniuUploadService} from "../services/QiniuUploadService";
import {ElementRef, ViewChild} from "@angular/core";
/**
 * Created by huang on 17-5-5.
 */

export class PageableBaseClass {
    private qiniuUploader:any = null;
    @ViewChild('upfile') protected _fileUpload: ElementRef;

    constructor(private qiniuUploadService: QiniuUploadService,){}

    public onFiles():any {
        const file = this._fileUpload.nativeElement.files[0];
        this.qiniuUploader.addFile(file);
    }
}