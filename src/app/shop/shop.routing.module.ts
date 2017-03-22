/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from "./shop.component";

const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ShopRoutingModule {}