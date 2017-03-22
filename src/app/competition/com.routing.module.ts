/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComComponent} from "./com.component";
import {ComListComponent} from "./list/list.component";
import {ComDetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path: 'com',
    component: ComComponent,
    children:[
      {
        path: 'list',
        component: ComListComponent
      },
      {
        path: 'detail/:id',
        component: ComDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ComRoutingModule {}