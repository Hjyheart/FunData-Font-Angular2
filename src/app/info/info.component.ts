/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../services/CurrentPageService";

@Component({
  moduleId: module.id,
  templateUrl: 'info.component.html',
  styleUrls: ['../main.css', 'info.component.css']
})

export class InfoComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(
    private currentPageService: CurrentPageService
  ){}
}