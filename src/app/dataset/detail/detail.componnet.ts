/**
 * Created by hongjiayong on 2017/3/22.
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrentPageService} from "../../services/CurrentPageService";
import {DatasetService} from "../../services/DatasetService";
import {Dataset} from "../../models/Dataset";

@Component({
  moduleId: module.id,
  selector: 'dataset-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css', '../../main.css']
})

export class DatasetDetailComponent implements OnInit{

  public dataset: Dataset;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datasetService: DatasetService,
    private currentPage: CurrentPageService
  ) {}


  ngOnInit(): void {
      this.route.parent.params.subscribe(params => {
          let dataset_id = +params["id"];
          this.datasetService.getDatasetDetail(dataset_id)
              .subscribe((res: any) => {
                  this.dataset = res.detail.datasetInfo;
                  this.dataset.columns = res.detail.columns;
              });
      });

    this.currentPage.currentPage = 'dataset';
  }
}