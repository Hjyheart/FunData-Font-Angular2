/**
 * Created by hongjiayong on 2017/3/9.
 */
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../services/AuthorizeService";
import {Router} from "@angular/router";
import {CurrentPageService} from "../services/CurrentPageService";

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{

  public email: String;
  public pwd: String;

  private emailState:string;
  private pwdState:string;

  public normal:string = 'form-group';
  public error:string = 'form-group has-error has-feedback';

  public errorState:string;
  public right:string = 'error-state'
  public wrong:string = 'error-state active'

  ngOnInit(): void {
    this.currentPageService.currentPage = 'login';
    this.emailState = this.normal;
    this.pwdState = this.normal;
    this.errorState = this.right;
  }

  constructor(private authorizeService: AuthorizeService,
              private router: Router,
              private currentPageService: CurrentPageService){}

  public login() {
    if (this.email == '' || this.email == undefined){
      this.emailState = this.error;
      return;
    }
    this.authorizeService.login(this.email, this.pwd)
        .subscribe((status: String) => {
            if(status === '200') {
                this.router.navigate(['/'])
            }else{
              this.pwdState = this.error;
              this.errorState = this.wrong;
            }
        })
  }

  clearPwdState(){
    this.pwdState = this.normal;
  }

  clearEmailState(){
    this.emailState = this.normal;
  }
}