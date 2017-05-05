/**
 * Created by hongjiayong on 2017/3/22.
 */
import {Component, OnInit, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrentPageService} from "../../services/CurrentPageService";
import {DatasetService} from "../../services/DatasetService";
import {Dataset} from "../../models/Dataset";
import {UploadBaseClass} from "../../baseclasses/UploadBaseClass";
import {QiniuUploadService} from "../../services/QiniuUploadService";

@Component({
  moduleId: module.id,
  selector: 'dataset-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css', '../../main.css']
})

export class DatasetDetailComponent extends UploadBaseClass implements OnInit{

  public dataset: Dataset = new Dataset();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer:Renderer,
    private qiniuUploadService: QiniuUploadService,
    private datasetService: DatasetService,
    private currentPage: CurrentPageService
  ) {
      super();
  }

  public loaderControl() {
      //TODO add upload wait sign
  }

  public newPullRequest() {
      this.qiniuUploader.start();
  }

  public upload() {
      this.qiniuUploader = this.qiniuUploadService.getDataUploader();
      this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
  }

  public download() {

  }

  ngOnInit(): void {
      let dataset_id = +this.route.snapshot.params['id'];
      this.datasetService.getDatasetDetail(dataset_id)
          .subscribe((res: any) => {
              this.dataset = res.detail.datasetInfo;
              this.dataset.columns = res.detail.columns;
          });
      this.currentPage.currentPage = 'dataset';
  }
}