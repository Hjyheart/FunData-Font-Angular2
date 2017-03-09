/**
 * Created by hongjiayong on 2017/3/9.
 */
import {Component, OnInit, animate, transition, style, state, trigger} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-bar',
  templateUrl: 'bar.component.html',
  styleUrls: ['../dashboard.component.css'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        display: 'none',
        opacity: '0',
        // transform: 'translateX(-100%)'
      })),
      state('active', style({
        display: 'block',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})

export class BarComponent implements OnInit{

  private siderBarState: string = 'active';

  ngOnInit(): void {
  }

  controlSiderBar(){
    if(this.siderBarState === 'inactive'){
      this.siderBarState = 'active';
    }else{
      this.siderBarState = 'inactive';
    }
  }

}