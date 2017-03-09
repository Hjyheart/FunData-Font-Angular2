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

@NgModule({
  imports:      [
    BrowserModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    IntroModule,
    DashboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
