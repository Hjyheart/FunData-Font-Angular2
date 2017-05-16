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

  private chooseDataset: Dataset;
  private exp = [];
  private exps = [];

  get datasets(): Dataset[] {
    return this.data;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.currentPageService.currentPage = 'infoDatasets';
    this.chooseDataset = null;
    this.exp = [];
    this.exps = [];
  }

  constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService,
    private routerActive:RouterLinkActive,
    private router: Router){
      super(datasetService.getUserDatasets, 'datasets', datasetService);
  }

  //TODO: 获取被选中要进行约束管理数据集的信息
  getChooseDataset(id:number){
    console.log(id);
  }

  yueshuEnding(){
    this.chooseDataset = null;
  }

  putExp(str:string){
    this.exp.push(str)
  }

  deleteExp(){
    this.exp.pop();
  }

  addExp(){
    let e = '';
    this.exp.forEach(s => e += s);
    this.exps.push(e);
    this.exp = [];
  }

  deleteConfirmExp(){
    this.exps.pop();
  }
}