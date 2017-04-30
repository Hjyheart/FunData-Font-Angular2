/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {DatasetService} from "../../services/DatasetService";
import {Dataset} from "../../models/Dataset";
import {PageableBaseClass} from "../../baseclasses/PageableBaseClass";
import {Constants} from "../../util/Constants";
import {Router, RouterLinkActive} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-info-datasets',
  templateUrl: 'info.datasets.component.html',
  styleUrls: ['../../main.css', 'info.datasets.component.css'],
  providers:[RouterLinkActive]
})


export class InfoDatasetsComponent extends PageableBaseClass implements OnInit {

  get Constants(){
    return Constants
  }

  get datasets(): Dataset[] {
    return this.data;
  }

  ngOnInit(): void {
    this.currentPageService.currentPage = 'infoDatasets';
    console.log(Constants.ServerHost)
  }


  constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService,
    private routerActive:RouterLinkActive,
    private router: Router){
      super(datasetService.getUserDatasets, 'datasets', datasetService);
  }
}