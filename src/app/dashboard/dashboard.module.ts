/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";
import {CompetitionComponent} from "./competition/competition.component";
import {CourseComponent} from "./course/course.component";
import {DatasetComponent} from "./dataset/Dataset.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardRoutingModule} from "./dashboard.routing";
import {BarComponent} from "./bar/bar.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  imports: [
    BrowserModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    CompetitionComponent,
    CourseComponent,
    DatasetComponent,
    ProfileComponent,
    FooterComponent,
    BarComponent
  ]
})
export class DashboardModule { }
