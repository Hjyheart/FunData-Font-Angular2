/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard.component";
import {AuthorizeGuard} from "../services/AuthorizeGuard";

const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthorizeGuard],
    children:[
      {
        path: 'profile',
        component: ProfileComponent
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
