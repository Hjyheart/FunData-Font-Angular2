/**
 * Created by hongjiayong on 2017/3/8.
 */
import {Component, OnInit} from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['../dashboard.component.css']
})

//TODO: 解决图标向下的问题
//TODO: 解决课程的卡片问题

export class ProfileComponent implements OnInit{
  public comIsCollapsed:boolean = true;
  public comInIsCollapsed:boolean = true;
  public datasetIsCollapsed:boolean = true;
  public datasetInIsCollapsed:boolean = true;
  public courseIsCollapsed:boolean = true;
  public courseInIsCollapsed:boolean = true;

  ngOnInit(): void {
  }

}