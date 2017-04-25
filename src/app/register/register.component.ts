/**
 * Created by hongjiayong on 2017/3/9.
 */
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../services/AuthorizeService";
import {Router} from "@angular/router";
import {CurrentPageService} from "../services/CurrentPageService";

@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit{

  private nameState:string;
  private emailState:string;
  private pwdState:string;
  private pwdConState:string;

  public name: String;
  public email: String;
  public pwd: String;
  public repwd: String;

  public nameEmpty: Boolean = false;
  public emailEmpty: Boolean = false;
  public pwdEmpty: Boolean = false;
  public repwdEmpty: Boolean = false;
  public pwdEqual: Boolean = true;

  public normal:string = 'form-group';
  public error:string = 'form-group has-error has-feedback';

  constructor(
    private authorizeService: AuthorizeService,
    private router: Router,
    private currentPageService: CurrentPageService
  ) {}

  ngOnInit(){
    this.currentPageService.currentPage = 'register';
    this.nameState = this.normal;
    this.emailState = this.normal;
    this.pwdState = this.normal;
    this.pwdConState = this.normal;
  }

  public register() {
    if (this.name == '' || this.name == undefined){
      this.nameState = this.error;
      return;
    }

    if (this.email == '' || this.email == undefined){
      this.emailState = this.error;
      return;
    }

    if (this.pwd == '' || this.pwd == undefined){
      this.pwdState = this.error;
      return;
    }

    if (this.pwd != this.repwd){
      this.pwdState = this.error;
      return;
    }


    this.nameEmpty = this.name == '';
    this.emailEmpty = this.email == '';
    this.pwdEmpty = this.pwd == '';
    this.repwdEmpty = this.repwd == '';
    this.pwdEqual = this.pwd ===this.repwd;
    if(this.nameEmpty || this.emailEmpty || this.pwdEmpty || this.repwdEmpty || !this.pwdEqual) {
        return
    }
    this.authorizeService.register(this.email, this.name, this.pwd)
      .subscribe((status: String) => {
          if(status == '200') {
              this.router.navigate(['/'])
          }
    })

  }

  clearNameState(){
    this.nameState = this.normal;
  }

  clearEmailState(){
    this.emailState = this.normal;
  }

  clearPwdState(){
    this.pwdState = this.normal;
  }

  clearPwdConState(){
    this.pwdConState = this.normal;
  }

}