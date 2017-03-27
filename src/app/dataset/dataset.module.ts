/**
 * Created by hongjiayong on 2017/3/22.
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DatasetDetailComponent} from "./detail/detail.componnet";
import {DatasetListComponent} from "./list/list.component";
import {DatasetRoutingModule} from "./dataset.routing.module";
import {DatasetComponent} from "./dataset.component";
import {PaginationModule, ModalModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    DatasetRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    DatasetComponent,
    DatasetListComponent,
    DatasetDetailComponent
  ],
  providers: [

  ]
})

export class DatasetModule{}