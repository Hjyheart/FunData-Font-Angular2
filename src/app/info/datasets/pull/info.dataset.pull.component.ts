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
  ngOnInit(): void {
  }

  constructor(
    private pullService: PullRequestService
  ){
    super(pullService.getAllDatasets, 'pullrequests', pullService);
  }

}