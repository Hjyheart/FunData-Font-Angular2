/**
 * Created by hongjiayong on 2017/3/8.
 */
import { Component, OnInit } from '@angular/core'
import {ProfileComponent} from "./profile/profile.component";

@Component({
  moduleId: module.id,
  selector: 'my-dashbord',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit{

  containerMargin: string = '150px';

  ngOnInit(): void {
  }

  dealMargin(state: boolean){
    if (state){
      this.containerMargin = '150px';
    }else{
      this.containerMargin = '0px';
    }
  }

}