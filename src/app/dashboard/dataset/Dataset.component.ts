/**
 * Created by hongjiayong on 2017/3/8.
 */
import { Component, OnInit } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-dataset',
  templateUrl: 'dataset.component.html'
})

export class DatasetComponent implements OnInit{

  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  ngOnInit(): void {
  }

}