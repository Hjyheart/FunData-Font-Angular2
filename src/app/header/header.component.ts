/**
 * Created by hongjiayong on 2017/4/11.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizeService} from "../services/AuthorizeService";
import {CommonModule} from "@angular/common";
import {CurrentPageService} from "../services/CurrentPageService";


@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css', '../main.css']
})

export class HeaderComponent implements OnInit{

  private navDiv:string = 'none';

  constructor(
    private authorizeService: AuthorizeService,
    private currentPage: CurrentPageService,
    private route: ActivatedRoute,
    private router: Router
    // private common: CommonModule,
  ){
  }

  ngOnInit(): void {
    console.log(this.route.url);
    console.log(this.router.url);
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