/**
 * Created by hongjiayong on 2017/4/30.
 */
import {Component, OnInit, Input, Attribute} from '@angular/core';
import {PageableBaseClass} from "../../../baseclasses/PageableBaseClass";
import {Router, RouterLinkActive} from "@angular/router";
import {PullRequestService} from "../../../services/PullRequestService";
import {PullRequest} from "../../../models/PullRequest";
import {PullRequestDetail} from "../../../models/PullRequestDetail";

@Component({
  moduleId: module.id,
  selector: 'my-info-dataset-pull',
  templateUrl: 'info.dataset.pull.component.html',
  styleUrls: ['../../../main.css', 'info.dataset.pull.component.css'],
  providers:[PullRequestService]
})

export class PullComponent extends PageableBaseClass implements OnInit {

    get pullRequests(): PullRequest[] {
        return this.data;
    }

    constructor(
        private pullRequestService: PullRequestService){
        super(pullRequestService.getAllPullRequests, 'pullrequests', pullRequestService);
    }
    public pullRequest: PullRequestDetail = new PullRequestDetail();
  // 被选中的pull request的id
  private selectId:number;
  private tagValue:number;
  private newTag:string;
  private newTagFlag:boolean;

  ngOnInit(): void {
      super.ngOnInit();
    this.selectId = -1;
    this.tagValue = 0;
    this.newTag = '';
    this.newTagFlag = false;
  }



  // TODO: 选中某个 pull request
  chosePullRequest(id: number){
      this.selectId = id;
      this.pullRequestService.getPullRequestDetail(id)
          .subscribe((data: any) => {
              if (data != "-1") {
                  this.pullRequest = data;
              }
          })
  }

  // TODO: 拒绝这个数据集
  reject(){
      this.pullRequestService.rejectPullRequest(this.pullRequest.id)
          .subscribe();
  }

  // TODO: 同意合并这个数据集，需要提供一个tag
  agree(tag: string){
      this.pullRequestService.mergePullRequest(this.pullRequest.id, tag)
          .subscribe();
  }

  showNewTag(){
    this.newTagFlag = true;
  }

}