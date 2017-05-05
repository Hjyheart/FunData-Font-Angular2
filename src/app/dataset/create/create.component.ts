/**
 * Created by hongjiayong on 2017/4/12.
 */
import {Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentPageService} from "../../services/CurrentPageService";
import {Dataset} from "../../models/Dataset";
import {Column} from "../../models/Column";
import {DatasetService} from "../../services/DatasetService";
import {Router} from "@angular/router";
import {QiniuUploadService} from "../../services/QiniuUploadService";



declare const $:any;


@Component({
  moduleId: module.id,
  selector: 'dataset-create',
  templateUrl: 'create.component.html',
  styleUrls: ['../../main.css', 'create.component.css']
})

export class DatasetCreateComponent implements OnInit{
    @ViewChild('upfile') protected _fileUpload:ElementRef;

    public dataset: Dataset = new Dataset();

  attrFlag: boolean;
  cover: any;
  private keyName:string;
  private keyType:number;
  private loaderClass:string;
  private loaderText:string;
    private qiniuUploader:any = null;
  constructor(private renderer:Renderer,
              private currentPage: CurrentPageService,
                private datasetService: DatasetService,
                private qiniuUploadService: QiniuUploadService,
                private router: Router
  ){}


  public loaderControl(res: string) {
      if (res === '200') {
          this.loaderClass = 'loader loader-success';
          this.loaderText = '创建成功';
          setTimeout( () => {
              this.router.navigate(['/dataset/list']);
          }, 10);
      }
      else if(res === '-1') {
          this.loaderClass = 'loader loader-fail';
          this.loaderText = '创建失败';
          setTimeout(() => {
              this.loaderClass = 'loader loader-default';
              this.loaderText = '等待中。。。';
          }, 10);
      }
  }

  ngOnInit(): void {
    this.attrFlag = false;
    this.keyName = '';
    this.keyType = 0;
    this.loaderClass = 'loader loader-default';
    this.loaderText = '等待中。。。';
    this.currentPage.currentPage = 'dataset';
  }

  public upload() {
      // this.qiniuUploadService.getStaticUploader(this.datasetService, this.datasetService.createDataset, this.dataset, this, this.loaderControl)
      //     .subscribe((uploader: any) => {
      //         this.qiniuUploader = uploader;
      //     });
      this.qiniuUploader = this.qiniuUploadService.getStaticUploader(this.datasetService,
                                                  this.datasetService.createDataset,
                                                  this.dataset, this,
                                                  this.loaderControl);
      this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
      return false;
  }

    public onFiles():any {
        const file = this._fileUpload.nativeElement.files[0];
        this.qiniuUploader.addFile(file);
    }

  onSubmit(form: NgForm) {
      this.loaderClass = 'loader loader-default is-active';
      if (this._fileUpload.nativeElement.files[0] === undefined) {
          this.datasetService.createDataset(this.dataset)
              .subscribe(this.loaderControl.bind(this))
      }
      else {
          this.qiniuUploader.start();
      }
  }

  addKey(){
    let type:string;
    if (this.keyType === 1){
      type = 'String';
    }
    else if (this.keyType === 2){
      type = 'Integer';
    }
    else if (this.keyType === 3){
      type = 'Double';
    }
    else if (this.keyType === 4){
      type = 'Char';
    }
    else{
      type = '';
    }
    this.dataset.columns.push(new Column(this.keyName, type, []));
    this.keyName = '';
    this.keyType = 0;
  }
}