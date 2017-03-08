/**
 * Created by hongjiayong on 2017/3/8.
 */
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'my-introduction',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css']
})

export class IntroComponent{
  /**
   * 移动到大屏
   */
  moveToHome(){
    $.scrollTo('#home', 500);
  }

  /**
   * 移动到概况
   */
  moveToAbout(){
    $.scrollTo('#about', 500);
  }

  /**
   * 移动到特点
   */
  moveToFeatures(){
    $.scrollTo('#features', 500);
  }

  /**
   * 移动到开始
   */
  moveToGetStart(){
    $.scrollTo('#get-start', 500);
  }

  /**
   * 移动到联系我们
   */
  moveToContact(){
    $.scrollTo('#contact', 500);
  }

}