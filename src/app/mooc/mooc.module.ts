/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MoocListComponent} from "./list/list.component";
import {MoocComponent} from "./mooc.component";
import {MoocDetailComponent} from "./detail/detail.component";
import {MoocRoutingModule} from "./mooc.routing.module";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    MoocRoutingModule
  ],
  declarations: [
    MoocComponent,
    MoocListComponent,
    MoocDetailComponent
  ],
  providers: [

  ]
})

export class MoocModule{}