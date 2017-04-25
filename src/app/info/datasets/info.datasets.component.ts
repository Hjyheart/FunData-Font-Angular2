/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";

@Component({
  moduleId: module.id,
  templateUrl: 'info.datasets.component.html',
  styleUrls: ['../../main.css', 'info.datasets.component.css']
})

export class InfoDatasetsComponent implements OnInit{
  ngOnInit(): void {
    this.currentPageService.currentPage = 'infoDatasets';
  }

  constructor(
    private currentPageService: CurrentPageService
  ){}
}