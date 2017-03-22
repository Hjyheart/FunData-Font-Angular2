/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardRoutingModule} from "./dashboard.routing";
import {BarComponent} from "./bar/bar.component";
import {FooterComponent} from "./footer/footer.component";
import {CollapseModule, ModalModule, PopoverModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    BarComponent
  ]
})
export class DashboardModule { }
