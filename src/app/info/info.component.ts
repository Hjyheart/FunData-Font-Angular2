/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../services/CurrentPageService";
import {RouterLinkActive} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'info.component.html',
  styleUrls: ['../main.css', 'info.component.css']
})

export class InfoComponent implements OnInit{

  private nikename:string;
  private headImg:any;

  ngOnInit(): void {
    this.nikename = '';
    this.currentPageService.currentPage = 'info';
  }

  constructor(
    private currentPageService: CurrentPageService,
  ){}


  edit(){


  }
}