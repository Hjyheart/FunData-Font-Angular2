/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ComComponent} from "./com.component";
import {ComDetailComponent} from "./detail/detail.component";
import {ComListComponent} from "./list/list.component";
import {ComRoutingModule} from "./com.routing.module";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    ComRoutingModule
  ],
  declarations: [
    ComComponent,
    ComListComponent,
    ComDetailComponent
  ],
  providers: [

  ]
})

export class ComModule{}