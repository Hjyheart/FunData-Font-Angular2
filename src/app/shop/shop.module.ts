/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ShopComponent} from "./shop.component";
import {ShopRoutingModule} from "./shop.routing.module";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ShopRoutingModule
  ],
  declarations: [
    ShopComponent
  ],
  providers: [

  ]
})

export class ShopModule{}