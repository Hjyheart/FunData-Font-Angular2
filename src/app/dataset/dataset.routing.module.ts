/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatasetListComponent} from "./list/list.component";
import {DatasetComponent} from "./dataset.component";
import {DatasetDetailComponent} from "./detail/detail.componnet";
import {DatasetCreateComponent} from "./create/create.component";

const routes: Routes = [
  {
    path: 'dataset',
    component: DatasetComponent,
    children:[
      {
        path: 'list',
        component: DatasetListComponent
      },
      {
        path: 'detail/:id',
        component: DatasetDetailComponent
      },
      {
        path:'create',
        component: DatasetCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class DatasetRoutingModule {}