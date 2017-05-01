/**
 * Created by hongjiayong on 2017/4/12.
 */
import {
    Component, OnInit, trigger, state, style, transition, animate, ViewChild, ElementRef,
    Renderer, Input, Output, EventEmitter
} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentPageService} from "../../services/CurrentPageService";
import {Dataset} from "../../models/Dataset";
import {Column} from "../../models/Column";
import {DatasetService} from "../../services/DatasetService";
import {Router} from "@angular/router";
import {UploadService} from "../../services/UploadService";
import {Constants} from "../../util/Constants";
import {QiniuUploadService} from "../../services/QiniuUploadService";



declare  var $:any;
declare const Qiniu: any;
declare var plupload:any;
@Component({
  moduleId: module.id,
  selector: 'dataset-create',
  templateUrl: 'create.component.html',
  styleUrls: ['../../main.css', 'create.component.css']
})

export class DatasetCreateComponent implements OnInit{
    private uploadProgress:number = 0;
    public  uploadInProgress:boolean = false;
    @ViewChild('fileUpload') protected _fileUpload:ElementRef;
    @Input() uploadSizeLimit: number = 3000000;
    // 输出事件
    @Output() pictureChange:EventEmitter<any> = new EventEmitter();
    @Output() onUpload:EventEmitter<any> = new EventEmitter();
    @Output() onUploadCompleted:EventEmitter<any> = new EventEmitter();

    public  picture:string = '';

  datasetName: string;
  datasetDes: string;
  formatDes: string;
  attrFlag: boolean;
  cover: any;
  keys = new Array();
  private keyName:string;
  private keyType:number;
  private loaderClass:string;
  private loaderText:string;
    private qiniuUploader:any = null;
  constructor(private currentPage: CurrentPageService,
                private datasetService: DatasetService,
                private uploadService: UploadService,
                private qiniuUploadService: QiniuUploadService,
                private router: Router
  ){


    //this.uploader = uploadService.getUploader(Constants.Urls["uploadCover"]);
      qiniuUploadService.getUploader()
          .subscribe((uploader: any) => {
                this.qiniuUploader = uploader;
              })

  }


  ngOnInit(): void {
    this.datasetName = '';
    this.datasetDes = '';
    this.formatDes = '';
    this.attrFlag = false;
    this.keys = new Array();
    this.keyName = '';
    this.keyType = 0;
    this.loaderClass = 'loader loader-default';
    this.loaderText = '等待中。。。';

    this.currentPage.currentPage = 'dataset';
  }

  public uploadCover() {

  }

  onSubmit(form: NgForm) {
      let dataset = new Dataset();
      dataset.name = this.datasetName;
      dataset.dsDescription = this.datasetDes;
      dataset.formatDescription = this.formatDes;
      dataset.columns = this.keys;
    this.qiniuUploader.start();

    // this.loaderClass = 'loader loader-default is-active';
    // this.uploadService.upload()
    //     .subscribe((res: string) => {
    //     dataset.coverUrl = res;
    //       this.datasetService.createDataset(dataset)
    //           .subscribe(
    //               res => {
    //                 if (res === '200'){
    //                   this.loaderClass = 'loader loader-success';
    //                   this.loaderText = '创建成功';
    //                   setTimeout( () => {
    //                     this.router.navigate(['/dataset/list']);
    //                   }, 1000);
    //                 }else if(res === '-1'){
    //                   this.loaderClass = 'loader loader-fail';
    //                   this.loaderText = '创建失败';
    //                   setTimeout(() => {
    //                     this.loaderClass = 'loader loader-default';
    //                     this.loaderText = '等待中。。。';
    //                   }, 1000);
    //                 }
    //               }
    //           );
    //     });


  }

  addKey(){
    let type:string;
    if (this.keyType === 1){
      type = 'String';
    }else if (this.keyType === 2){
      type = 'Integer';
    }else if (this.keyType === 3){
      type = 'Double';
    }else if (this.keyType === 4){
      type = 'Char';
    }else{
      type = '';
    }
    this.keys.push(new Column(this.keyName, type, []));
    this.keyName = '';
    this.keyType = 0;
    console.log(this.keys);
    // this.keyModal.nativeElement;
  }
}