/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewContainerRef} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {DatasetService} from "../../services/DatasetService";
import {Dataset} from "../../models/Dataset";
import {PageableBaseClass} from "../../baseclasses/PageableBaseClass";
import {Router, RouterLinkActive} from "@angular/router";
import {PullComponent} from "./pull/info.dataset.pull.component";
import {PullRequestService} from "../../services/PullRequestService";



@Component({
  moduleId: module.id,
  selector: 'my-info-datasets',
  templateUrl: 'info.datasets.component.html',
  styleUrls: ['../../main.css', 'info.datasets.component.css'],
  providers:[RouterLinkActive]
})


export class InfoDatasetsComponent extends PageableBaseClass implements OnInit {

  get datasets(): Dataset[] {
    return this.data;
  }

  ngOnInit(): void {
    this.currentPageService.currentPage = 'infoDatasets';
  }

  public show(id: number) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(PullComponent);
      let instance = this.viewContainerRef.createComponent(factory).instance;
      instance.constructor.bind(this)(this.pullRequestService, id);
  }

  constructor(
    private currentPageService: CurrentPageService,
    private datasetService: DatasetService,
    private pullRequestService: PullRequestService,
    private routerActive:RouterLinkActive,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private router: Router){
      super(datasetService.getUserDatasets, 'datasets', datasetService);
  }
}