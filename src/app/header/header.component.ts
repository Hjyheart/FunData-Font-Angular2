/**
 * Created by hongjiayong on 2017/4/11.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizeService} from "../services/AuthorizeService";

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
    private route: ActivatedRoute,
    private authorizeService: AuthorizeService,
    private router: Router
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

  public logout() {
    this.authorizeService.logout()
        .subscribe((status: String) => {
          if(status==='200') {
            this.router.navigate(['/login'])
          }
        })
  }
}