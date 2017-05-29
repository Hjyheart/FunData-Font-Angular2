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
            this.chooseDataset.url = res.detail.url;
        });
  }

  public restrictEnding(type: number){
      if (type == 1) {
          this.datasetService.addExpressions(this.chooseDataset.id, this.exps)
              .subscribe((res: any) => {});
      }
      this.exp.length = 0;
      this.exps.length = 0;
      this.chooseDataset = new Dataset();
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