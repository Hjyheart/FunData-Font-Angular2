/**
 * Created by hongjiayong on 2017/4/30.
 */
import {Component, OnInit, Input} from '@angular/core';
import {PageableBaseClass} from "../../../baseclasses/PageableBaseClass";
import {Router, RouterLinkActive} from "@angular/router";
import {PullRequestService} from "../../../services/PullRequestService";

@Component({
  moduleId: module.id,
  selector: 'my-info-dataset-pull',
  templateUrl: 'info.dataset.pull.component.html',
  styleUrls: ['../../../main.css', 'info.dataset.pull.component.css'],
  providers:[PullRequestService]
})

export class PullComponent extends PageableBaseClass implements OnInit {

  @Input() id:number;

  // 被选中的pull request的id
  private selectId:number;
  private tagValue:number;
  private newTag:string;
  private newTagFlag:boolean;

  ngOnInit(): void {
    this.selectId = -1;
    this.tagValue = 0;
    this.newTag = '';
    this.newTagFlag = false;
  }

  constructor(
    private pullService: PullRequestService
  ){
    super(pullService.getAllPullRequests, 'pullrequests', pullService);
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