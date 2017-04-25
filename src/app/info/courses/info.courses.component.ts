/**
 * Created by hongjiayong on 2017/4/25.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/CurrentPageService";

@Component({
  moduleId: module.id,
  templateUrl: 'info.courses.component.html',
  styleUrls: ['../../main.css', 'info.courses.component.css']
})

export class InfoCoursesComponent implements OnInit{
  ngOnInit(): void {
    this.currentPageService.currentPage = 'infoCourses';
  }

  constructor(
    private currentPageService: CurrentPageService
  ){}
}