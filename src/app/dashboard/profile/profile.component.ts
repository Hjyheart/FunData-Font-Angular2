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

//TODO: 个人资料修改的弹框
//TODO: 头像点击上传弹框
//TODO: 各类row二分操作


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