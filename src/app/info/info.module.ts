/**
 * Created by hongjiayong on 2017/4/25.
 */
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {NgModule, ElementRef} from "@angular/core";
import {InfoComponent} from "./info.component";
import {InfoDatasetsComponent} from "./datasets/info.datasets.component";
import {InfoComComponent} from "./competitions/info.com.component";
import {InfoCoursesComponent} from "./courses/info.courses.component";
import {InfoRoutingModule} from "./info.routing.module";
import {ModalModule, PaginationModule, AccordionModule} from "ng2-bootstrap";
import {PullComponent} from "./datasets/pull/info.dataset.pull.component";
import {RouterLinkActive} from "@angular/router";
import {PullRequestService} from "../services/PullRequestService";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    InfoRoutingModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [
    InfoComponent,
    InfoDatasetsComponent,
    InfoComComponent,
    InfoCoursesComponent,
    PullComponent
  ],
  providers: [
    PullRequestService

  ]
})

export class InfoModule{}