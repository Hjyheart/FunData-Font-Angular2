/**
 * Created by hongjiayong on 2017/4/30.
 */
import {Component, OnInit, Input, Attribute} from '@angular/core';
import {PageableBaseClass} from "../../../baseclasses/PageableBaseClass";
import {Router, RouterLinkActive} from "@angular/router";
import {PullRequestService} from "../../../services/PullRequestService";
import {PullRequest} from "../../../models/PullRequest";
import {Constants} from "../../../util/Constants";

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
    public pullRequest;
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
  }

  // TODO: 拒绝这个数据集
  reject(){
  }

  // TODO: 同意合并这个数据集，需要提供一个tag
  agree(tag:string){

  }

  showNewTag(){
    this.newTagFlag = true;
  }

}