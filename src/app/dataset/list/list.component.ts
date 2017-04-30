/**
 * Created by hongjiayong on 2017/3/22.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {Dataset} from "../../models/Dataset";
import {DatasetService} from "../../services/DatasetService";
import {totalmem} from "os";
import {PageableBaseClass} from "../../baseclasses/PageableBaseClass";

@Component({
  moduleId: module.id,
  selector: 'dataset-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css', '../../main.css']
})

export class DatasetListComponent extends PageableBaseClass implements OnInit {

    private _hrWidth: string;

    get datasets(): Dataset[] {
        return this.data;
    }

    constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService){
    super(datasetService.getAllDatasets, 'datasets', datasetService)
  }

  ngOnInit(): void {
    this._hrWidth = '0px';
    this.currentPageService.currentPage = 'dataset';
  }

  @HostListener('window:scroll') transition(){
    if (scrollY > 400){
      this._hrWidth = '200px';
    }
  }
}