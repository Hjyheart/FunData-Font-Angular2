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
import {PullRequestService} from "../../services/PullRequestService";
import {PullRequest} from "../../models/PullRequest";
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  moduleId: module.id,
  selector: 'dataset-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css', '../../main.css']
})

export class DatasetDetailComponent extends UploadBaseClass implements OnInit {

  public dataset: Dataset = new Dataset();
    public pullRequest: PullRequest = new PullRequest();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer:Renderer,
    private qiniuUploadService: QiniuUploadService,
    private datasetService: DatasetService,
    private currentPage: CurrentPageService,
    private pullRequestService: PullRequestService,
  ) {
      super();
  }

  public loaderControl() {
      //TODO add upload wait sign
  }

  public newPullRequest() {
      this.qiniuUploader.start();
  }

  public clearPullRequest() {
      this.pullRequest = new PullRequest();
  }

  public upload() {
      this.pullRequest.datasetId = this.dataset.id;
      this.qiniuUploader = this.qiniuUploadService.getDataUploader(this.pullRequestService,
                                                                    this.pullRequestService.createPullRequest,
                                                                    this.pullRequest,
                                                                    this,
                                                                    this.loaderControl);
      this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
  }

  public download() {
        window.location.href = this.dataset.url;
  }

  public enter_terminal() {
      let s = Cookie.get('authorization').split("_");

      this.datasetService.enterTerminal(Number(s[0]), this.dataset.id)
          .subscribe((res: string) => {
              window.location.href = res;
      });
  }


  ngOnInit(): void {
      let dataset_id = +this.route.snapshot.params['id'];
      this.datasetService.getDatasetDetail(dataset_id)
          .subscribe((res: any) => {
              this.dataset = res.detail.datasetInfo;
              this.dataset.tables = res.detail.tables;
              this.dataset.url = res.detail.url;
          });
      this.currentPage.currentPage = 'dataset';
  }
}