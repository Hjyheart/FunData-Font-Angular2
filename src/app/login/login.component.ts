/**
 * Created by hongjiayong on 2017/3/9.
 */
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../services/AuthorizeService";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{

  public email: String;
  public pwd: String;

  ngOnInit(): void {
  }

  constructor(private authorizeService: AuthorizeService,
              private router: Router){}

  public login() {
    this.authorizeService.login(this.email, this.pwd)
        .subscribe((status: String) => {
            if(status === '200') {
                this.router.navigate(['/'])
            }
        })
  }
}