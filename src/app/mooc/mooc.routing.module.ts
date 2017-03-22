/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoocComponent} from "./mooc.component";
import {MoocListComponent} from "./list/list.component";
import {MoocDetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {
    path: 'mooc',
    component: MoocComponent,
    children:[
      {
        path: 'list',
        component: MoocListComponent
      },
      {
        path: 'detail/:id',
        component: MoocDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class MoocRoutingModule {}