/**
 * Created by hongjiayong on 2017/3/8.
 */
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../../services/AuthorizeService";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: 'headerbar.component.html',
  styleUrls: ['../dashboard.component.css']
})

export class HeaderComponent implements OnInit{

    ngOnInit(): void {
    }

    get isLogin(): Boolean {
      return this.authorizeService.isLogin
    }

    constructor(private authorizeService: AuthorizeService,
                private router: Router) {

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