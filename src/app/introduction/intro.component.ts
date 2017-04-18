/**
 * Created by hongjiayong on 2017/3/8.
 */
import { Component, OnInit } from '@angular/core';
import {CurrentPageService} from "../services/CurrentPageService";

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'my-introduction',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css', '../main.css']
})

export class IntroComponent implements OnInit{

  constructor(
    private currentPage: CurrentPageService
  ){}

  ngOnInit(): void {
      this.currentPage.currentPage = 'intro';
  }
}