/**
 * Created by hongjiayong on 2017/5/2.
 */
import {Component, OnInit} from '@angular/core';
import {CurrentPageService} from "../services/CurrentPageService";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'others-info',
  templateUrl: 'others.component.html',
  styleUrls: ['../main.css', 'others.component.css']
})


export class OthersComponent implements OnInit{

  private id:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currentPageService: CurrentPageService
  ){}

  ngOnInit(): void {
    this.id =+this.route.snapshot.params['id'];
    console.log(this.id);
    this.currentPageService.currentPage = 'others';
  }
}