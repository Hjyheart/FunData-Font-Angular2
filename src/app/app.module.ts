import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ButtonsModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import {AppRoutingModule} from "./app.routing.module";
import {IntroModule} from "./introduction/intro.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.componnet";
import {RegisterComponent} from "./register/register.component";
import {AuthorizeService} from "./services/AuthorizeService";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [
      BrowserModule,
      ButtonsModule.forRoot(),
      ModalModule.forRoot(),
      IntroModule,
      FormsModule,
      HttpModule,
      DashboardModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],
  providers: [
    AuthorizeService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
