/**
 * Created by hongjiayong on 2017/3/8.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {IntroRoutingModule} from "./intro.routing";
import {IntroComponent} from "./intro.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IntroRoutingModule
  ],
  declarations: [
    IntroComponent
  ],
  providers: []
})
export class IntroModule {}
