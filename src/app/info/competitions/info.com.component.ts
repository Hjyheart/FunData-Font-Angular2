/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";
import {Constants} from "../../util/Constants";

@Component({
  moduleId: module.id,
  templateUrl: 'info.com.component.html',
  styleUrls: ['../../main.css', 'info.com.component.css']
})

export class InfoComComponent implements OnInit{
  get Constants(){
    return Constants
  }

  ngOnInit(): void {
    this.currentPageService.currentPage = 'infoCom';
  }

  constructor(
    private currentPageService: CurrentPageService
  ){}
}