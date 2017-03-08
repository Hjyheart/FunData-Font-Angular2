/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {DatasetComponent} from "./dataset/Dataset.component";
import {CompetitionComponent} from "./competition/competition.component";
import {CourseComponent} from "./course/course.component";
import {DashboardComponent} from "./dashboard.component";

const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [LoginRouteGuard]
    children:[
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'dataset',
        component: DatasetComponent
      },
      {
        path: 'competition',
        component: CompetitionComponent
      },
      {
        path: 'course',
        component: CourseComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
