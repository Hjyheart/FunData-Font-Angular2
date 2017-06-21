/**
 * Created by hongjiayong on 2017/4/12.
 */
import {Component, OnInit, Renderer, ViewChild} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {Dataset} from "../../models/Dataset";
import {DatasetService} from "../../services/DatasetService";
import {Router} from "@angular/router";
import {QiniuUploadService} from "../../services/QiniuUploadService";
import {UploadBaseClass} from "../../baseclasses/UploadBaseClass";
import {Table} from "../../models/Table";
import {Column} from "../../models/Column";
import {ModalDirective} from "ng2-bootstrap";



declare const $:any;


@Component({
  moduleId: module.id,
  selector: 'dataset-create',
  templateUrl: 'create.component.html',
  styleUrls: ['../../main.css', 'create.component.css']
})

export class DatasetCreateComponent extends UploadBaseClass implements OnInit{
    public dataset: Dataset = new Dataset();
    public attrFlag: boolean;
    private keyName:string;
    private keyType:number;
    private loaderClass:string;
    private loaderText:string;
    private newTableName:string;
    private currentTable:number;
    private alertMessage:string;

    @ViewChild('alertModal') public alertModal:ModalDirective;

    constructor(private renderer:Renderer,
                private currentPage: CurrentPageService,
                private datasetService: DatasetService,
                private qiniuUploadService: QiniuUploadService,
                private router: Router) {
        super();
    }


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
        this.newTableName = '';
        this.currentPage.currentPage = 'dataset';
        this.currentTable = -1;
    }

    public upload() {
        this.qiniuUploader = this.qiniuUploadService.getStaticUploader(this.datasetService,
                                                                       this.datasetService.createDataset,
                                                                       this.dataset,
                                                                       this,
                                                                       this.loaderControl);
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    }

    public createDataset() {
        console.log(this.dataset)
        if (this.dataset.name === '' || this.dataset.name === undefined) {
            this.alertMessage = '未填写数据集名称'
            this.alertModal.show();
            return;
        }else if (this.dataset.tables.length === 0 || this.dataset.name === undefined){
            this.alertMessage = '未添加表';
            this.alertModal.show();
            return;
        }
        this.loaderClass = 'loader loader-default is-active';
        if (this._fileUpload.nativeElement.files[0] === undefined) {
            this.datasetService.createDataset(this.dataset)
                .subscribe(this.loaderControl.bind(this))
        }
        else {
            this.qiniuUploader.start();
        }
    }

    public addKey(){
        let type:string;
        if (this.keyType === 1) {
            type = 'String';
        }
        else if (this.keyType === 2) {
            type = 'Integer';
        }
        else if (this.keyType === 3) {
            type = 'Double';
        }
        else if (this.keyType === 4) {
            type = 'Char';
        }
        else {
            type = '';
        }
        this.dataset.tables[this.currentTable].columns.push(new Column(this.keyName, type));
        this.keyName = '';
        this.keyType = 0;
    }

    addNewTable(){
        this.dataset.tables.push(new Table(this.newTableName));
        this.newTableName = '';
    }

    chooseTable(i:number){
        console.log(i);
        this.currentTable = i;
    }
}