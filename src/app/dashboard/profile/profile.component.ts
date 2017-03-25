/**
 * Created by hongjiayong on 2017/3/8.
 */
import {Component, OnInit} from '@angular/core'

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['../dashboard.component.css', 'profile.component.css']
})

//TODO: 各类row二分操作


export class ProfileComponent implements OnInit{

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