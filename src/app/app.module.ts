import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {IntroModule} from "./introduction/intro.module";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.componnet";
import {RegisterComponent} from "./register/register.component";
import {AuthorizeService} from "./services/AuthorizeService";
import {FormsModule} from "@angular/forms";
import {HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {MarkdownModule} from 'angular2-markdown';
import {AuthorizeGuard} from "./services/AuthorizeGuard";
import {TestComponent} from "./test/test.component";
import {DatasetModule} from "./dataset/dataset.module";
import {MoocModule} from "./mooc/mooc.module";
import {ComModule} from "./competition/com.module";
import {ShopModule} from "./shop/shop.module";
import {HeaderComponent} from "./header/header.component";
import {CommonModule} from "@angular/common";
import {CurrentPageService} from "./services/CurrentPageService";
import {InfoModule} from "./info/info.module";
import {OthersComponent} from "./others/others.component";
import {InterceptorService} from "ng2-interceptors";
import {HttpInterceptor} from "./interceptors/HttpInterceptor";

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, httpInterceptor: HttpInterceptor) {
  const service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(httpInterceptor); // Add it here
  return service;
}

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    IntroModule,
    DatasetModule,
    MarkdownModule.forRoot(),
    MoocModule,
    ComModule,
    ShopModule,
    InfoModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    TestComponent,
    HeaderComponent,
    OthersComponent
  ],
  providers: [
    AuthorizeService,
    AuthorizeGuard,
    CurrentPageService,
    HttpInterceptor,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, HttpInterceptor]
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
