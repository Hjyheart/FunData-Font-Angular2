/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from "./intro.component";


const routes: Routes = [
  {
    path: 'introduction',
    component: IntroComponent
  },

  // { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class IntroRoutingModule {}