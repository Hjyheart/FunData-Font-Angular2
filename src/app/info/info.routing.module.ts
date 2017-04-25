/**
 * Created by hongjiayong on 2017/4/25.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./info.component";
import {InfoOverviewComponent} from "./overview/info.overview.component";
import {InfoDatasetsComponent} from "./datasets/info.datasets.component";
import {InfoCoursesComponent} from "./courses/info.courses.component";
import {InfoComComponent} from "./competitions/info.com.component";

const routes: Routes = [
  {
    path: 'myinfo',
    component: InfoComponent,
    children:[
      {
        path: 'overview',
        component: InfoOverviewComponent
      },
      {
        path: 'datasets',
        component: InfoDatasetsComponent
      },
      {
        path:'competitions',
        component: InfoComComponent
      },
      {
        path:'courses',
        component: InfoCoursesComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class InfoRoutingModule {}