/**
 * Created by hongjiayong on 2017/3/8.
 */
import {Component, OnInit} from '@angular/core'

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['../dashboard.component.css', 'fancybox.css']
})

//TODO: 各类row二分操作


export class ProfileComponent implements OnInit{
  public comIsCollapsed:boolean = true;
  public comInIsCollapsed:boolean = true;
  public datasetIsCollapsed:boolean = true;
  public datasetInIsCollapsed:boolean = true;
  public courseIsCollapsed:boolean = true;
  public courseInIsCollapsed:boolean = true;
  public messageIsCollapsed:boolean = false;

  ngOnInit(): void {
  }

  uploadPic(){
    //TODO：上传头像并刷新侧边栏的头像和该页的头像
    console.log('调用');
  }

  editProfile(){
    //TODO: 编辑个人信息
  }
}