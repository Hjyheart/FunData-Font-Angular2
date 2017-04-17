/**
 * Created by hongjiayong on 2017/4/11.
 */
import {Component, OnInit, Input, HostListener} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css', '../main.css']
})

export class HeaderComponent implements OnInit{

  private datasetStyle:string;
  private competitionStyle:string;
  private shopStyle:string;
  private courseStyle:string;
  private navDiv:string = 'none';

  constructor(
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.clearStyle();
  }

  clearStyle(){
    this.datasetStyle = 'nav-item';
    this.competitionStyle = 'nav-item';
    this.shopStyle = 'nav-item';
    this.courseStyle = 'nav-item';
  }

  focusOn(name:string){
    this.clearStyle();
    if (name == 'com'){
      this.competitionStyle = 'nav-item active';
    }else if(name == 'data'){
      this.datasetStyle = 'nav-item active';
    }else if(name == 'shop'){
      this.shopStyle = 'nav-item active';
    }else if(name == 'course'){
      this.courseStyle = 'nav-item active';
    }
  }

  showNav(){
    this.navDiv = (this.navDiv === 'none') ? 'block' : 'none';
  }

}