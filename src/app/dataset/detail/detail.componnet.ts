/**
 * Created by hongjiayong on 2017/3/22.
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrentPageService} from "../../services/CurrentPageService";

@Component({
  moduleId: module.id,
  selector: 'dataset-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css', '../../main.css']
})

export class DatasetDetailComponent implements OnInit{

  private id:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currentPage: CurrentPageService
  ) {}


  ngOnInit(): void {
    this.id =+this.route.snapshot.params['id'];
    console.log(this.id);

    this.currentPage.currentPage = 'dataset';
  }

}