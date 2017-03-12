/**
 * Created by hongjiayong on 2017/3/9.
 */
import { Component, OnInit } from '@angular/core';
import {AuthorizeService} from "../services/AuthorizeService";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['../dashboard/dashboard.component.css']
})

export class RegisterComponent{
    constructor(private authorizeService: AuthorizeService,
              private router: Router,) {

    }

    public name: String;
    public email: String;
    public pwd: String;
    public repwd: String;

    public nameEmpty: Boolean = false;
    public emailEmpty: Boolean = false;
    public pwdEmpty: Boolean = false;
    public repwdEmpty: Boolean = false;
    public pwdEqual: Boolean = true;

    public register() {
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
                  this.router.navigate(['/dashboard'])
              }
        })

    }

}