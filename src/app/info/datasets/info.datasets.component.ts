/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, Input, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {DatasetService} from "../../services/DatasetService";
import {Dataset} from "../../models/Dataset";
import {PageableBaseClass} from "../../baseclasses/PageableBaseClass";
import {Router, RouterLinkActive} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-info-datasets',
  templateUrl: 'info.datasets.component.html',
  styleUrls: ['../../main.css', 'info.datasets.component.css'],
  providers:[RouterLinkActive]
})
export class InfoDatasetsComponent extends PageableBaseClass implements OnInit {

  private chooseDataset: Dataset = new Dataset();
  private exp = [];
  private exps = [];
  private res = {};
  private foreigns = [];
  private out = false;
  private foreign = '';
  private foreign2 = '';
  private roblisticLock = true;
  private operattingTable = 'all';
  private operatingTableStore = 'all';

  get datasets(): Dataset[] {
    return this.data;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.currentPageService.currentPage = 'infoDatasets';
    this.exp = [];
    this.exps = [];
  }

  constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService,
    private routerActive: RouterLinkActive,
    private router: Router) {
      super(datasetService.getUserDatasets, 'datasets', datasetService);
  }

  //TODO: 获取被选中要进行约束管理数据集的信息
  public getChooseDataset(id: number){
      this.datasetService.getDatasetDetail(id)
        .subscribe((res: any) => {
            this.chooseDataset = res.detail.datasetInfo;
            this.chooseDataset.tables = res.detail.tables;
            this.chooseDataset.tables.forEach(item => {
              item['outLock'] = false;
              this.res[item.name] = []
            });
            this.chooseDataset.url = res.detail.url;
        });
  }

  public restrictEnding(type: number){

      if (type == 1) {
          for (let i = 0; i < this.exps.length; i++){
              this.exps[i] = this.exps[i].replace(/\+/, '%2B')

          }
          this.datasetService.addExpressions(this.chooseDataset.id, this.res, this.foreigns)
              .subscribe((res: any) => {});
      }
      this.exp.length = 0;
      this.exps.length = 0;
      this.foreigns.length = 0;
      this.foreign = '';
      this.foreign2 = '';
      this.res = {};
      this.operattingTable = 'all';
      this.operatingTableStore = 'all';
      this.roblisticLock = true;
      this.chooseDataset = new Dataset();
  }

  putExp(str:string, table){
    if (!this.out){
      if (this.roblisticLock) {
        return;
      }
      this.exp.push(str);
      this.exp.push(' ');
    }else {}
  }

  clickAttr (str:string, table) {
    if (!this.out){
      if (!this.roblisticLock) {
        return;
      }
      this.operattingTable=table.name;
      this.operatingTableStore = this.operattingTable;
      this.roblisticLock = !this.roblisticLock;
    }else {
      if (table !== undefined){
        table.outLock = true
        if (this.foreign2 !== '') {
          return
        }
      }
      if (this.foreign === ''){
        this.foreign = str
        for (let i = 0; i < this.chooseDataset.tables.length; i++) {
          if (this.chooseDataset.tables[i] !== table) {
            this.chooseDataset.tables[i]['outLock'] = false
          }
        }
        return
      }
      else {
        if (this.foreign2 !== '') {
          return
        }
        this.foreign2 = str
        return
      }
    }
    this.putExp(str, table);

  }

  deleteExp(){
    if (!this.out) {
      if (this.exp.length === 0) {
        this.operattingTable = 'all'
        this.roblisticLock = true
      }
      this.exp.pop();
    }
    else {
      if (this.foreign2 !== '') {
        this.chooseDataset.tables.forEach(item => {
          item.columns.forEach(c => {
            if (item.name.concat('.').concat(c.colName) === this.foreign2){
              item['outLock'] = false;
              this.foreign2 = '';
              return
            }
          })
        })
      }
      else if (this.foreign2 === '' && this.foreign !== '') {
        this.chooseDataset.tables.forEach(item => {
          item.columns.forEach(c => {
            if (item.name.concat('.').concat(c.colName) === this.foreign){
              item['outLock'] = false;
              this.foreign = '';
              return
            }
          })
        })
      }
      else if (this.foreign2 === '' && this.foreign === '') {
        this.out = false
      }
      return
    }
  }

  addExp(){
    if (!this.out) {
      let e = '';
      this.exp.forEach(s => e += s);
      this.exps.push(e);
      this.res[this.operattingTable].push(e)
      console.log(this.res)
      this.exp = [];
      this.operattingTable = 'all';
      this.operatingTableStore = 'all';
      this.roblisticLock = true;
      this.foreign = '';
      this.foreign2 = '';
    }
    else {
      if (this.foreign === '' || this.foreign2 === ''){
        return;
      }
      this.foreigns.push(this.foreign + '->' + this.foreign2);
      this.foreign = '';
      this.foreign2 = '';
      this.chooseDataset.tables.forEach(item => item['outLock'] = false);
      this.operattingTable = this.operatingTableStore
      this.out = false
    }
  }

  startOut(){
    this.out = true
    this.operattingTable = 'all'
  }

  deleteConfirmExp(index, name){
    this.res[name].splice(index, 1)
  }

  deleteConfirmForeign(){
    this.foreigns.pop();
  }
}